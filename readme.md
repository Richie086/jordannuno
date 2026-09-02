# Jordon Nuno Landscaping & Lawncare — Design System

A design system for **Jordon Nuno's Landscaping and Lawncare**, a family-run residential and light-commercial landscaping business: weekly mowing, seasonal cleanups, mulch and bed work, irrigation service.

## Live site

GitHub Pages: https://richie086.github.io/jordannuno/

## Sources

**None were supplied.** No codebase, Figma file, brand guide, logo, photography, font files or product copy came with the brief. The only direction given was:

> Company: Jordon Nuno's Landscaping and Lawncare. "colors should reflect the type of business (green, earthy colors)."

Everything here was authored from scratch against that brief. Where a real asset would normally sit, this system uses an honest stand-in and says so:

| Missing | Stand-in | What to send |
| --- | --- | --- |
| Logo / mark | Brand name set in Archivo Expanded 800 (`guidelines/brand-wordmark.html`) | SVG logo, horizontal + stacked lockups |
| Photography | Labelled green-gradient `PhotoSlot` blocks | Crew, before/after and property photos |
| Webfonts | Google Fonts (Archivo, Instrument Sans, JetBrains Mono) loaded from CDN | Licensed font files if the business owns any |
| Icons | Lucide via CDN | Nothing — Lucide is a deliberate choice |
| Real copy, pricing, service area | Plausible sample copy and prices | Actual service list, prices, towns served |

If a real brand identity exists, replace `tokens/colors.css` and `tokens/fonts.css` first; components read tokens only, so nothing else needs to change.

## Products represented

Two surfaces, both recreated as UI kits:

1. **Marketing website** (`ui_kits/website/`) — how customers find and book the business.
2. **Crew Dispatch** (`ui_kits/ops/`) — the internal day board: jobs, crews, routes, job notes.

---

## CONTENT FUNDAMENTALS

The voice is a working owner talking to a neighbour. Plain, specific, unhurried. It gives numbers instead of adjectives.

**Person.** "We" for the business, "you" for the customer. Never third-person ("Jordon Nuno Landscaping offers…"). The internal tool speaks in bare imperatives: *Dispatch*, *Assign crew*, *Save job*.

**Casing.** Sentence case everywhere — headings, buttons, labels, table headers excepted. Table headers, eyebrows and section kickers are the one uppercase place, tracked out at 0.14em. Never Title Case A Whole Headline.

**Punctuation.** No exclamation marks. No em-dash pileups. Sentences end. Prices are written with the dollar sign and no decimals when whole (`$45`, `$68 / yard`). Ranges use an en dash (`07:30 – 09:15`).

**Length.** Headlines under nine words. Body paragraphs two or three sentences. Service descriptions are one sentence that lists what actually happens: *"Cut, trim, edge, and blow off the walks."*

**Concreteness is the house rule.** Say the price, the frequency, the acreage, the number of people on the crew. Vague benefit language is off-brand.

- We write: "Weekly mowing starts at $45 for a standard lot. We'll text you the day before."
- We don't: "Transform your outdoor living space with our premium turf solutions!"
- We write: "Fall cleanup, one morning, beds cleared and leaves hauled."
- We don't: "Comprehensive seasonal solutions tailored to your needs."

**Trust language.** Earned specifics only — *Licensed & insured*, *Family-run since 2011*, *Same crew every visit*, *Good for 30 days*. No badges, no awards, no "#1 rated".

**Emoji: never.** Not in marketing, not in the app, not in customer texts. Icons carry that job.

**Internal copy.** Job states read as plain status words a crew lead would say out loud: Scheduled, In route, Completed, Weather hold, Unassigned, Overdue. Empty states admit what is not there ("Pick a job to see the details, crew notes and gate codes") rather than cheerleading.

---

## VISUAL FOUNDATIONS

**The idea.** Equipment, not gardens. Squared corners, honest weight, warm neutrals, a green that reads as cut grass in shade rather than mint or emerald. One orange accent borrowed from machine paint and caution tape. Nothing glossy.

