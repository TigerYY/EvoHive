(function () {
  'use strict';

  var STORAGE_KEY = 'evohive-lang';

  var zh = {
    'meta.title': 'EvoHive 团队智能体工作台 | 智巢',
    'nav.logo': 'EvoHive',
    'nav.sub': '智巢',
    'nav.positioning': '产品定位',
    'nav.model': '双层模型',
    'nav.sixTuple': '六元组',
    'nav.deployment': '部署',
    'nav.roadmap': '路线',
    'nav.cta': '联系我们',
    'hero.symbol': 'TEAM AGENT WORKSPACE',
    'hero.title': '让团队进化为智能体',
    'hero.tagline': 'EvoHive 是一个面向小团队的团队智能体工作台，让能力共享、知识沉淀与持续协作在同一套系统中完成。',
    'hero.ctaPrimary': '预约演示',
    'hero.ctaSecondary': '阅读产品定义',
    'positioning.symbol': 'POSITIONING',
    'positioning.title': '不是另一个聊天机器人，而是团队的智能体工作台',
    'positioning.lead': '在清晰边界下装配 Agent、复用 Skill、沉淀知识，并让团队能力持续进化。',
    'positioning.not1': '不是',
    'positioning.notItem1': '单一聊天助手',
    'positioning.notItem2': '全公司统一大脑',
    'positioning.notItem3': '无限自治的黑盒系统',
    'positioning.is1': '是',
    'positioning.isItem1': '团队级智能体运行环境',
    'positioning.isItem2': '团队能力共享与装配平台',
    'positioning.isItem3': '受监督、可进化、可回滚的协作系统',
    'positioning.footer': 'EvoHive 面向 3–20 人扁平小团队：运行时按团队隔离，能力按团队共享与跨团队发布，不共享原始会话与原始记忆。',
    'model.symbol': 'CORE MODEL',
    'model.title': '双层模型',
    'model.lead': 'Team Workspace 与 Capability Exchange 构成产品内核。',
    'model.twTitle': '团队工作台',
    'model.twDesc': '以团队为边界的运行时与资源容器：Agents、会话、工作区存储、共享技能库、知识视图、权限与审计。',
    'model.ceTitle': '能力交换层',
    'model.ceDesc': '团队间能力发布、发现、安装与治理：Skill / Workflow / Policy Pack / Agent Blueprint，版本与兼容性、Owner 与风险级别。',
    'sixTuple.symbol': 'SIX-TUPLE',
    'sixTuple.title': '六元组能力映射',
    'sixTuple.lead': '完整保留六层：出入口、路由、频道、技能、记忆、沙箱，在小团队场景下收敛而非删层。',
    'sixTuple.entry': '统一协议转换，1–2 主入口（Web + Chat），入站事件带 teamId / channel',
    'sixTuple.routing': '来源 / 角色 / 任务 / 默认四类规则，显式兜底与可观测日志',
    'sixTuple.channels': 'Team Workspace + 稳定 Session Key，会话与记忆按 Key 隔离',
    'sixTuple.skills': '声明式能力单元，团队内共享 + 能力交换层安装，effectivePolicy 不扩权',
    'sixTuple.memory': 'Compaction + 关键事实，团队内长期记忆；跨团队仅 Knowledge View',
    'sixTuple.sandbox': '分级隔离，最小权限、审计日志、Policy Pack，安装技能不继承全部权限',
    'deployment.symbol': 'DEPLOYMENT',
    'deployment.title': '部署模式',
    'deployment.lead': '支持私有环境、客户自租云主机、平台多租户 SaaS、混合部署。',
    'deployment.privateTitle': '私有环境 / 独立设备',
    'deployment.privateDesc': '客户侧控制面与数据面，内网或外网 LLM 自配；平台提供安装包与文档。',
    'deployment.cloudTitle': '客户自租云主机',
    'deployment.cloudDesc': '单租户，镜像或 Helm 部署；可选平台升级与监控。',
    'deployment.saasTitle': '平台多租户 SaaS',
    'deployment.saasDesc': '控制面与运行面平台托管，按租户逻辑隔离，快速开通。',
    'deployment.hybridTitle': '混合部署',
    'deployment.hybridDesc': '敏感数据在客户侧，控制面与能力目录可上云，统一治理。',
    'interaction.symbol': 'INTERACTION',
    'interaction.title': '交互方式',
    'interaction.lead': 'Web Team Console、Chat Entry、API/Webhook、审批中心、Run Log / Ops Dashboard。',
    'interaction.item1': '团队成员：会话与任务、成果查看、转人工、知识检索',
    'interaction.item2': '团队管理员：Agent 装配、权限、知识视图、审批、审计',
    'interaction.item3': '能力发布者：发布 Skill / Workflow / Blueprint / Policy',
    'interaction.item4': '运营 / Owner：使用分析、成本归因、版本治理、回滚',
    'output.symbol': 'OUTPUTS',
    'output.title': '成果与输出',
    'output.lead': '即时结果、资产化成果、持续动作、运营与治理产出，均有沉淀与归属规则。',
    'output.immediate': '即时结果',
    'output.immediateDesc': '回复、结构化结果、表单、审批单 → 会话与审计',
    'output.asset': '资产化成果',
    'output.assetDesc': '代码库、文档库、知识包、Workflow、Blueprint → 工作区与 Capability Exchange',
    'output.ongoing': '持续动作',
    'output.ongoingDesc': '定时巡检、推广执行、跟进任务 → 可审计、可关闭',
    'evolution.symbol': 'EVOLUTION',
    'evolution.title': '受监督的自进化',
    'evolution.lead': '观测 → 反馈 → 诊断 → 提案 → 评测 → 审批 → 灰度 → 晋级或回滚；三层门禁（发布前、安装时、运行时）。',
    'evolution.footer': '可演化对象：Skill、Workflow、Blueprint、Policy Pack、Knowledge View、Routing Pack、Memory Pack。禁止自动扩权、自动跨团队共享 raw memory、自动改生产代码直接上线。',
    'roadmap.symbol': 'ROADMAP',
    'roadmap.title': '阶段路线',
    'roadmap.mvp': '私有部署优先；Web Console + Chat Entry；Skill 级发布与安装；文档/代码/任务输出。',
    'roadmap.v1': '客户云主机部署；审批中心、能力目录、Run Log；Workflow、Blueprint、Knowledge View；成本归因。',
    'roadmap.v2': '多租户 SaaS + 混合部署；跨团队能力网络；Routing Pack、Memory Pack；签名发布、风险扫描。',
    'cta.symbol': 'CONTACT',
    'cta.title': '预约演示',
    'cta.lead': '欢迎了解 EvoHive 团队智能体工作台的能力与部署方式。',
    'cta.button': '联系我们',
    'footer.text': 'EvoHive is a team agent workspace for small teams to compose, share, govern, and evolve intelligence together.',
    'footer.copyright': '© EvoHive 智巢'
  };

  var en = {
    'meta.title': 'EvoHive Team Agent Workspace | 智巢',
    'nav.logo': 'EvoHive',
    'nav.sub': '智巢',
    'nav.positioning': 'Product',
    'nav.model': 'Model',
    'nav.sixTuple': 'Six-Tuple',
    'nav.deployment': 'Deployment',
    'nav.roadmap': 'Roadmap',
    'nav.cta': 'Contact',
    'hero.symbol': 'TEAM AGENT WORKSPACE',
    'hero.title': 'Build Team Intelligence That Evolves',
    'hero.tagline': 'EvoHive helps small teams compose agents, share capabilities, govern knowledge, and evolve safely over time.',
    'hero.ctaPrimary': 'Get Early Access',
    'hero.ctaSecondary': 'View Architecture',
    'positioning.symbol': 'POSITIONING',
    'positioning.title': 'Not another chatbot — a team agent workspace',
    'positioning.lead': 'Compose agents, reuse skills, govern knowledge, and evolve team capability within clear boundaries.',
    'positioning.not1': 'Not',
    'positioning.notItem1': 'A single chatbot',
    'positioning.notItem2': 'A company-wide single brain',
    'positioning.notItem3': 'An unbounded autonomous black box',
    'positioning.is1': 'Is',
    'positioning.isItem1': 'Team-level agent runtime',
    'positioning.isItem2': 'Team capability sharing and composition platform',
    'positioning.isItem3': 'Supervised, evolvable, rollback-safe collaboration',
    'positioning.footer': 'EvoHive serves flat teams of 3–20: runtime isolated per team, capabilities shared and published across teams; raw sessions and raw memory are not shared.',
    'model.symbol': 'CORE MODEL',
    'model.title': 'Two-Layer Model',
    'model.lead': 'Team Workspace and Capability Exchange form the product core.',
    'model.twTitle': 'Team Workspace',
    'model.twDesc': 'Runtime and resource container scoped by team: agents, sessions, workspace storage, shared skills, knowledge views, permissions, and audit.',
    'model.ceTitle': 'Capability Exchange',
    'model.ceDesc': 'Publish, discover, install, and govern capabilities across teams: Skill / Workflow / Policy Pack / Agent Blueprint, versioning, compatibility, owner, and risk level.',
    'sixTuple.symbol': 'SIX-TUPLE',
    'sixTuple.title': 'Six-Tuple Capability Map',
    'sixTuple.lead': 'All six layers preserved: Entry, Routing, Channels, Skills, Memory, Sandbox — converged for small teams, not removed.',
    'sixTuple.entry': 'Unified protocol; 1–2 main entries (Web + Chat); inbound events with teamId / channel',
    'sixTuple.routing': 'Source / role / task / default rules; explicit fallback and observable logs',
    'sixTuple.channels': 'Team Workspace + stable Session Key; sessions and memory isolated by key',
    'sixTuple.skills': 'Declarative skills; team shared + install from exchange; effectivePolicy never widens',
    'sixTuple.memory': 'Compaction + key facts; team long-term memory; cross-team only via Knowledge View',
    'sixTuple.sandbox': 'Tiered isolation; least privilege, audit logs, Policy Pack; installed skills do not inherit full permissions',
    'deployment.symbol': 'DEPLOYMENT',
    'deployment.title': 'Deployment Modes',
    'deployment.lead': 'Private / on-prem, customer cloud VM, platform multi-tenant SaaS, and hybrid.',
    'deployment.privateTitle': 'Private / standalone',
    'deployment.privateDesc': 'Control and data on customer side; on-prem or cloud LLM; platform provides install package and docs.',
    'deployment.cloudTitle': 'Customer cloud VM',
    'deployment.cloudDesc': 'Single-tenant; image or Helm; optional platform upgrades and monitoring.',
    'deployment.saasTitle': 'Platform multi-tenant SaaS',
    'deployment.saasDesc': 'Control and runtime hosted; tenant isolation; quick onboarding.',
    'deployment.hybridTitle': 'Hybrid',
    'deployment.hybridDesc': 'Sensitive data on-prem; control plane and capability catalog can be cloud; unified governance.',
    'interaction.symbol': 'INTERACTION',
    'interaction.title': 'How You Interact',
    'interaction.lead': 'Web Team Console, Chat Entry, API/Webhook, Review & Approval Center, Run Log / Ops Dashboard.',
    'interaction.item1': 'Team members: sessions, tasks, results, handoff, knowledge search',
    'interaction.item2': 'Admins: agent composition, permissions, knowledge views, approvals, audit',
    'interaction.item3': 'Publishers: publish Skill / Workflow / Blueprint / Policy',
    'interaction.item4': 'Ops / Owner: usage, cost attribution, version governance, rollback',
    'output.symbol': 'OUTPUTS',
    'output.title': 'Outcomes and Outputs',
    'output.lead': 'Immediate results, assetized outcomes, ongoing actions, and ops/governance outputs — each with clear ownership and retention.',
    'output.immediate': 'Immediate results',
    'output.immediateDesc': 'Replies, structured data, forms, approvals → session and audit',
    'output.asset': 'Assetized outcomes',
    'output.assetDesc': 'Code, docs, knowledge packs, Workflow, Blueprint → workspace and Capability Exchange',
    'output.ongoing': 'Ongoing actions',
    'output.ongoingDesc': 'Scheduled checks, campaigns, follow-ups → auditable, stoppable',
    'evolution.symbol': 'EVOLUTION',
    'evolution.title': 'Supervised Self-Evolution',
    'evolution.lead': 'Observe → feedback → diagnose → propose → evaluate → approve → canary → promote or rollback; three gates (pre-release, install-time, runtime).',
    'evolution.footer': 'Evolvable: Skill, Workflow, Blueprint, Policy Pack, Knowledge View, Routing Pack, Memory Pack. No auto-widening of permissions, no auto cross-team raw memory/session, no auto production code changes.',
    'roadmap.symbol': 'ROADMAP',
    'roadmap.title': 'Roadmap',
    'roadmap.mvp': 'Private deploy first; Web Console + Chat Entry; Skill-level publish/install; docs, code, task outputs.',
    'roadmap.v1': 'Customer cloud VM; approval center, capability catalog, Run Log; Workflow, Blueprint, Knowledge View; cost attribution.',
    'roadmap.v2': 'Multi-tenant SaaS + hybrid; cross-team capability network; Routing Pack, Memory Pack; signed publish, risk scan.',
    'cta.symbol': 'CONTACT',
    'cta.title': 'Get in touch',
    'cta.lead': 'Learn more about EvoHive Team Agent Workspace and deployment options.',
    'cta.button': 'Contact us',
    'footer.text': 'EvoHive is a team agent workspace for small teams to compose, share, govern, and evolve intelligence together.',
    'footer.copyright': '© EvoHive 智巢'
  };

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'zh') return stored;
    } catch (e) {}
    return 'zh';
  }

  function setLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function getStrings(lang) {
    return lang === 'en' ? en : zh;
  }

  function applyLanguage(lang) {
    var strings = getStrings(lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (strings[key] !== undefined) el.textContent = strings[key];
    });
    var titleEl = document.querySelector('title');
    if (titleEl) titleEl.textContent = strings['meta.title'];
    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function initLang() {
    var lang = getLang();
    applyLanguage(lang);
    var toggle = document.getElementById('langToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = getLang() === 'zh' ? 'en' : 'zh';
        setLang(next);
        applyLanguage(next);
      });
    }
  }

  function initNav() {
    var btn = document.getElementById('navToggle');
    var links = document.querySelector('.nav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', function () {
      links.classList.toggle('is-open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.innerWidth <= 768) links.classList.remove('is-open');
      });
    });
  }

  initLang();
  initNav();
})();
