export const SITE_URL = 'https://nominaltechnologies.com'
export const SITE_NAME = 'Nominal Technologies'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export interface PageMeta {
  title: string
  description: string
  noindex?: boolean
}

// Keyed by route path. Used by the client on navigation and by the prerender
// script at build time, so every route ships with its own head tags.
export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Nominal Technologies | Custom Software, Automation, and Integrations',
    description:
      'Nominal Technologies designs and builds custom software, web applications, automation, and API integrations for businesses that have outgrown off-the-shelf tools.',
  },
  '/services': {
    title: 'Services | Nominal Technologies',
    description:
      'Custom software, AI integrations with OpenAI and Anthropic, web applications, workflow automation, API integrations, and architecture consulting.',
  },
  '/about': {
    title: 'About | Nominal Technologies',
    description:
      'Nominal Technologies is a software engineering firm that builds practical, maintainable systems designed around how your business works.',
  },
  '/contact': {
    title: 'Contact | Nominal Technologies',
    description:
      'Tell us about your project. We reply within one business day and follow up with a scope, timeline, and cost.',
  },
}

export const notFoundMeta: PageMeta = {
  title: 'Page not found | Nominal Technologies',
  description: 'The page you were looking for does not exist.',
  noindex: true,
}

export function getPageMeta(pathname: string): PageMeta {
  return pageMeta[pathname] ?? notFoundMeta
}

export function canonicalUrl(pathname: string): string {
  return pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`
}
