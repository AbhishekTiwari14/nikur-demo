import { motion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Camera } from 'lucide-react'
import { useOutletContext } from 'react-router-dom'

import { BusinessRevealSection } from '../components/customer/BusinessRevealSection'
import {
  HomeHeroCarousel,
  type HeroSlide,
} from '../components/customer/HomeHeroCarousel'
import { JewelleryDetailsSection } from '../components/customer/JewelleryDetailsSection'
import { JewelleryEditorialSection } from '../components/customer/JewelleryEditorialSection'
import { ProductSection } from '../components/customer/ProductSection'
import { Container } from '../components/layout/LayoutPrimitives'
import { sellableProducts } from '../data/products'
import { isProductActive } from '../data/productTypes'
import { useDemoStore } from '../store/demoStore'

const bySlug = Object.fromEntries(
  sellableProducts.map((product) => [product.slug, product]),
)

function requiredProduct(slug: string) {
  const product = bySlug[slug]
  if (!product) {
    throw new Error(`Required Mithel Kapoor product is missing: ${slug}`)
  }
  return product
}

const silverSherwani = requiredProduct('silver-botanical-sherwani-set')
const midnightJacket = requiredProduct('midnight-embroidered-long-jacket')
const ivoryBlazer = requiredProduct('ivory-shawl-collar-evening-blazer')
const blackEveningSuit = requiredProduct('black-embroidered-evening-suit')
const navyPaisleyShirt = requiredProduct('navy-paisley-statement-shirt')
const multicolourKurta = requiredProduct('ivory-multicolour-festive-kurta-set')
const blackTuxedo = requiredProduct('black-sequinned-tuxedo')
const sageBandhgala = requiredProduct('sage-embroidered-bandhgala')
const plumFestiveSet = requiredProduct('deep-plum-embroidered-festive-set')

const featuredProducts = [
  blackTuxedo,
  silverSherwani,
  navyPaisleyShirt,
  multicolourKurta,
]

const shirts = sellableProducts.filter(
  (product) => product.category === 'shirts',
)

const categoryCards = [
  { label: 'Shirts', href: '#shirts', product: navyPaisleyShirt },
  { label: 'Suits & Blazers', href: '#suits-blazers', product: blackTuxedo },
  { label: 'Ethnic Wear', href: '#ethnic-wear', product: silverSherwani },
]

const heroSlides = [
  {
    product: blackTuxedo,
    headline: 'Made for the moment.',
    copy: 'Sharp evening silhouettes with a measured sense of occasion.',
    cta: 'Explore evening wear',
    imageIndex: 2,
    mobileObjectPosition: 'center 30%',
    desktopObjectPosition: 'center 12%',
  },
  {
    product: silverSherwani,
    headline: 'Occasion, considered.',
    copy: 'Refined structure and expressive detail for a modern festive wardrobe.',
    cta: 'Explore ethnic wear',
    imageIndex: 2,
    mobileObjectPosition: 'center 28%',
    desktopObjectPosition: 'center 12%',
  },
  {
    product: navyPaisleyShirt,
    headline: 'Statements, refined.',
    copy: 'Relaxed proportions and confident detail for after-dark dressing.',
    cta: 'Explore shirts',
    imageIndex: 2,
    mobileObjectPosition: 'center 26%',
    desktopObjectPosition: 'center 12%',
  },
] as const satisfies readonly [HeroSlide, ...HeroSlide[]]

interface CustomerOutletContext {
  openCart: () => void
}