**Color.** Three families and nothing else. `--green-*` (olive-leaf `#425f2e` at 600, spruce-dark at 950) carries brand and primary action. `--clay-*` (`#d97706` at 600) is the accent: booking CTAs, the 3px top rule on featured cards, the active tab underline, sidebar active marker. It appears **once or twice per screen, never as a field of color**. `--earth-*` is the neutral ramp and every grey in it is warm — blue-grey is out of the system. Semantic states borrow `--sky` (info), `--rust` (danger), clay (warning), green (success). Two background colors per composition maximum: `--surface-page` (bone `#f8f6ef`) plus white cards, or the dark `--surface-inverse` band.

**Type.** Two families. **Archivo Expanded** 800 for display and headings — the wide, squat proportions do the "sturdy" work; tracking tightens to −0.02em at display sizes. **Instrument Sans** for body at 16/1.5, stepping to 18/1.62 for long-form. Regular-width **Archivo** at 600 handles UI: buttons, labels, tabs, table headers. **JetBrains Mono** for anything a person would read off a clipboard — job numbers, acreage, time windows, prices. Minimum type size is 13px, 11px only for tracked-out eyebrows.

**Spacing.** 4px-based scale with a 2px step for optical nudges: 2 4 8 12 16 20 24 32 40 48 64 80 112 160. Card padding 24px, stacked content 12px, section rhythm 96px (56px for strip sections). Content maxes at 1200px with 48px page gutters; prose columns cap at 660px.

**Backgrounds.** Flat color. No decorative gradients, no patterns, no textures, no illustration. The only gradient in the system is `--scrim-image`, a bottom-weighted green scrim laid over photography so white type stays legible; photos are otherwise full-bleed and uncropped by shapes. Imagery direction: **warm, mid-morning daylight, no filters, no grain, no black and white**. Real yards, real equipment, people at work rather than posed.

**Corner radii.** Deliberately tight. 3px on tags and checkboxes, **5px on all controls** (buttons, inputs, selects), 8px on cards and dialogs, 14/22px reserved for large photo blocks. Full pills exist for exactly one thing: status badges. A pill-shaped button is off-brand.

**Cards.** White surface, 1px warm hairline border (`--earth-200`), 8px radius, `--shadow-xs` at rest. Marketing cards step up to `--shadow-md`. Featured or priority cards add a 3px clay rule across the top edge (`accentTop`) — that rule replaces the "colored left border" pattern, which this system does not use. Sunken cards drop the shadow and sit on `--earth-100`.

**Borders.** Three widths, each with a job: 1px hairline for dividers and card edges, 1.5px for control outlines, 3px heavy for accents (card top rule, active tab, sidebar active marker).

**Shadows.** Four steps, all in warm black (`rgba(23,21,18,…)`) — never neutral or cool black. `xs` for resting cards, `sm` for switch knobs, `md` for marketing cards and tooltips, `lg` for dialogs and toasts and for the hover lift. There is no inner-glow or inset-shadow decoration; the one inset is `--shadow-inset-hairline` used as a bottom divider.

**Animation.** Short and flat. 120ms for color and background, 180ms for shadow, transform and toggles, 320ms for entrances, all on `cubic-bezier(.2,.7,.25,1)`. Fades and 2px translations only — no bounce, no spring, no scale-up entrances, no parallax, no scroll-triggered reveals.

**Hover.** Filled controls darken exactly one step on the ramp (green 700 → 800). Outlined and ghost controls fill with the soft brand tint (`--green-50`) rather than changing text color. Interactive cards lift 2px and go from `xs` to `lg`. Nothing brightens, nothing glows, opacity is never used for hover.

**Press.** `translateY(1px)` and one further step darker (green 900). No scale-down, no ripple.

**Focus.** 3px soft-green ring (`--shadow-focus`) on fields; 2px `--border-focus` outline at 2px offset for everything else, from `:focus-visible` only.

**Disabled.** 45% opacity plus `cursor: not-allowed`. No grey-swap.

**Transparency & blur.** Two sanctioned uses: the sticky site header (`rgba(248,246,239,.92)` + 8px blur) and the dialog scrim (`--scrim-flat` + 3px blur). On dark surfaces, light overlays are `rgba(240,245,232,…)` at .12 / .16 / .22 for fills, borders and hovers. Blur is never decorative.

