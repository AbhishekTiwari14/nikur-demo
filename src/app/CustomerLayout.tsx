import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, BriefcaseBusiness, Menu, Search, ShoppingBag } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { CartDrawer } from '../components/customer/CartDrawer'
import { CustomerSearchSheet } from '../components/customer/CustomerSearchSheet'
import { MobileNavigationDrawer } from '../components/customer/MobileNavigationDrawer'
import { SiteFooter } from '../components/customer/SiteFooter'
import { Container } from '../components/layout/LayoutPrimitives'
import { classNames } from '../lib/classNames'
import { useDemoStore } from '../store/demoStore'

interface BagButtonProps {
  cartCount: number
  dataTestId: string
  onOpen: () => void
  reducedMotion: boolean | null
}

function BagButton({ cartCount, dataTestId, onOpen, reducedMotion }: BagButtonProps) {
  return (
    <button
      aria-label={`Open bag with ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
      className="relative flex size-12 items-center justify-center rounded-full text-ovia-plum transition-colors hover:bg-ovia-blush/50"
      data-testid={dataTestId}
      onClick={onOpen}
      type="button"
    >
      <ShoppingBag aria-hidden="true" size={20} />
      <AnimatePresence mode="popLayout">
        {cartCount > 0 && (
          <motion.span
            animate={{ opacity: 1, scale: 1 }}
            aria-live="polite"
            className="absolute -top-0.5 -right-0.5 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-ovia-primary px-1 text-[0.65rem] font-bold text-white ring-2 ring-ovia-ivory"
            data-testid="cart-badge"
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.8 }}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.75 }}
            key={cartCount}
            transition={{ duration: 0.18 }}
          >
            {cartCount}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export function CustomerLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const cartCount = useDemoStore((state) => state.cart.reduce((count, line) => count + line.quantity, 0))
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.hash, location.pathname])

  useEffect(() => {
    const syncScrollState = () => setIsScrolled(window.scrollY > 20)
    syncScrollState()
    window.addEventListener('scroll', syncScrollState, { passive: true })
    return () => window.removeEventListener('scroll', syncScrollState)
  }, [])

  const integratedHeader = isHome && !isScrolled

  return (
    <div className="customer-shell min-h-screen">
      <header
        className={classNames(
          'sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300',
          integratedHeader
            ? 'border-transparent bg-ovia-ivory/78 backdrop-blur-md'
            : 'border-ovia-line/85 bg-ovia-ivory/96 shadow-[0_5px_22px_rgb(16_17_15/0.06)] backdrop-blur-xl',
        )}
        data-header-state={integratedHeader ? 'integrated' : 'solid'}
      >
        <Container className="relative flex min-h-16 items-center justify-between lg:hidden">
          <button aria-label="Open navigation" className="flex size-11 items-center justify-center rounded-full text-ovia-plum transition-colors hover:bg-ovia-blush/50" data-testid="mobile-menu-trigger" onClick={() => setIsMenuOpen(true)} type="button">
            <Menu aria-hidden="true" size={22} />
          </button>
          <Link aria-label="Nikur home" className="absolute left-1/2 flex -translate-x-1/2 items-center whitespace-nowrap" to="/">
            <img alt="Nikur" className="h-11 w-[4.5rem] object-contain" height="44" src="/brand/nikur-logo.png" width="72" />
          </Link>
          <div className="flex items-center">
            <button aria-label="Search Nikur products" className="flex size-11 items-center justify-center rounded-full text-ovia-plum transition-colors hover:bg-ovia-blush/50" data-testid="mobile-search-trigger" onClick={() => setIsSearchOpen(true)} type="button">
              <Search aria-hidden="true" size={20} />
            </button>
            <BagButton cartCount={cartCount} dataTestId="header-bag-button" onOpen={() => setIsCartOpen(true)} reducedMotion={prefersReducedMotion} />
          </div>
        </Container>

        <Container className="hidden min-h-20 items-center justify-between gap-5 lg:flex">
          <Link aria-label="Nikur home" className="flex items-center" to="/"><img alt="Nikur" className="h-14 w-24 object-contain" height="56" src="/brand/nikur-logo.png" width="96" /></Link>
          <nav aria-label="Primary" className="flex items-center gap-7 xl:gap-9">
            <a className="text-[0.72rem] font-semibold tracking-[0.09em] text-ovia-muted uppercase transition-colors hover:text-ovia-primary" href="/#featured">Featured</a>
            <a className="text-[0.72rem] font-semibold tracking-[0.09em] text-ovia-muted uppercase transition-colors hover:text-ovia-primary" href="/#chaniya-choli">Chaniya Choli</a>
            <a className="text-[0.72rem] font-semibold tracking-[0.09em] text-ovia-muted uppercase transition-colors hover:text-ovia-primary" href="/#lehenga-sets">Lehenga Sets</a>
            <a className="text-[0.72rem] font-semibold tracking-[0.09em] text-ovia-muted uppercase transition-colors hover:text-ovia-primary" href="/#festive-dresses">Festive Dresses</a>
            <Link
              aria-label="Explore the Nikur Business Preview"
              className="group inline-flex min-h-11 items-center gap-2 rounded-control border border-ovia-plum bg-ovia-plum px-4 text-white shadow-[0_6px_16px_rgb(16_17_15/0.14)] transition-colors hover:bg-ovia-primary"
              data-testid="desktop-business-preview"
              to="/business"
            >
              <BriefcaseBusiness aria-hidden="true" size={15} />
              <span className="text-[0.68rem] font-bold whitespace-nowrap">Business Preview</span>
              <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" size={14} />
            </Link>
          </nav>
          <div className="flex items-center gap-1">
            <button aria-label="Search Nikur products" className="flex size-11 items-center justify-center rounded-full text-ovia-plum hover:bg-ovia-blush/50" onClick={() => setIsSearchOpen(true)} type="button"><Search aria-hidden="true" size={18} /></button>
            <BagButton cartCount={cartCount} dataTestId="desktop-header-bag-button" onOpen={() => setIsCartOpen(true)} reducedMotion={prefersReducedMotion} />
          </div>
        </Container>
      </header>

      <motion.main animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 4 }} key={location.pathname} transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeOut' }}>
        <Outlet context={{ openCart: () => setIsCartOpen(true) }} />
      </motion.main>
      {!location.pathname.startsWith('/checkout') && <SiteFooter />}

      <MobileNavigationDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CustomerSearchSheet isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
