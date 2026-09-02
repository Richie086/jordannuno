# UI kit — Marketing website

Home page for the business: sticky header, hero, four service cards, dark process band, work grid with testimonials, mowing price table, service-area strip, footer, and a two-step quote dialog.

Files
- `index.html` — interactive page. Click **Get a free quote** (header, hero, any service card, or a price row) to run the quote flow; sending shows the confirmation toast.
- `Chrome.jsx` — `Wordmark`, `SiteHeader`, `SiteFooter`.
- `Sections.jsx` — `Section`, `Eyebrow`, `PhotoSlot`, `Hero`, `Services`, `Process`, `Work`, `ServiceArea`.
- `QuoteFlow.jsx` — `QuoteDialog` (two steps), `PricingTable`.

Notes
- No photography was supplied. `PhotoSlot` renders a labelled green gradient where a real photo goes — replace it, do not treat the gradient as brand art.
- Every control comes from the design system bundle; the kit adds layout only.
