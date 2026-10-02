# CLAUDE.md — Context for AI-Assisted Development

This file provides context for Claude Code (and other AI assistants) working on this repository.

## Project Overview

This is the **Nominal Technologies LLC** marketing website. It is a static single-page application (SPA) built with React + TypeScript and deployed to Vercel. There is no backend — the only external service call is the contact form via EmailJS.

## Tech Stack

- **React 18** with functional components and hooks only (no class components)
- **TypeScript** — all source files use `.tsx` or `.ts`
- **Vite** — dev server and bundler
- **Tailwind CSS** — utility-first styling; no separate CSS files per component
- **React Router DOM v6** — declarative routing via `<Routes>` / `<Route>`
- **EmailJS** (`@emailjs/browser`) — contact form submission without a backend

## Architecture

- `src/App.tsx` — defines all routes; wraps everything in `<RootLayout />`
- `src/layouts/RootLayout.tsx` — shared shell containing `<Navbar />` and `<Footer />`
- `src/pages/` — one file per route; these are thin and delegate to components
- `src/components/` — reusable UI pieces (cards, sections, form, nav, footer)
- `src/lib/` — shared utilities and helpers
- `src/styles/` — global stylesheet (Tailwind base + any custom globals)

## Development Commands

```bash
npm run dev       # Start local dev server (http://localhost:5173)
npm run build     # TypeScript compile, Vite build, then prerender each route to static HTML in dist/
npm run preview   # Serve the dist/ build locally
```

## Environment Variables

All env vars are prefixed with `VITE_` so Vite exposes them to the browser bundle. See `.env.example` for required keys. Never commit `.env` — it is gitignored.

## Coding Conventions

- Use **functional components** with typed props interfaces
- Prefer **Tailwind utility classes** directly in JSX — avoid inline styles
- Keep page components lean; move any reusable UI into `src/components/`
- No test framework is currently set up; avoid breaking existing behaviour when refactoring
- TypeScript strict mode is enabled — do not use `any` unless absolutely necessary

## Deployment

- Hosted on **Vercel**
- Every route is prerendered at build time (`src/entry-server.tsx` + `scripts/prerender.js`); `src/main.tsx` hydrates it
- `vercel.json` enables `cleanUrls` so `/about` serves `about.html`; unknown paths get `404.html` with a real 404 status
- New pages must be added to `pageMeta` in `src/lib/seo.ts` (title, description, sitemap entry, prerender)
- Production deploys trigger from the `master` branch
- Feature work should be done on `claude/` prefixed branches and merged via PR

## Key Files at a Glance

| File | Purpose |
|------|---------|
| `index.html` | HTML entry point; Vite injects the bundle here |
| `vite.config.ts` | Vite configuration |
| `tailwind.config.js` | Tailwind theme and content paths |
| `tsconfig.json` | TypeScript compiler options |
| `vercel.json` | Vercel clean URLs config |
| `src/lib/seo.ts` | Per-route titles/descriptions and site URL |
| `.env.example` | Template for required environment variables |
