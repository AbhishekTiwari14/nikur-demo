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
    throw new Error(`Required Niikurr product is missing: ${slug}`)
  }
  return product
}

const chocolateLehenga = requiredProduct('chocolate-wine-embellished-lehenga-set')
const fuchsiaChaniya = requiredProduct('fuchsia-multicolour-chaniya-choli')
const purpleChaniya = requiredProduct('purple-multicolour-bodice-chaniya-choli')
const rubyChaniya = requiredProduct('ruby-ivory-chaniya-choli')
const ivoryDress = requiredProduct('ivory-gold-trim-festive-dress')
const scarletChaniya = requiredProduct('scarlet-multicolour-detail-chaniya-choli')
const emeraldChaniya = requiredProduct('emerald-geometric-panel-chaniya-choli')
const vintageBlackChaniya = requiredProduct('vintage-panel-black-chaniya-choli')
const blackGoldLehenga = requiredProduct('black-antique-gold-printed-lehenga-set')
const mustardChaniya = requiredProduct('mustard-geometric-detail-chaniya-choli')

const featuredProducts = [
  blackGoldLehenga,
  fuchsiaChaniya,
  chocolateLehenga,
  mustardChaniya,
]

const chaniyaHighlights = [rubyChaniya, emeraldChaniya, purpleChaniya, scarletChaniya]

const categoryCards = [
  { label: 'Chaniya Choli', href: '#chaniya-choli', product: fuchsiaChaniya },
  { label: 'Lehenga Sets', href: '#lehenga-sets', product: blackGoldLehenga },
  { label: 'Festive Dresses', href: '#festive-dresses', product: ivoryDress },
]

const heroSlides = [
  {
    product: blackGoldLehenga,
    headline: 'Tradition, styled for today.',
    copy: 'Graphic detail and sweeping silhouettes for moments worth dressing for.',
    cta: 'Explore lehenga sets',
    imageIndex: 2,
    mobileObjectPosition: 'center 28%',
    desktopObjectPosition: 'center 18%',
  },
  {
    product: fuchsiaChaniya,
    headline: 'For moments worth dressing for.',
    copy: 'Vivid colour, expressive detail, and an effortless sense of movement.',
    cta: 'Explore chaniya choli',
    imageIndex: 2,
    mobileObjectPosition: 'center 25%',
    desktopObjectPosition: 'center 16%',
  },
  {
    product: chocolateLehenga,
    headline: 'Timeless silhouettes. Modern expression.',
    copy: 'Rich tones and considered pairings for an elegant festive wardrobe.',
    cta: 'View the collection',
    imageIndex: 2,
    mobileObjectPosition: 'center 27%',
    desktopObjectPosition: 'center 17%',
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
          description="A focused edit of vivid chaniya choli, sweeping lehengas, and a refined festive dress."
          eyebrow="New and featured"
          id="featured"
          onOpenCart={openCart}
          products={featuredProducts}
          title="The Niikurr edit"
        />
      </Container>

      <JewelleryEditorialSection
        anchorIds={['lehenga-sets']}
        detailProduct={fuchsiaChaniya}
        featuredProduct={blackGoldLehenga}
        secondaryProduct={chocolateLehenga}
      />

      <Container>
        <ProductSection
          description="Colour-led festive silhouettes with distinct panels, borders, and draped pairings."
          eyebrow="Festive colour"
          id="chaniya-choli"
          onOpenCart={openCart}
          products={chaniyaHighlights}
          title="Chaniya choli in focus"
        />
      </Container>

      <JewelleryDetailsSection
        anchorIds={['festive-dresses']}
        description="A closer look at the borders, geometric panels, and surface details that define the collection."
        eyebrow="Festive and occasion"
        items={[
          { imageIndex: 1, product: ivoryDress },
          { imageIndex: 1, product: vintageBlackChaniya },
          { imageIndex: 1, product: mustardChaniya },
        ]}
        title="Detail, up close"
      />

      <section className="overflow-hidden border-y border-ovia-line bg-white" id="instagram">
        <div className="mx-auto grid w-full max-w-360 md:grid-cols-[0.9fr_1.1fr]">
          <img
            alt={vintageBlackChaniya.catalogueName}
            className="aspect-[4/3] size-full object-cover object-top md:aspect-auto md:min-h-[32rem]"
            src={vintageBlackChaniya.images[2]}
          />
          <div className="flex items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-20">
            <div className="max-w-xl">
              <Camera aria-hidden="true" className="text-ovia-logo" size={24} strokeWidth={1.6} />
              <p className="type-eyebrow mt-5">Follow the collection</p>
              <h2 className="mt-3 font-display text-[2.65rem] leading-[0.94] font-medium text-ovia-ink sm:text-5xl">
                See more from Niikurr
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-ovia-muted sm:text-base">
                Discover current styling and collection updates on the official Instagram profile.
              </p>
              <a
                className="mt-7 inline-flex min-h-12 items-center gap-2 border-b border-ovia-primary text-sm font-bold text-ovia-plum"
                href="https://www.instagram.com/niikurr/"
                rel="noreferrer"
                target="_blank"
              >
                @niikurr
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
