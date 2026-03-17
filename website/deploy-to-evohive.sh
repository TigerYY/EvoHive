#!/usr/bin/env bash
# Deploy EvoHive static site to evohive.net and configure HTTPS
# Usage: from repo root, run: ./website/deploy-to-evohive.sh
# Prereq: others/YT2026.pem exists and evohive.net DNS points to this host

set -e
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
KEY="${KEY:-$REPO_ROOT/others/evohive.pem}"
if [[ ! -f "$KEY" ]]; then
  KEY="$REPO_ROOT/others/YT2026.pem"
fi
REMOTE_USER="${REMOTE_USER:-ubuntu}"
REMOTE_HOST="${REMOTE_HOST:-evohive.net}"
REMOTE_DIR="/var/www/evohive"

if [[ ! -f "$KEY" ]]; then
  echo "Error: SSH key not found. Tried: others/evohive.pem, others/YT2026.pem, or set KEY= path."
  exit 1
fi
chmod -f 600 "$KEY" 2>/dev/null || true

TMP_REMOTE="/tmp/evohive-web-$$"
echo "Syncing website/ to ${REMOTE_USER}@${REMOTE_HOST}:${TMP_REMOTE} ..."
rsync -avz --delete \
  -e "ssh -i \"$KEY\" -o StrictHostKeyChecking=accept-new" \
  "$REPO_ROOT/website/" \
  "${REMOTE_USER}@${REMOTE_HOST}:${TMP_REMOTE}/"

echo "Running remote setup (copy to docroot, Nginx + HTTPS)..."
ssh -i "$KEY" -o StrictHostKeyChecking=no "${REMOTE_USER}@${REMOTE_HOST}" "bash -s" -- "$TMP_REMOTE" "$REMOTE_DIR" << 'REMOTE'
set -e
TMP_REMOTE="$1"
SITE_DIR="$2"
sudo mkdir -p "$SITE_DIR"
sudo cp -a "$TMP_REMOTE"/. "$SITE_DIR"/
sudo chown -R www-data:www-data "$SITE_DIR" 2>/dev/null || sudo chown -R nginx:nginx "$SITE_DIR" 2>/dev/null || true
rm -rf "$TMP_REMOTE"

if command -v nginx >/dev/null 2>&1; then
  NGINX=nginx
elif command -v apt-get >/dev/null 2>&1; then
  sudo apt-get update -qq
  sudo DEBIAN_FRONTEND=noninteractive apt-get install -y -qq nginx
  NGINX=nginx
else
  echo "Install Nginx manually and point docroot to $SITE_DIR"
  exit 0
fi

sudo tee /etc/nginx/sites-available/evohive.net >/dev/null << 'NGX'
server {
    listen 80;
    server_name evohive.net www.evohive.net;
    root /var/www/evohive;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
    location ~* \.(css|js|ico)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }
}
NGX
sudo ln -sf /etc/nginx/sites-available/evohive.net /etc/nginx/sites-enabled/ 2>/dev/null || true
sudo rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true
sudo nginx -t && sudo systemctl reload nginx 2>/dev/null || sudo service nginx reload

if command -v certbot >/dev/null 2>&1; then
  echo "Running certbot for HTTPS..."
  sudo certbot --nginx -d evohive.net -d www.evohive.net --non-interactive --agree-tos --redirect --email admin@evohive.net 2>/dev/null || true
else
  if command -v apt-get >/dev/null 2>&1; then
    sudo apt-get install -y -qq certbot python3-certbot-nginx 2>/dev/null || true
    sudo certbot --nginx -d evohive.net -d www.evohive.net --non-interactive --agree-tos --redirect --email admin@evohive.net 2>/dev/null || true
  fi
fi
REMOTE

echo "Deploy and HTTPS setup done."
exit 0
