# EvoHive 网站部署到 evohive.net（Ubuntu + HTTPS）

## 前提

1. **SSH 密钥**：将 Ubuntu 云主机的私钥放在项目根目录下 `others/YT2026.pem`（或修改脚本中的 `KEY` 变量）。  
   当前 `others/YT2026.pem` 为符号链接且目标文件不存在，需改为真实密钥文件或修正链接目标。

2. **DNS**：将 `evohive.net` 和 `www.evohive.net` 的 A 记录指向该 Ubuntu 主机公网 IP。

3. **主机**：Ubuntu，建议 20.04+，默认使用用户 `ubuntu`（可通过环境变量 `REMOTE_USER` 覆盖）。

## 一键部署

在项目根目录执行：

```bash
./website/deploy-to-evohive.sh
```

脚本会：

- 使用 `rsync` 将 `website/` 下所有文件同步到服务器 `/var/www/evohive`
- 安装并配置 Nginx，监听 80，根目录为 `/var/www/evohive`
- 若存在 `certbot` 或可安装，则申请 Let’s Encrypt 证书并配置 HTTPS（含 80→443 重定向）

## 环境变量

- `REMOTE_USER`：SSH 用户名，默认 `ubuntu`
- `REMOTE_HOST`：主机名或域名，默认 `evohive.net`

示例：

```bash
REMOTE_USER=root REMOTE_HOST=1.2.3.4 ./website/deploy-to-evohive.sh
```

## 仅配置 HTTPS（站点已部署时）

SSH 登录服务器后执行：

```bash
sudo apt-get update && sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d evohive.net -d www.evohive.net --agree-tos --redirect -m your@email.com
```

## 证书续期

Let’s Encrypt 证书默认由 `certbot` 的 systemd timer 自动续期。可手动检查：

```bash
sudo certbot renew --dry-run
```
