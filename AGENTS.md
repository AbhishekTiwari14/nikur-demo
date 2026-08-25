# AGENTS.md — Niikurr Demo

## Mission

This repository is an independent sales-demo ecommerce storefront for:

Brand: Niikurr
Instagram: @niikurr

It was cloned from the completed Mithel Kapoor fashion demo.

The Mithel Kapoor demo is being used because it currently contains the strongest and most furnished storefront structure/UX among the available templates.

The goal is to transform that experience into a polished, mobile-first women's Indian/traditional-wear storefront for Niikurr.

This is a SALES DEMO, not a production ecommerce build.

---

## Primary Principle

Preserve the quality and richness of the existing Mithel Kapoor storefront.

Do NOT simplify the homepage, PDP or shopping experience merely because the brand is changing.

Reuse before rewriting.

Prefer:

1. existing components
2. existing architecture
3. configuration/data changes
4. asset replacement
5. merchandising/content changes
6. small targeted styling/component edits

Do not migrate:

- framework
- router
- state management
- styling system
- build tooling

Do not perform unrelated refactors.

---

## Task Discipline

Only perform the current requested task.

Do not continue automatically into later tasks.

Before editing:

- inspect only relevant files;
- make a short plan.

After editing:

- validate;
- summarize;
- list modified files;
- mention unresolved issues;
- stop.

Do not repeatedly re-audit work already understood in previous tasks.

---

# Source Material

Niikurr source material is under:

/reference/brand
/reference/products

The logo is the visual brand reference.

Product screenshots from Instagram/Reels are visual product references.

Raw screenshots may contain:

- Instagram UI
- Reel overlays
- text
- inconsistent backgrounds
- poor framing
- compression
- blur
- low source resolution

Do not assume they are suitable as final storefront assets.

---

# Brand Direction

Niikurr is a women's Indian/traditional-wear fashion brand.

Determine actual product direction from the supplied references.

Possible categories may include:

- Kurta Sets
- Suit Sets
- Anarkali Sets
- Co-ord Sets
- Festive Wear
- Dresses
- Sarees
- Ethnic/Fusion Wear

Do NOT use a category unless the supplied references support it.

The storefront should feel:

- feminine
- elegant
- contemporary
- Indian
- premium
- warm
- editorial
- image-led

Remove Mithel Kapoor's masculine fashion direction from customer-facing UI.

---

# Catalogue Size

Aim for approximately 10–12 strong products.

Quality matters more than catalogue size.

Choose products based on:

1. visual strength
2. category/style variety
3. homepage usefulness
4. source detail
5. ability to create faithful premium imagery

---

# Product Naming

Use exact names where confidently readable.

Otherwise create concise descriptive merchandising names.

Examples only:

- Floral Anarkali Set
- Embroidered Straight Kurta Set
- Printed Festive Suit Set
- Flared Occasion Kurta Set

Do not use these unless they visually match the product.

---

# Pricing

Use real visible pricing when confidently readable.

Otherwise assign plausible DEMO prices.

Prefer natural values such as:

999
1199
1499
1799
1999
2299
2499
2799
2999
3499
3999
4499
4999
5499
5999

Do not use awkward random prices.

Do not make all products similarly priced.

Keep demo-generated prices easy to replace later.

---

# Product Facts

Do not invent unsupported:

- fabric composition
- cotton/silk claims
- embroidery technique
- handcrafted claims
- free shipping
- COD
- return periods
- reviews
- customer counts
- warranties

Only use facts supported by source material.

---

# Sizes

Use real sizes where visible.

Otherwise simple DEMO sizing may use:

S / M / L / XL

where appropriate.

Do not build complex tailoring measurements.

---

# Product Image Quality — Critical

Blurry, pixelated or obviously enlarged Instagram screenshots are NOT acceptable as primary storefront images.

Do not:

300px screenshot
→ upscale to 1200px
→ treat as high quality.

First determine whether blur comes from:

- low source resolution
- screenshot compression
- thumbnail being used as full image
- CSS stretching
- object-fit
- transforms
- excessive compression

Fix frontend rendering issues where applicable.

When the source itself is poor, use available image-generation/editing capabilities to create a premium ecommerce interpretation based on the garment.

---

# Three-Image Requirement

Every important product should have exactly 3 useful images:

1. Hero
   - complete premium ecommerce presentation

2. Detail
   - closer useful garment detail

3. Editorial
   - polished lifestyle/model presentation

Do not create three nearly identical images.

---

# Garment Fidelity

The SAME garment must remain recognisable across all three images.

Preserve:

- primary colour
- secondary colours
- print
- embroidery
- neckline
- sleeves
- silhouette
- borders
- dupatta
- matching bottom
- garment combination

AI drift is unacceptable.

Do not create three related but different outfits.

The garment is the source of truth, not the identity of the Instagram model.

A different generic model is acceptable.

---

# Image Standard

Prefer approximately 1200px+ output where useful.

Use efficient web formats such as WebP where compatible.

Do not create unnecessarily huge files.

Keep the catalogue visually coherent through reasonably consistent:

- crop
- lighting
- background family
- colour grading
- model styling

The store should feel like one brand shoot.

---

# Theme / UI Palette

Derive the Niikurr storefront palette from the supplied logo.

Determine:

- primary
- secondary
- accent
- page background
- surface tone
- main text

Reuse the existing theme-token architecture.

Do not build a new design system.

Do not mechanically use every logo colour.

---

# Homepage

PRESERVE the existing richness and good UX of the Mithel Kapoor homepage.

Do not simplify it.

Re-merchandise existing sections for Niikurr.

Preferred hierarchy:

1. Header/logo
2. Strong Niikurr editorial hero
3. Shop by Category
4. New / Featured Collection
5. Strong editorial collection feature
6. Selected product row
7. Festive / Occasion section where supported
8. Instagram CTA
9. subtle Business Preview
10. Footer

Use the strongest Niikurr products above the fold.

---

# Product Detail Page

Reuse the existing Mithel Kapoor PDP architecture.

Adapt it for women's traditional wear.

Ensure:

- 3-image gallery
- product title
- price
- size selector
- quantity
- Add to Bag
- concise description
- related products

Remove Mithel/menswear-specific content.

Do not introduce unsupported claims.

---

# Storefront Integration

All Niikurr products must work correctly in:

- homepage
- categories
- search
- PDP
- related products
- cart

No Mithel Kapoor product should unexpectedly appear in customer-facing flows.

---

# Business Preview

Preserve the existing Business Preview/dashboard functionality.

Do NOT spend significant implementation time customizing it in the first Niikurr demo.

Keep it secondary to the storefront.

Metrics must remain SAMPLE / SIMULATED.

---

# Mobile First

Primary target:

360–430px

Carefully check:

- logo
- navbar
- hero
- category cards
- product rows
- product cards
- image crops
- PDP gallery
- sizes
- sticky CTA
- cart
- footer

Desktop must remain polished.

---

# Technical Rules

Follow existing repository patterns.

Do not:

- add unnecessary dependencies
- introduce `any` merely to silence TypeScript
- build a backend
- add live payments
- add production authentication
- perform unrelated refactors

---

# Validation

Use actual scripts from package.json.

Where relevant:

- run lint
- run typecheck if available
- run production build
- verify image paths
- verify product routes
- verify responsive layout

---

# Speed Principle

This is a prospect-conversion demo.

Spend effort where the prospect will notice it:

1. brand resemblance
2. homepage richness
3. sharp product imagery
4. polished PDP
5. mobile experience

Do not spend time perfecting hidden architecture.