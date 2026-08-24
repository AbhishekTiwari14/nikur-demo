import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { CommerceProduct } from '../../data/productTypes'
import { Container } from '../layout/LayoutPrimitives'

interface DetailItem {
  imageIndex: number
  product: CommerceProduct
}

interface JewelleryDetailsSectionProps {
  anchorIds?: readonly string[]
  description?: string
  eyebrow?: string
  items: readonly [DetailItem, DetailItem, DetailItem]
  title?: string
}

export function JewelleryDetailsSection({
  anchorIds = [],
  description = 'Visible garment details, framed more closely.',
  eyebrow = 'The details',
  items,
  title = 'A closer look.',
}: JewelleryDetailsSectionProps) {
  return (
    <section className="relative bg-[#f0efea] py-14 sm:py-20 lg:py-28" id="details">
      {anchorIds.map((anchorId) => (
        <span aria-hidden="true" className="absolute -top-24" id={anchorId} key={anchorId} />
      ))}
      <Container>
        <div className="max-w-2xl">
          <p className="type-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 font-display text-[2.65rem] leading-[0.9] font-medium tracking-[-0.04em] text-ovia-ink sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-ovia-muted sm:text-base sm:leading-7">
            {description}
          </p>
        </div>

        <div className="scrollbar-none -mx-4 mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-7">
          {items.map(({ imageIndex, product }) => (
            <Link className="group w-[72vw] max-w-[18rem] shrink-0 snap-start sm:w-auto sm:max-w-none" key={product.id} to={`/product/${product.slug}`}>
              <div className="overflow-hidden bg-ovia-blush/55">
                <img alt={`${product.catalogueName} detail`} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" src={product.images[imageIndex] ?? product.images[0]} />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.62rem] font-bold tracking-[0.14em] text-ovia-primary uppercase">Closer view</p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-ovia-ink sm:text-base">{product.catalogueName}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-ovia-primary" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
