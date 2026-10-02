// Turns each route into static HTML so crawlers and link previews see real content
// and per-page head tags. Runs after the client and SSR builds (see `npm run build`).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const ssrEntry = resolve('dist-ssr/entry-server.js')
const { render, pageMeta, notFoundMeta, canonicalUrl, SITE_URL } = await import(pathToFileURL(ssrEntry).href)

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')

const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headTags(meta, url) {
  const title = escape(meta.title)
  const description = escape(meta.description)
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex' : 'index, follow'}" />`,
    url ? `<link rel="canonical" href="${url}" />` : '',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    url ? `<meta property="og:url" content="${url}" />` : '',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
  ]
    .filter(Boolean)
    .join('\n    ')
}

function renderPage(path, meta, url) {
  const html = template
    .replace(/<!-- seo -->[\s\S]*?<!-- \/seo -->/, headTags(meta, url))
    .replace('<!--app-->', render(path))
  if (html === template) throw new Error(`Prerender markers missing from index.html (${path})`)
  return html
}

const fileFor = (path) => (path === '/' ? 'index.html' : `${path.slice(1)}.html`)

for (const [path, meta] of Object.entries(pageMeta)) {
  writeFileSync(resolve(dist, fileFor(path)), renderPage(path, meta, canonicalUrl(path)))
  console.log(`prerendered ${path}`)
}

// Vercel serves 404.html with a real 404 status for unknown paths
writeFileSync(resolve(dist, '404.html'), renderPage('/404', notFoundMeta, null))
console.log('prerendered 404')

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(pageMeta)
  .filter(([, meta]) => !meta.noindex)
  .map(([path]) => `  <url>\n    <loc>${canonicalUrl(path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`
writeFileSync(resolve(dist, 'sitemap.xml'), sitemap)
writeFileSync(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
console.log('wrote sitemap.xml and robots.txt')

rmSync(resolve('dist-ssr'), { recursive: true, force: true })
