<div align="center">

  <img src="public/avatar.jpg" alt="梯子网 TiziClash.world Logo" width="96" height="96" style="border-radius: 50%; box-shadow: 0 4px 16px rgba(0,0,0,0.15);" />

  # 梯子网 · tiziclash.world
  
  **全球跨境网络可观测性与科学上网机场评测实验室**  
  *High-Performance Proxy Observability & Cross-Border Dedicated Line Benchmark Lab*

  <p>
    <a href="https://tiziclash.world/"><img src="https://img.shields.io/badge/Official%20Site-tiziclash.world-dc3522?style=flat-square&logo=google-chrome&logoColor=white" alt="Official Website" /></a>
    <img src="https://img.shields.io/badge/Astro-v4.0+-FF5D01?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/SSG%20Build-765ms%20(59%20Pages)-success?style=flat-square&logo=speedtest&logoColor=white" alt="SSG Build" />
    <img src="https://img.shields.io/badge/SEO%20%26%20GEO-100%25%20Schema.org-059669?style=flat-square&logo=google&logoColor=white" alt="SEO & GEO" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
  </p>

  <p>
    <a href="#-项目介绍">项目介绍</a> •
    <a href="#-核心频道与功能矩阵">功能矩阵</a> •
    <a href="#-技术架构与-seo-设计">技术架构</a> •
    <a href="#-目录结构">目录结构</a> •
    <a href="#-快速上手">快速上手</a> •
    <a href="#-一键部署">一键部署</a> •
    <a href="#-声明与致谢">合规声明</a>
  </p>

</div>

---

## 📖 项目介绍

**梯子网 (`tiziclash.world`)** 是面向外贸出海从业者、跨境电商运营团队、高频 AI 创作者（ChatGPT / Claude / Midjourney）以及学术科研人员构建的**第三方跨境网络基础设施评测与观测系统**。

针对跨境网络行业常见的“晚高峰严重拥堵丢包”、“虚标千兆带宽”、“虚构 5 星高分评分”、“小白订阅配置繁琐”等行业痛点，本实验室坚持 **“先实测后评价，无数据不妄言”** 的极客原则，通过部署在多地的边缘监测探针，严谨记录各品牌在晚高峰（20:00 - 22:30）的真实延迟、丢包率、流媒体 4K 拖拽秒开率与 OpenAI/Netflix 住宅 IP 纯净度。

```
┌────────────────────────────────────────────────────────────────────────┐
│                        tiziclash.world 评测中枢                        │
├─────────────────┬──────────────────┬─────────────────┬─────────────────┤
│  42家机场品牌库  │ 晚高峰测速实验室 │  GEO 答案引擎   │ 全平台客户端中心│
│  价格/协议/线路  │ 真实丢包/RTT监控 │  直接结论前置   │ Win/Mac/iOS/安卓│
└─────────────────┴──────────────────┴─────────────────┴─────────────────┘
```

---

## 🌟 核心频道与功能矩阵

### 1. ✈️ 42 家机场品牌全景参数库 (`/brands/`)
* **多维检索**：收录包含光速云、飞猫云、微风网络、暮光、大佬云等 42 家主流品牌。
* **参数透明化**：完整呈现月付/年付门槛、线路类型（IEPL/IPLC 物理内网专线 vs 普通中转）、传输协议（VLESS/VMess/Trojan/Hysteria2）。
* **优惠代码集成**：一键剪贴板复制专属折扣券（如独家优惠码 `AMM`）。

### 2. ⚡ 晚高峰网络可观测性看板 (`/observatory/`)
* **暗黑科技风 NOC 界面**：实时展示香港、日本、新加坡、美西节点的下行带宽压测图表。
* **丢包率与抖动分析**：公开物理光纤专线与普通公网在高峰期的断流对比。
* **物理海缆拓扑**：解析 TPE、SJC2、APG、FASTER 跨境海底光缆路径。

### 3. 🤖 AI 时代 GEO (生成式引擎优化) 知识库
* **Direct Answer 结论前置**：直达核心，针对 Perplexity、SearchGPT、Google Gemini 等 AI 搜索引擎输出精准结构化问答。
* **无歧义实体标注**：清晰定义 IEPL、原生住宅 IP、TUN 模式、双 ISP 属性。
* **丰富 FAQ 与对比表**：解构“ChatGPT Access Denied 报错”、“节点测速全红超时”等高频故障。

