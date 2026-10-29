# TiziClash World

A modern, high-performance personal profile and curriculum vitae website built with [Astro](https://astro.build).

## Features

- ⚡ **Zero-JS by Default**: Blazing fast static rendering and Core Web Vitals optimization.
- 🎯 **SEO Engineered**: Comprehensive Open Graph, Twitter Cards, Schema.org JSON-LD structured data, and auto-generated XML sitemaps.
- 📄 **Automated PDF Export**: Server-side PDF generation powered by headless Chromium and CSS Paged Media.
- 🗂️ **Content-Driven**: All CV content and details configured cleanly in `src/data/cv.yaml`.
- 🎨 **Typography & Design**: Clean typography powered by local self-hosted Source Sans 3 fonts.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

This compiles static assets into `dist/` and renders `dist/cv.pdf`.

## Project Structure

```
├── public/                 # Static assets (robots.txt, favicon, manifest)
├── scripts/
│   └── build-pdf.mjs       # Headless browser PDF generation script
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── ExperienceEntry.astro
│   │   ├── SectionTitle.astro
│   │   └── SEOHead.astro   # SEO, meta, and JSON-LD schema
│   ├── data/
│   │   └── cv.yaml         # Single source of truth for resume data
│   ├── pages/
│   │   └── index.astro     # Main portfolio / CV page
│   ├── styles/
│   │   └── global.css      # Design system and print stylesheets
│   └── types.ts            # Type safety and Zod schema validations
└── astro.config.mjs        # Astro configuration & sitemap integration
```

## License

MIT
