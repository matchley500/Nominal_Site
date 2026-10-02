import { useEffect } from 'react'
import { canonicalUrl, getPageMeta } from './seo'

function setMeta(selector: string, value: string) {
  document.head.querySelector(selector)?.setAttribute('content', value)
}

// Keeps head tags in sync during client-side navigation. The prerendered HTML
// already has the right values on first load; this covers in-app route changes.
export function usePageMeta(pathname: string) {
  useEffect(() => {
    const meta = getPageMeta(pathname)
    const url = canonicalUrl(pathname)

    document.title = meta.title
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[name="robots"]', meta.noindex ? 'noindex' : 'index, follow')
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  }, [pathname])
}
