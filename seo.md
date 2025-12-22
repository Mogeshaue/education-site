# Static Website SEO & AI Readability Requirements

## Objective
Build a static website that is:
- Easily crawlable and indexable by Google
- Easy for AI systems (LLMs, search crawlers) to understand
- Fast, accessible, and structurally clean
- Future-proof against SEO and algorithm updates

---

## 1. HTML Structure & Semantics
- Use semantic HTML5 elements:
  - `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Avoid excessive `<div>` usage
- Ensure logical document structure

### Heading Rules
- Exactly **one `<h1>` per page**
- Follow hierarchy: `h1 → h2 → h3`
- Do not skip heading levels

---

## 2. URL Structure
- URLs must be:
  - Lowercase
  - Hyphen-separated
  - Descriptive and readable
- One topic per URL

**Examples**
- `/seo-basics/`
- `/static-website-optimization/`

Avoid:
- Query-based URLs (`?id=123`)
- Unclear slugs

---

## 3. Meta Tags & Head Configuration
Every page must include:
- Unique `<title>` (50–60 characters)
- Unique `<meta name="description">` (140–160 characters)
- `<meta name="robots" content="index, follow">`
- Canonical URL

---

## 4. Content Guidelines (AI & SEO Friendly)
- Content must be:
  - Human-readable
  - Clear and concise
  - Structured with headings and lists
- Use short paragraphs (2–4 lines)
- Answer key questions early on the page
- Avoid keyword stuffing

---

## 5. Structured Data (Schema Markup)
- Use JSON-LD format
- Apply relevant schemas where applicable:
  - `WebSite`
  - `Article`
  - `FAQPage`
  - `BreadcrumbList`
- Schema must match visible content

---

## 6. Internal Linking
- Every page should be reachable within **3 clicks**
- Use descriptive anchor text
- Avoid generic anchors like “click here”

---

## 7. Performance Requirements
- Optimize for Google Core Web Vitals:
  - LCP < 2.5s
  - CLS < 0.1
  - INP < 200ms
- Minify CSS and JavaScript
- Compress images (WebP or AVIF)
- Avoid unnecessary JavaScript

---

## 8. Image SEO & Accessibility
- All images must include an `alt` attribute
- Alt text should describe image content clearly
- Decorative images should use empty alt (`alt=""`)

---

## 9. Sitemap & Robots
- Provide a valid `sitemap.xml` including all indexable pages
- Include `robots.txt` allowing crawler access
- Sitemap must be referenced in `robots.txt`

---

## 10. Mobile-First & Accessibility
- Fully responsive design
- Minimum font size: 16px
- Sufficient color contrast
- Use `aria-label` where required
- Keyboard navigation must be supported

---

## 11. Hosting & Delivery
- HTTPS enforced
- CDN-backed static hosting preferred
- HTTP/2 or HTTP/3 enabled

---

## 12. Prohibited Practices
- No content rendered only via JavaScript
- No hidden text or cloaking
- No duplicate pages without canonical tags
- No auto-generated thin content
- Do not block crawlers unintentionally

---

## Acceptance Criteria
- Pages are indexed by Google
- Content is readable without JavaScript
- Lighthouse SEO score ≥ 90
- Core Web Vitals pass on mobile and desktop
- Schema validates without errors