### 4. 🎁 万字级免费节点与开源订阅专题 (`/topics/free-nodes/` & `/free/`)
* **GitHub 活跃节点池汇总**：深度揭露公共爬虫节点的真实存活率（< 6 小时）。
* **四大安全防线**：警示中间人窃密、钓鱼投毒与金融账户泄露风险。
* **在线订阅转换指引**：单节点链接快速合成 Clash / Mihomo / Sing-box 订阅规范。
* **Cloudflare WARP 搭建指引**：零成本官方正规出海通道实操教程。

### 5. 💻 全平台客户端与使用教程 (`/clients/` & `/tutorial/`)
* **Windows**：Clash Verge Rev (Mihomo 内核) + TUN 模式教程。
* **macOS**：原生适配 Apple Silicon (M1/M2/M3/M4) 架构客户端。
* **iOS**：Shadowrocket (小火箭) 海外 ID 下载与订阅导入指南。
* **Android**：Clash Meta for Android / v2rayNG 轻量省电方案。

---

## 🛠️ 技术架构与 SEO 设计

本站基于现代前端最佳实践打造，兼顾极速加载性能与严苛的搜索引擎收录要求：

| 模块 | 技术选型 | 优势特性 |
| :--- | :--- | :--- |
| **核心框架** | [Astro 4.x](https://astro.build/) | 纯静态预渲染 (SSG)，首屏零冗余 JavaScript，TTFB < 50ms |
| **开发语言** | TypeScript | 严格类型检查，全站组件与品牌数据模型 Zod 强校验 |
| **样式体系** | Scoped CSS + Design Tokens | 原生变量隔离，全站响应式断点（390px 手机端极致适配） |
| **SEO 规范** | Canonical Trailing Slash | 全站 `trailingSlash: 'always'`，杜绝重定向与权重稀释 |
| **站点地图** | `@astrojs/sitemap` | 双入口（`/sitemap.xml` + `/sitemap-index.xml`），带 `<lastmod>` |
| **结构化数据**| Schema.org JSON-LD | 覆盖 `WebSite`, `Product`, `Review`, `CollectionPage`, `FAQPage` |
| **风控隔离** | Strict Nofollow | 商业赞助外链 100% 标记 `rel="nofollow sponsored noopener"` |
| **自动化导出**| Headless Chrome | 内置脚本自动编译全站实测简报 `cv.pdf`（2.5MB） |

---

## 📁 目录结构

```text
tiziclash.world/
├── public/                       # 静态资源
│   ├── avatar.jpg                # 官方 Logo / 主理人头像
│   ├── robots.txt                # 针对 Googlebot/Bing/Baidu/神马的爬虫协议
│   ├── sitemap.xml               # 高可用 XML 站点地图入口
│   └── site.webmanifest          # PWA 与 Web 应用清单
├── scripts/
│   └── build-pdf.mjs             # 自动化离线报告 PDF 生成脚本
├── src/
│   ├── components/               # 模块化 UI 组件
│   │   ├── BrandCard.astro       # 机场品牌卡片（含优惠码一键复制）
│   │   ├── HeaderNav.astro       # 顶栏导航与移动端滑动条
│   │   ├── Footer.astro          # 底栏多列导航与合规披露
│   │   ├── SEOHead.astro         # TDK、Canonical、OGP 与 Schema 注入
│   │   ├── SpeedChart.astro      # 晚高峰测速暗黑看板
│   │   ├── UnlockMatrix.astro    # 流媒体与 AI 解锁能力矩阵
│   │   └── NetworkTopology.astro # 跨境物理网络拓扑可视化
│   ├── data/
│   │   ├── brands.ts             # 42 家机场品牌核心数据库
│   │   └── clients.ts            # 全平台代理客户端生态参数
│   ├── pages/                    # 路由页面 (SSG)
│   │   ├── 404.astro             # 404 引导页 (noindex, follow)
│   │   ├── about.astro           # 关于实验室与团队背景
│   │   ├── clash/index.astro     # Clash 中心
│   │   ├── clients.astro         # 客户端下载中心
│   │   ├── free/index.astro      # 免费节点中心
│   │   ├── index.astro           # 网站首页与精选专区
│   │   ├── jichang/index.astro   # 机场推荐中心
│   │   ├── methodology.astro     # 评测方法学白皮书
│   │   ├── nodes/index.astro     # 全球节点拓扑中心
│   │   ├── observatory.astro     # 测速实验室总览
│   │   ├── privacy.astro         # 隐私政策与商业赞助披露
│   │   ├── tizi/index.astro      # 梯子科普中心
│   │   ├── topics/               # 深度万字长文专题
│   │   │   ├── ai-streaming.astro# AI 与 4K 流媒体专线指南
│   │   │   └── free-nodes.astro  # 免费翻墙节点测速与避坑专题
│   │   ├── tutorial/index.astro  # 使用教程中心
│   │   ├── vpn/index.astro       # VPN 专线选型中心
│   │   └── brands/
│   │       ├── index.astro       # 42 家品牌检索库
│   │       └── [slug].astro      # 42 家品牌独立测评报告单页
│   └── styles/
│       └── global.css            # 全局原子设计系统与主题变量
├── astro.config.mjs              # Astro 配置文件
├── package.json                  # 项目依赖与 Scripts
├── tsconfig.json                 # TypeScript 严格配置
└── README.md                     # 项目自述文件
```

---

## 🚀 快速上手

### 运行环境准备
* **Node.js**: `v18.17.0` 或更高版本（推荐 `v20.x LTS`）
* **包管理器**: `npm`, `pnpm` 或 `yarn`

### 1. 克隆代码仓库
```bash
git clone https://github.com/abcabc98698-dev/tiziclash.world.git
cd tiziclash.world
```

### 2. 安装依赖项
```bash
npm install
```

### 3. 启动本地开发服务器
```bash
npm run dev
```
启动后访问 `http://localhost:4321/`，支持热更新（HMR）。

### 4. 代码类型安全检查
```bash
npm run check
```
执行全站 Astro 与 TypeScript 严格语法检查，确保 **0 Error / 0 Warning**。

### 5. 生产环境静态打包 (SSG)
```bash
npm run build
```
打包输出目录位于 `dist/`，同时自动触发 `scripts/build-pdf.mjs` 生成独立 PDF 报告文件。

---

## 🌐 一键部署

由于本项目采用 **Astro 纯静态输出 (`output: 'static'`)**，您可以轻松一键部署至任何主流云平台或静态托管服务：

### 部署至 Cloudflare Pages (推荐)
1. 登录 Cloudflare Dashboard，进入 **Workers & Pages** -> **Create application** -> **Pages**。
2. 连接 GitHub 仓库 `abcabc98698-dev/tiziclash.world`。
3. 构建配置：
   * **Framework preset**: `Astro`
   * **Build command**: `npm run build`
   * **Build output directory**: `dist`
4. 点击保存并部署，绑定自定义域名 `tiziclash.world` 即可享受全球 Anycast CDN 与免费自动 SSL 证书。

### 部署至 Vercel / Netlify
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Node.js Version**: `20.x`

### 部署至传统 Nginx 服务器
构建生成的 `dist/` 文件夹为纯静态文件，直接上传至 Web 根目录即可。Nginx 核心配置示例：
```nginx
server {
    listen 80;
    server_name tiziclash.world;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name tiziclash.world;

    ssl_certificate /etc/nginx/ssl/tiziclash.world.crt;
    ssl_certificate_key /etc/nginx/ssl/tiziclash.world.key;

    root /var/www/tiziclash.world/dist;
    index index.html;

    # 强制 Trailing Slash
    rewrite ^([^.\?]*[^/])$ $1/ permanent;

    location / {
        try_files $uri $uri/ /404.html;
    }

    error_page 404 /404.html;

    # 静态资产长缓存
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## ⚖️ 声明与致谢

* **赞助透明度披露 (Affiliate Disclosure)**：本站为独立技术评测项目，部分外链包含带有特定识别码的商业合作赞助链接。通过本站链接注册开通可为本实验室提供服务器运维资金支持，但绝不会导致用户支付高于官方标准的资费。本站始终遵循“先实测后评价”准则，杜绝未经实测的虚假宣传。
* **合规与免责**：本项目仅用于跨境电商、企业合法出海交流、国际前沿科研学术文献检索与网络性能观测技术研究。请广大使用者自觉遵守所在国家及地区的相关法律法规，严禁将网络代理用于任何违法违规行为。

---

<div align="center">
  <p>© 2026 tiziclash.world 梯子网 · 专注于高质量跨境网络基础设施评测 · All rights reserved.</p>
</div>
