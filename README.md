# Nominal Technologies — Marketing Website

The official marketing website for Nominal Technologies LLC, built with React, TypeScript, Vite, and Tailwind CSS. Deployed on Vercel.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Contact Form**: EmailJS
- **Deployment**: Vercel

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   ├── Logo.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── Section.tsx
│   └── TechBadge.tsx
├── layouts/
│   └── RootLayout.tsx # Shared layout wrapper (Navbar + Footer)
├── pages/             # Route-level page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── lib/               # Utility functions and helpers
├── styles/            # Global styles
├── App.tsx            # Route definitions
└── main.tsx           # Application entry point
```

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, features, and CTA |
| `/services` | Services | Overview of offerings |
| `/about` | About | Company background and team |
| `/contact` | Contact | Contact form powered by EmailJS |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site is configured for Vercel. The `vercel.json` includes a rewrite rule to support client-side routing (all paths fall back to `index.html`).

Push to the `master` branch to trigger a production deploy.
