import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '../layout/LayoutPrimitives'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ovia-plum text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.4fr_1fr_1fr] sm:py-16 lg:py-20">
        <div className="max-w-sm">
          <img
            alt="Mithel Kapoor"
            className="size-14 object-contain invert"
            height="56"
            src="/brand/mithel-kapoor-logo.png"
            width="56"
          />
          <p className="mt-5 text-xl font-semibold uppercase">Mithel Kapoor</p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            A private menswear storefront concept shaped around the supplied Mithel Kapoor references.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold text-ovia-logo uppercase">
            Catalogue
          </p>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/80">
            <a className="hover:text-white" href="/#shirts">Shirts</a>
            <a className="hover:text-white" href="/#suits-blazers">Suits &amp; Blazers</a>
            <a className="hover:text-white" href="/#ethnic-wear">Ethnic Wear</a>
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
            href="https://www.instagram.com/mithelkapoorofficial/"
            rel="noreferrer"
            target="_blank"
          >
            @mithelkapoorofficial
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <p className="mt-6 text-xs leading-5 text-white/50">
            Business activity and checkout are simulated. No payment is taken.
          </p>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-wrap items-center justify-between gap-2 py-5 text-xs text-white/50">
          <span>Private concept for Mithel Kapoor</span>
          <span>Product information is limited to the supplied reference material.</span>
        </Container>
      </div>
    </footer>
  )
}