**Layout rules.** Sticky site header at 76px. Fixed 232px dark sidebar in the internal tool; 340px right detail rail. Toasts are fixed bottom-left at 24px, never bottom-center. Dialogs center with a 480–540px cap. Nothing else is fixed or floating.

**Protection.** Type over photography gets the gradient scrim, not a capsule or a solid plate. Capsules are for status, never for legibility.

---

## ICONOGRAPHY

**System: [Lucide](https://lucide.dev) 0.451.0, loaded from CDN** (`https://unpkg.com/lucide@0.451.0/dist/umd/lucide.js`). This is a **substitution flagged for review** — no icon set came with the brief. Lucide was chosen because its even 1.75px stroke and open, unrounded terminals match the squared, workmanlike geometry of the type. If the business has its own marks, swap the `Icon` component's implementation and everything downstream follows.

- **No icon font, no sprite sheet, no PNG icons.** Lucide renders inline SVG; every icon in the system goes through the `Icon` component so stroke width and size stay consistent.
- **Default stroke width 1.75, sizes 15–22px** inline with text, 17px in nav and buttons. Icons take `currentColor` unless a green accent is wanted, in which case `--green-600`.
- **Never fill-style icons**, never two-tone, never mixed sets. One family only.
- **House glyph vocabulary:** `scissors` (mowing), `leaf` / `sprout` (cleanup, mulch), `droplets` (irrigation), `trees`, `truck`, `map-pin`, `calendar-days`, `clipboard-list`, `phone`, `key-round` (gate codes), `cloud-rain` / `cloud-sun` (weather holds), `shield-check` (licensed & insured), `users` (crews), `receipt` (invoices).
- **Emoji are never used.** Unicode characters are used only as small mechanical glyphs where an SVG would be overkill: `✓` in the checkbox, `×` on dismiss and tag-remove, `▼` on the select. Nothing else.
- **No hand-drawn SVG illustration** exists in this system, and none should be added — the brand's visual richness comes from photography.
- `assets/` holds no image binaries because none were supplied. It is the intended home for the logo, photography and any custom marks.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `thumbnail.html` — homepage tile for this system.
- `SKILL.md` — Agent Skills wrapper so this folder works inside Claude Code.
- `readme.md` — this file.

**`tokens/`** — `fonts.css` (Google Fonts import), `colors.css`, `typography.css`, `spacing.css`, `shape.css` (radii, borders, shadows, scrims, motion), `base.css` (element resets, `.jn-eyebrow`, `.jn-rule`).

**`guidelines/`** — 22 specimen cards feeding the Design System tab, grouped **Colors** (green / clay / earth ramps, status pairs, surfaces, text), **Type** (display, headings, body, UI, mono, eyebrow), **Spacing** (scale, in use, radii, shadows, borders) and **Brand** (wordmark, voice, interaction states, motion, image scrim).

**Components** (16, grouped by concern; each has `.jsx`, `.d.ts`, `.prompt.md`, and one `@dsCard` HTML per directory)
- `components/core/` — **Button**, **IconButton**, **Icon**, **Badge**, **Tag**, **Card**
- `components/forms/` — **Input**, **Textarea**, **Select**, **Checkbox**, **Radio** (+ **RadioGroup**), **Switch**
- `components/navigation/` — **Tabs**
- `components/feedback/` — **Dialog**, **Toast**, **Tooltip**

**UI kits**
- `ui_kits/website/` — marketing home page + two-step quote dialog. See its README.
- `ui_kits/ops/` — Crew Dispatch day board + job detail rail. See its README.

**Intentional additions.** No source defined a component inventory, so the standard primitive set was authored. Two additions worth naming: **Icon** (a Lucide wrapper, so icon sizing and stroke stay in one place) and **Tag** as distinct from **Badge** (squared filters vs. pill-shaped state) — the split keeps status meaning unambiguous.

**Not built** (no source, so nothing was invented): breadcrumbs, pagination, data-grid, date picker, accordion, avatar, progress, skeleton, side sheet, and the Jobs / Quotes / Crews / Customers / Invoices views in Crew Dispatch.
