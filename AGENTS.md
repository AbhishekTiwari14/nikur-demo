# AGENTS.md — Mithel Kapoor Demo

## Mission

This repository is an independent sales-demo ecommerce website for:

Brand: Mithel Kapoor
Instagram: @mithelkapoorofficial

It was cloned from the reusable Jewell Galleria ecommerce demo.

The goal is to convert the existing customer storefront into a polished, premium men's-fashion demo quickly.

This is a SALES DEMO, not a production ecommerce build.

---

## Golden Rule

Reuse before rewriting.

Prefer:

1. existing architecture/components
2. configuration/data changes
3. asset replacement
4. content/theme changes
5. small targeted component changes

Do not migrate framework, router, state management, styling system or build tooling.

Do not perform unrelated refactors.

---

## Task Discipline

Only perform the currently requested Codex task.

Before editing:
- inspect only relevant files;
- make a short plan.

After editing:
- validate;
- summarize;
- list changed files;
- report unresolved issues;
- stop.

Do not continue into later tasks automatically.

---

## Source Material

Reference assets are under:

/reference/brand
/reference/products

The supplied logo and screenshots are the visual source material.

Raw Instagram screenshots should not be directly used where a better website-ready asset can reasonably be produced.

---

## Brand Direction

Mithel Kapoor is a men's fashion brand.

Use the supplied screenshots to determine the actual mix, which may include:

- shirts
- suits/blazers
- ethnic wear
- occasion wear
- other menswear visible in the supplied material

Do not introduce categories unsupported by the supplied screenshots simply for variety.

The storefront should feel:

- masculine
- refined
- premium
- contemporary
- fashion-led
- editorial
- clean

Avoid jewellery-style visual language inherited from Jewell Galleria.

---

## Product Catalogue

Aim for approximately 10–12 strong products.

Use real/source-backed product concepts from the supplied screenshots.

Exact product copies are not necessary for this sales demo, but generated/edited products should remain close to the observed:

- garment type
- silhouette
- colour
- print
- embroidery/detailing
- overall styling

Generated/demo products should be internally marked where practical:

isDemoProduct: true

---

## Product Naming

Use exact names if confidently visible.

Otherwise create concise merchandising names based on appearance, such as:

- Textured Evening Shirt
- Classic Black Bandhgala
- Embroidered Festive Kurta Set
- Tailored Double-Breasted Suit

Do not invent material composition unless supported.

---

## Demo Pricing

Use visible source pricing when confidently readable.

Otherwise create plausible demo prices consistent with the visible category.

Suggested ranges:

Shirts:
₹1,199–₹2,999

Ethnic wear:
₹1,999–₹5,999

Blazers / suits:
₹3,999–₹9,999

Use natural ecommerce values such as:

1299
1499
1799
1999
2499
2999
3499
3999
4499
4999
5999
6999
7999
8999
9999

Avoid awkward random numbers.

Internally mark generated pricing where practical.

---

## Product Images — Strict Quality Standard

Blurry, pixelated or visibly enlarged Instagram screenshots are NOT acceptable as final primary product imagery.

Do not:

- crop a 300px screenshot;
- enlarge it to 1200px;
- export it;
- call it finished.

First determine whether blur comes from:

- source resolution
- CSS stretching
- thumbnail/full-image confusion
- compression
- object-fit
- responsive rendering

Fix rendering bugs where applicable.

For poor source assets, use available image editing/generation capabilities to create a higher-quality ecommerce presentation using the screenshot as visual reference.

---

## Required Product Gallery

Important products should have exactly 3 useful images:

1. hero
   - clean premium product image

2. detail
   - closer view of visible garment detailing

3. editorial
   - polished lifestyle/model presentation

The SAME garment must remain recognisable across all 3 images.

Do not change:

- colour
- embroidery
- print
- buttons
- neckline/collar
- sleeve design
- silhouette
- garment construction

between gallery images.

Prefer approximately 1200px+ images where appropriate.

Optimize for web.

---

## Model/Image Generation

When source screenshots feature models, the goal is to preserve the GARMENT, not the identity of the original model.

It is acceptable to use a different generic model/presentation for generated ecommerce imagery.

Keep model styling consistent with the garment and brand.

Do not make the generated person the focus over the product.

---

## UI Palette

Derive the storefront colour palette from the supplied logo.

Inspect:

- dominant logo colour
- secondary colour
- accent
- background tone
- typography character

Adapt the EXISTING Jewell Galleria theme tokens.

Do not build a new design system.

Use only a small coherent palette.

---

## Homepage

Reuse the existing homepage architecture.

Prioritize:

1. header/logo
2. strong menswear hero
3. Shop by Category
4. New / Featured Collection
5. editorial collection section
6. selected product row
7. occasion/ethnic section where supported
8. Instagram CTA
9. subtle Business Preview
10. footer

Use real/reference-backed styles prominently.

---

## Product Detail Page

Reuse the existing PDP.

Ensure:

- 3-image gallery
- product name
- price
- size selector
- quantity
- Add to Bag
- concise product description
- related products

Remove jewellery-specific:

- plating
- stone details
- jewellery care
- ring sizing
- irrelevant claims

---

## Sizes

Use supplied sizes where visible.

Otherwise use simple demo sizing appropriate to the existing architecture, usually:

S / M / L / XL

Do not overengineer tailoring measurements for the sales demo.

---

## Business Preview

Preserve the existing Jewell Galleria business/dashboard functionality where possible.

Do not spend major time rebuilding it unless explicitly requested later.

Any metrics remain clearly SAMPLE / SIMULATED.

Storefront quality is the priority.

---

## Mobile First

Primary target:

360–430px

Check:

- header/logo
- hero
- category cards
- product cards
- image crops
- product grid
- PDP gallery
- size selector
- sticky CTA
- cart
- footer

Desktop must remain polished.

---

## Content Safety

Do not invent:

- customer counts
- fake reviews
- awards
- certifications
- exact fabric composition
- free shipping
- COD
- return windows
- handmade claims
- years in business

unless clearly supported.

---

## Technical Rules

Follow existing repository conventions.

Do not add dependencies unless genuinely required.

Do not use `any` simply to bypass TypeScript errors.

Do not build:

- backend
- payment gateway
- production authentication
- unnecessary infrastructure

---

## Validation

Use actual scripts from package.json.

Before completing relevant application changes:

- run lint/typecheck where available
- run production build
- verify mobile layout
- verify product routes
- verify image paths

---

## Speed Principle

This is a prospect-conversion demo.

Prioritize:

1. brand resemblance
2. strong homepage
3. sharp product imagery
4. polished PDP
5. mobile presentation

Do not spend time perfecting hidden technical architecture that the prospect will not see.