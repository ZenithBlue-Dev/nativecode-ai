# NativeCode — Site

Marketing site for **NativeCode**, the portable Linux & AI developer
environment for Android (prebaked Alpaquita rootfs + XFCE4 + AI coding agents).

Live: `https://zenithblue-dev.github.io/nativecode-ai/`
(org repo: `nativecode-ai` — project site, served under `/nativecode-ai`)

## Stack

- Astro `7.3.1` (static output) + `@astrojs/sitemap`
- Tailwind CSS v4 (via `@tailwindcss/vite`) + TypeScript
- Same stack as the ZenithBlue studio and Samba S3 sites
- Design: obsidian cyber-brutalist + Android green, JetBrains Mono accents
- Assets: `logo.webp`, `hero-bg.jpg`, 8 store screenshots from
  `termux-lib/docs/storelisting/` (PNG only, no SVG) + NC-PLAY app art
- Pages: `index` + `privacy` (adapted from NC-PLAY `docs/privacy-policy.md`)

## Structure

```
├── astro.config.mjs        # site + base: /nativecode-ai (project site)
├── public/
│   ├── logo.webp           # NativeCode app logo (Android)
│   ├── hero-bg.jpg         # neon circuit backdrop
│   ├── shots/              # 8 store screenshots (hero, agents, projects,
│   │                       # shell, marketplace, workspace, desktop, cta)
│   └── .nojekyll
├── src/
│   ├── components/         # Nav, Hero, Features, Showcase, Steps, Specs, Faq, Closing
│   ├── layouts/Base.astro
│   ├── pages/              # index.astro, privacy.astro
│   └── styles/global.css
└── .github/workflows/deploy-website.yml
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/nativecode-ai/
npm run build    # outputs dist/
npm run preview  # serve dist/ locally
```

## Deploy

Push to the `nativecode-ai` repo — the `Deploy website` workflow builds and
publishes `dist/` to Pages. First-time setup: repo
**Settings → Pages → Source: "GitHub Actions"**.

## Links

- Repo: `https://github.com/zenithblue-dev/nativecode-ai`
- Releases: `https://github.com/zenithblue-dev/nativecode-ai/releases`
- Marketplace: `https://github.com/zenithblue-dev/nativecode-marketplace`
