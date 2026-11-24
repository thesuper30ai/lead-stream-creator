# Project conventions

- Keep the SEO Company 2 platform section local to its page and import illustrations as project assets, so other SEO page designs remain unchanged.
- Keep the SEO Company 2 growth framework local to its page with data-driven steps, so changes do not affect other SEO pages.
- Service "v2" pages share one data-driven template (ServiceV2Page + serviceV2Pages config) whose extra sections (problems, comparison, fit, final CTA, FAQ, headings) are optional config fields, so new pages only need a config entry and route and existing pages stay unchanged.
- Latest page designs use the unsuffixed main routes (homepage at `/homepage`); suffixed `2` routes preserve the older designs, so navigation must always target the main routes.
- Keep case-study campaign data separate from the page and test supplied figures, so visual redesigns cannot silently alter results.
- New client case-study pages reuse the e-commerce case-study stylesheet with client-specific data and evidence; omit unprovided testimonials and contributor claims to avoid fabricated attribution.
- Scope case-study visual overrides to its page stylesheet, so reference-inspired changes leave service pages unchanged.
- Our Work 2 reuses the original portfolio, logo, testimonial, blog and CTA components with page-scoped styling, so assets and content remain shared without changing the original page.

- Shared portfolio headings accept optional page-specific copy; preserve default text so Homepage2 edits do not change other pages.

- Homepage2 keeps the original PDF client-logo dataset; the latest SEO and seven shared service pages use that dataset without SkyMarvel plus ICS and Digital Academy 360, so service logo updates remain consistent without changing the homepage.
- Keep the eight-person team before services in the shared service template with page-specific headings, so all seven latest service pages match the SEO page structure; the section is currently hidden behind `SHOW_SERVICE_TEAM_SECTION` in src/lib/sectionFlags.ts, so keep the markup and flip the flag to restore it.

- Keep About page theme overrides in its page stylesheet; show the full active team with the eight service-page portraits first and preserve the journey section, so the redesign does not affect other pages.

- Remaining footer services and industry hubs use scoped ServicePageBand themes and the modern ServiceHeroSection option; retain original content and submission handlers, and exclude suffixed archive routes so completed pages remain unchanged.
- Careers vacancies live in a data file listed on a page-scoped Careers page, so roles can be added or removed without layout edits.
- Every website form submits through `submitFormToGoogleSheets` (src/hooks/useFormSubmit.ts), which attaches `getTrackingFields()` and posts to the `submit-form-to-sheet` function that forwards to the Apps Script URL secret; never post to Apps Script from the browser, so the sheet link stays private and every row carries the same tracking columns.
- Page titles, descriptions, keywords and OG/Twitter text live in src/data/seoMeta.json and render through PageSeo (src/components/seo/PageSeo.tsx); service templates prefer it over their config, so crawler HTML and in-browser tags always match the SEO sheet.
- Site images are imported as real files from src/assets (no .asset.json CDN pointers in code), so the site builds and serves identically on Vercel or any other host.
