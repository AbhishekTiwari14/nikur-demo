import type {
  ProductCategory,
  ProductImageGallery,
  ProductVariantOption,
  SellableProduct,
} from './productTypes'

interface ProductDefinition {
  id: string
  slug: string
  name: string
  price: number
  category: ProductCategory
  description: string
  color: string
  images: ProductImageGallery
  sourceFiles: string
}

const standardSizes = [
  {
    id: 'size',
    name: 'Size',
    values: ['S', 'M', 'L', 'XL'],
  },
] as const satisfies readonly ProductVariantOption[]

function defineProduct(definition: ProductDefinition): SellableProduct {
  const { color, sourceFiles, ...product } = definition

  return {
    ...product,
    catalogueName: definition.name,
    nameProvenance: 'generated-demo',
    priceInPaise: definition.price * 100,
    priceStatus: 'demo',
    attributes: [
      {
        label: 'Colour',
        value: color,
        evidence: 'visual-source',
      },
    ],
    variantOptions: standardSizes,
    isDemoProduct: true,
    status: 'sellable',
    source: {
      kind: 'generated-demo',
      fileName: sourceFiles,
      notes:
        'Source-backed demo product. Website imagery and pricing were prepared for this private sales concept.',
    },
  }
}

const imageRoot = '/images/niikurr/products'

