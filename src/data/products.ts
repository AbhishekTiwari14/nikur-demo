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

const imageRoot = '/images/mithel-kapoor/products'

export const products = [
  defineProduct({
    id: 'jg-real-001',
    slug: 'silver-botanical-sherwani-set',
    name: 'Silver Botanical Sherwani Set',
    price: 5_999,
    category: 'ethnic-wear',
    description:
      'A silver-grey occasion set with a structured band collar, botanical surface work, matching trousers, and a coordinating drape.',
    color: 'Silver grey',
    images: [
      `${imageRoot}/silver-botanical-sherwani-set/hero.webp`,
      `${imageRoot}/silver-botanical-sherwani-set/detail.webp`,
      `${imageRoot}/silver-botanical-sherwani-set/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 185514.png',
  }),
  defineProduct({
    id: 'jg-real-009',
    slug: 'midnight-embroidered-long-jacket',
    name: 'Midnight Embroidered Long Jacket',
    price: 5_499,
    category: 'ethnic-wear',
    description:
      'A deep midnight occasion look with a high collar, elongated jacket, and pale geometric embroidery concentrated through the front and cuffs.',
    color: 'Midnight navy',
    images: [
      `${imageRoot}/midnight-embroidered-long-jacket/hero.webp`,
      `${imageRoot}/midnight-embroidered-long-jacket/detail.webp`,
      `${imageRoot}/midnight-embroidered-long-jacket/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 185536.png',
  }),
  defineProduct({
    id: 'jg-real-010',
    slug: 'ivory-shawl-collar-evening-blazer',
    name: 'Ivory Shawl-Collar Evening Blazer',
    price: 6_999,
    category: 'suits-blazers',
    description:
      'A clean ivory evening blazer defined by a broad shawl collar, sharp flap pockets, and a sculptural front fastening.',
    color: 'Ivory',
    images: [
      `${imageRoot}/ivory-shawl-collar-evening-blazer/hero.webp`,
      `${imageRoot}/ivory-shawl-collar-evening-blazer/detail.webp`,
      `${imageRoot}/ivory-shawl-collar-evening-blazer/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 185650.png',
  }),
  defineProduct({
    id: 'jg-real-013',
    slug: 'textured-yoke-evening-shirt',
    name: 'Textured Yoke Evening Shirt',
    price: 1_799,
    category: 'shirts',
    description:
      'A restrained evening shirt with a pointed collar, clean concealed front, and tonal texture across the upper body.',
    color: 'Olive grey',
    images: [
      `${imageRoot}/textured-yoke-evening-shirt/hero.webp`,
      `${imageRoot}/textured-yoke-evening-shirt/detail.webp`,
      `${imageRoot}/textured-yoke-evening-shirt/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 185704.png',
  }),
  defineProduct({
    id: 'jg-real-005',
    slug: 'black-embroidered-evening-suit',
    name: 'Black Embroidered Evening Suit',
    price: 7_999,
    category: 'suits-blazers',
    description:
      'A sharply tailored black evening suit with cool-silver botanical applique placed across the jacket front and sleeve.',
    color: 'Black with silver detail',
    images: [
      `${imageRoot}/black-embroidered-evening-suit/hero.webp`,
      `${imageRoot}/black-embroidered-evening-suit/detail.webp`,
      `${imageRoot}/black-embroidered-evening-suit/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 185732.png',
  }),
  defineProduct({
    id: 'jg-real-004',
    slug: 'navy-paisley-statement-shirt',
    name: 'Navy Paisley Statement Shirt',
    price: 2_499,
    category: 'shirts',
    description:
      'A relaxed navy statement shirt with an open collar and oversized pale paisley motifs placed across the lower front.',
    color: 'Navy with ivory detail',
    images: [
      `${imageRoot}/navy-paisley-statement-shirt/hero.webp`,
      `${imageRoot}/navy-paisley-statement-shirt/detail.webp`,
      `${imageRoot}/navy-paisley-statement-shirt/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-24 185750.png; Screenshot 2026-08-24 185807.png',
  }),
  defineProduct({
    id: 'jg-real-011',
    slug: 'embroidered-pinstripe-resort-shirt',
    name: 'Embroidered Pinstripe Resort Shirt',
    price: 2_299,
    category: 'shirts',
    description:
      'A light pinstripe resort shirt with an open collar and considered botanical embroidery across the chest and lower front.',
    color: 'Pale blue with multicolour detail',
    images: [
      `${imageRoot}/embroidered-pinstripe-resort-shirt/hero.webp`,
      `${imageRoot}/embroidered-pinstripe-resort-shirt/detail.webp`,
      `${imageRoot}/embroidered-pinstripe-resort-shirt/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-24 185825.png; Screenshot 2026-08-24 185846.png',
  }),
  defineProduct({
    id: 'jg-real-015',
    slug: 'ivory-multicolour-festive-kurta-set',
    name: 'Ivory Multicolour Festive Kurta Set',
    price: 3_499,
    category: 'ethnic-wear',
    description:
      'An ivory festive kurta set with a band collar and multicolour motifs arranged through the placket, chest, sleeves, and body.',
    color: 'Ivory with multicolour detail',
    images: [
      `${imageRoot}/ivory-multicolour-festive-kurta-set/hero.webp`,
      `${imageRoot}/ivory-multicolour-festive-kurta-set/detail.webp`,
      `${imageRoot}/ivory-multicolour-festive-kurta-set/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-24 185901.png; Screenshot 2026-08-24 185913.png; Screenshot 2026-08-24 185925.png',
  }),
  defineProduct({
    id: 'jg-real-006',
    slug: 'black-sequinned-tuxedo',
    name: 'Black Sequinned Tuxedo',
    price: 8_999,
    category: 'suits-blazers',
    description:
      'A formal black tuxedo with a satin shawl lapel and a restrained sequinned surface that catches light without losing its clean line.',
    color: 'Black',
    images: [
      `${imageRoot}/black-sequinned-tuxedo/hero.webp`,
      `${imageRoot}/black-sequinned-tuxedo/detail.webp`,
      `${imageRoot}/black-sequinned-tuxedo/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 190026.png',
  }),
  defineProduct({
    id: 'jg-real-008',
    slug: 'sage-embroidered-bandhgala',
    name: 'Sage Embroidered Bandhgala',
    price: 4_999,
    category: 'ethnic-wear',
    description:
      'A closed-front sage bandhgala with a neat stand collar and dense tonal embroidery balanced by straight dark trousers.',
    color: 'Sage green',
    images: [
      `${imageRoot}/sage-embroidered-bandhgala/hero.webp`,
      `${imageRoot}/sage-embroidered-bandhgala/detail.webp`,
      `${imageRoot}/sage-embroidered-bandhgala/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 190041.png',
  }),
  defineProduct({
    id: 'jg-demo-001',
    slug: 'deep-plum-embroidered-festive-set',
    name: 'Deep Plum Embroidered Festive Set',
    price: 5_499,
    category: 'ethnic-wear',
    description:
      'A deep-plum festive set pairing a high-collar kurta with a long open jacket framed by pale geometric embroidery.',
    color: 'Deep plum with ivory-gold detail',
    images: [
      `${imageRoot}/deep-plum-embroidered-festive-set/hero.webp`,
      `${imageRoot}/deep-plum-embroidered-festive-set/detail.webp`,
      `${imageRoot}/deep-plum-embroidered-festive-set/editorial.webp`,
    ],
    sourceFiles:
      'Screenshot 2026-08-24 190106.png; Screenshot 2026-08-24 190119.png',
  }),
  defineProduct({
    id: 'jg-demo-002',
    slug: 'ivory-tonal-embroidered-sherwani-set',
    name: 'Ivory Tonal Embroidered Sherwani Set',
    price: 5_999,
    category: 'ethnic-wear',
    description:
      'An ivory sherwani set with a closed band collar, long structured front, tonal geometric-botanical embroidery, and coordinated draped trousers.',
    color: 'Ivory with tonal beige detail',
    images: [
      `${imageRoot}/ivory-tonal-embroidered-sherwani-set/hero.webp`,
      `${imageRoot}/ivory-tonal-embroidered-sherwani-set/detail.webp`,
      `${imageRoot}/ivory-tonal-embroidered-sherwani-set/editorial.webp`,
    ],
    sourceFiles: 'Screenshot 2026-08-24 190210.png',
  }),
] as const satisfies readonly SellableProduct[]

export const realProducts = products.filter((product) => !product.isDemoProduct)
export const demoProducts = products.filter((product) => product.isDemoProduct)
export const sellableProducts = [...products]

export function findProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}