export function HomePage() {
  const { openCart } = useOutletContext<CustomerOutletContext>()
  const createdProducts = useDemoStore((state) => state.createdProducts)
  const activeCreatedProducts = createdProducts.filter(isProductActive)

  return (
    <>
      <HomeHeroCarousel slides={heroSlides} />

      <Container>
        <section aria-labelledby="category-title" className="pt-14 pb-5 sm:pt-20 sm:pb-8 lg:pt-24 lg:pb-10">
          <div className="mb-6 sm:mb-10">
            <p className="type-eyebrow">Explore the catalogue</p>
            <h2 className="mt-3 font-display text-[2.55rem] leading-[0.92] font-medium text-ovia-ink sm:text-5xl" id="category-title">
              Shop by category
            </h2>
          </div>

          <div className="scrollbar-none -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto overscroll-x-contain px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-7">
            {categoryCards.map(({ label, href, product }) => (
              <motion.a
                className="group block w-[62vw] max-w-[15rem] shrink-0 snap-start sm:w-auto sm:max-w-none"
                href={href}
                key={label}
                whileTap={{ scale: 0.985 }}
              >
                <div className="overflow-hidden bg-ovia-blush/55">
                  <img alt="" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" src={product.images[0]} />
                </div>
                <div className="mt-3 flex min-h-10 items-center justify-between border-b border-ovia-line pb-2.5 text-ovia-ink transition-colors group-hover:text-ovia-primary">
                  <span className="font-display text-[1.35rem] font-medium sm:text-2xl">{label}</span>
                  <ArrowRight aria-hidden="true" size={16} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <ProductSection
          compactTop
          description="A focused edit spanning statement shirts, evening tailoring, and occasion wear."
          eyebrow="New and featured"
          id="featured"
          onOpenCart={openCart}
          products={featuredProducts}
          title="The Mithel Kapoor edit"
        />
      </Container>

      <JewelleryEditorialSection
        anchorIds={['suits-blazers']}
        detailProduct={ivoryBlazer}
        featuredProduct={blackEveningSuit}
        secondaryProduct={blackTuxedo}
      />

      <Container>
        <ProductSection
          description="Clean evening foundations and embroidered statements, each built around a distinct surface treatment."
          eyebrow="Everyday statements"
          id="shirts"
          onOpenCart={openCart}
          products={shirts}
          title="Shirts with presence"
        />
      </Container>

      <JewelleryDetailsSection
        anchorIds={['ethnic-wear']}
        description="Tonal embroidery, botanical surface work, and considered festive silhouettes from the supplied collection."
        eyebrow="Ethnic and occasion"
        items={[
          { imageIndex: 1, product: silverSherwani },
          { imageIndex: 1, product: sageBandhgala },
          { imageIndex: 1, product: plumFestiveSet },
        ]}
        title="Craft in focus"
      />

      <section className="overflow-hidden border-y border-ovia-line bg-white" id="instagram">
        <div className="mx-auto grid w-full max-w-360 md:grid-cols-[0.9fr_1.1fr]">
          <img
            alt={midnightJacket.catalogueName}
            className="aspect-[4/3] size-full object-cover object-top md:aspect-auto md:min-h-[32rem]"
            src={midnightJacket.images[2]}
          />
          <div className="flex items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-20">
            <div className="max-w-xl">
              <Camera aria-hidden="true" className="text-ovia-logo" size={24} strokeWidth={1.6} />
              <p className="type-eyebrow mt-5">Follow the collection</p>
              <h2 className="mt-3 font-display text-[2.65rem] leading-[0.94] font-medium text-ovia-ink sm:text-5xl">
                See more from Mithel Kapoor
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-ovia-muted sm:text-base">
                Discover current styling and collection updates on the official Instagram profile.
              </p>
              <a
                className="mt-7 inline-flex min-h-12 items-center gap-2 border-b border-ovia-primary text-sm font-bold text-ovia-plum"
                href="https://www.instagram.com/mithelkapoorofficial/"
                rel="noreferrer"
                target="_blank"
              >
                @mithelkapoorofficial
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <BusinessRevealSection />

      {activeCreatedProducts.length > 0 && (
        <Container>
          <ProductSection
            description="Products published through the private Business Preview."
            eyebrow="Recently published"
            id="just-added"
            onOpenCart={openCart}
            products={activeCreatedProducts}
            title="Just added"
          />
        </Container>
      )}
    </>
  )
}