export const products = [
  defineProduct({
    id: 'jg-real-001',
    slug: 'chocolate-wine-embellished-lehenga-set',
    name: 'Chocolate & Wine Embellished Lehenga Set',
    price: 3_999,
    category: 'lehenga-sets',
    description:
      'A chocolate-toned choli, deep-wine full skirt, and coordinating drape finished with restrained multicolour edge detail.',
    color: 'Chocolate brown and deep wine',
    images: [
      `${imageRoot}/chocolate-wine-embellished-lehenga-set/hero.webp`,
      `${imageRoot}/chocolate-wine-embellished-lehenga-set/detail.webp`,
      `${imageRoot}/chocolate-wine-embellished-lehenga-set/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125029.png',
  }),
  defineProduct({
    id: 'jg-real-009',
    slug: 'fuchsia-multicolour-chaniya-choli',
    name: 'Fuchsia Multicolour Chaniya Choli',
    price: 3_499,
    category: 'chaniya-choli',
    description:
      'A fuchsia chaniya choli with a vivid multicolour bodice, sweeping skirt, and coordinating dupatta.',
    color: 'Fuchsia with multicolour detail',
    images: [
      `${imageRoot}/fuchsia-multicolour-chaniya-choli/hero.webp`,
      `${imageRoot}/fuchsia-multicolour-chaniya-choli/detail.webp`,
      `${imageRoot}/fuchsia-multicolour-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125111.png',
  }),
  defineProduct({
    id: 'jg-real-010',
    slug: 'purple-multicolour-bodice-chaniya-choli',
    name: 'Purple Multicolour-Bodice Chaniya Choli',
    price: 2_499,
    category: 'chaniya-choli',
    description:
      'A purple chaniya choli pairing a full tonal skirt with a contrasting multicolour bodice and patterned borders.',
    color: 'Purple with multicolour detail',
    images: [
      `${imageRoot}/purple-multicolour-bodice-chaniya-choli/hero.webp`,
      `${imageRoot}/purple-multicolour-bodice-chaniya-choli/detail.webp`,
      `${imageRoot}/purple-multicolour-bodice-chaniya-choli/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-25 125132.png; Screenshot 2026-08-25 125513.png',
  }),
  defineProduct({
    id: 'jg-real-013',
    slug: 'ruby-ivory-chaniya-choli',
    name: 'Ruby & Ivory Chaniya Choli',
    price: 3_999,
    category: 'chaniya-choli',
    description:
      'A ruby and ivory chaniya choli with bold colour-blocked panels, a full skirt, and a coordinating drape.',
    color: 'Ruby red and ivory',
    images: [
      `${imageRoot}/ruby-ivory-chaniya-choli/hero.webp`,
      `${imageRoot}/ruby-ivory-chaniya-choli/detail.webp`,
      `${imageRoot}/ruby-ivory-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125146.png',
  }),
  defineProduct({
    id: 'jg-real-005',
    slug: 'rose-striped-chaniya-choli',
    name: 'Rose Striped Chaniya Choli',
    price: 2_299,
    category: 'chaniya-choli',
    description:
      'A rose-toned festive set shaped by vertical multicolour stripes and a softly flared silhouette.',
    color: 'Rose pink with multicolour stripes',
    images: [
      `${imageRoot}/rose-striped-chaniya-choli/hero.webp`,
      `${imageRoot}/rose-striped-chaniya-choli/detail.webp`,
      `${imageRoot}/rose-striped-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125200.png',
  }),
  defineProduct({
    id: 'jg-real-004',
    slug: 'ivory-gold-trim-festive-dress',
    name: 'Ivory Gold-Trim Festive Dress',
    price: 1_999,
    category: 'festive-dresses',
    description:
      'An ivory festive dress with a defined waist, generous flare, and a fine gold-toned edge treatment.',
    color: 'Ivory with gold trim',
    images: [
      `${imageRoot}/ivory-gold-trim-festive-dress/hero.webp`,
      `${imageRoot}/ivory-gold-trim-festive-dress/detail.webp`,
      `${imageRoot}/ivory-gold-trim-festive-dress/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125215.png',
  }),
  defineProduct({
    id: 'jg-real-011',
    slug: 'scarlet-multicolour-detail-chaniya-choli',
    name: 'Scarlet Multicolour-Detail Chaniya Choli',
    price: 2_999,
    category: 'chaniya-choli',
    description:
      'A scarlet chaniya choli with multicolour bodice detailing and a full matching skirt with a pale border.',
    color: 'Scarlet with multicolour detail',
    images: [
      `${imageRoot}/scarlet-multicolour-detail-chaniya-choli/hero.webp`,
      `${imageRoot}/scarlet-multicolour-detail-chaniya-choli/detail.webp`,
      `${imageRoot}/scarlet-multicolour-detail-chaniya-choli/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-25 125229.png; Screenshot 2026-08-25 125526.png',
  }),
  defineProduct({
    id: 'jg-real-015',
    slug: 'emerald-geometric-panel-chaniya-choli',
    name: 'Emerald Geometric-Panel Chaniya Choli',
    price: 2_799,
    category: 'chaniya-choli',
    description:
      'An emerald green chaniya choli with a fitted top, multicolour geometric panels, and a full tonal skirt.',
    color: 'Emerald green with multicolour detail',
    images: [
      `${imageRoot}/emerald-geometric-panel-chaniya-choli/hero.webp`,
      `${imageRoot}/emerald-geometric-panel-chaniya-choli/detail.webp`,
      `${imageRoot}/emerald-geometric-panel-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125329.png',
  }),
  defineProduct({
    id: 'jg-real-006',
    slug: 'black-multicolour-border-chaniya-choli',
    name: 'Black Multicolour-Border Chaniya Choli',
    price: 3_499,
    category: 'chaniya-choli',
    description:
      'A black chaniya choli framed by vivid multicolour borders across the fitted top and flared skirt.',
    color: 'Black with multicolour border',
    images: [
      `${imageRoot}/black-multicolour-border-chaniya-choli/hero.webp`,
      `${imageRoot}/black-multicolour-border-chaniya-choli/detail.webp`,
      `${imageRoot}/black-multicolour-border-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125418.png',
  }),
  defineProduct({
    id: 'jg-real-008',
    slug: 'vintage-panel-black-chaniya-choli',
    name: 'Vintage-Panel Black Chaniya Choli',
    price: 4_499,
    category: 'chaniya-choli',
    description:
      'A black chaniya choli with multicolour panel placement, broad patterned borders, and a dramatic full-skirt silhouette.',
    color: 'Black with multicolour panels',
    images: [
      `${imageRoot}/vintage-panel-black-chaniya-choli/hero.webp`,
      `${imageRoot}/vintage-panel-black-chaniya-choli/detail.webp`,
      `${imageRoot}/vintage-panel-black-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125446.png',
  }),
  defineProduct({
    id: 'jg-demo-001',
    slug: 'black-antique-gold-printed-lehenga-set',
    name: 'Black & Antique-Gold Printed Lehenga Set',
    price: 3_499,
    category: 'lehenga-sets',
    description:
      'An antique-gold printed, three-quarter-sleeve choli paired with a full black motif skirt and gold-toned border.',
    color: 'Black with antique-gold print',
    images: [
      `${imageRoot}/black-antique-gold-printed-lehenga-set/hero.webp`,
      `${imageRoot}/black-antique-gold-printed-lehenga-set/detail.webp`,
      `${imageRoot}/black-antique-gold-printed-lehenga-set/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-25 125548.png; Screenshot 2026-08-25 125616.png; Screenshot 2026-08-25 125633.png',
  }),
  defineProduct({
    id: 'jg-demo-002',
    slug: 'mustard-geometric-detail-chaniya-choli',
    name: 'Mustard Geometric-Detail Chaniya Choli',
    price: 2_799,
    category: 'chaniya-choli',
    description:
      'A mustard chaniya choli accented with multicolour geometric bands across the top and full skirt, with a coordinating dupatta.',
    color: 'Mustard with multicolour detail',
    images: [
      `${imageRoot}/mustard-geometric-detail-chaniya-choli/hero.webp`,
      `${imageRoot}/mustard-geometric-detail-chaniya-choli/detail.webp`,
      `${imageRoot}/mustard-geometric-detail-chaniya-choli/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-25 125649.png',
  }),
] as const satisfies readonly SellableProduct[]

export const realProducts = products.filter((product) => !product.isDemoProduct)
export const demoProducts = products.filter((product) => product.isDemoProduct)
export const sellableProducts = [...products]

export function findProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
