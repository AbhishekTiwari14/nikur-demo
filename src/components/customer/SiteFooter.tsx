import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '../layout/LayoutPrimitives'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ovia-plum text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr_1fr] sm:py-16 lg:py-20">
        <div className="max-w-sm">
          <img
            alt="Nikur"
            className="h-20 w-32 object-contain brightness-0 invert"
            height="80"
            src="/brand/nikur-logo.png"
            width="128"
          />
          <p className="mt-5 text-sm leading-6 text-white/70">
            An image-led Indian occasion-wear storefront shaped around the supplied Nikur references.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold text-ovia-logo uppercase">
            Catalogue
          </p>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/80">
            <a className="hover:text-white" href="/#chaniya-choli">Chaniya Choli</a>
            <a className="hover:text-white" href="/#lehenga-sets">Lehenga Sets</a>
            <a className="hover:text-white" href="/#festive-dresses">Festive Dresses</a>
            <a className="hover:text-white" href="/#featured">Featured</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-ovia-logo uppercase">
            Private concept
          </p>
          <Link
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            to="/business"
          >
            Business Preview
            <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
          <a
            className="mt-4 flex w-fit items-center gap-2 text-sm text-white/80 hover:text-white"
            href="https://www.instagram.com/niikurr/"
            rel="noreferrer"
            target="_blank"
          >
            @niikurr
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <p className="mt-6 text-xs leading-5 text-white/50">
            Business activity and checkout are simulated. No payment is taken.
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-white/50">
          <span>Private concept for Nikur</span>
          <span>Product information is limited to the supplied reference material.</span>
        </Container>
      </div>
    </footer>
  )
}
