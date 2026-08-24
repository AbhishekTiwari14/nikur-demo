import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type TouchEvent,
} from 'react'
import { Link } from 'react-router-dom'

import type { SellableProduct } from '../../data/productTypes'
import { classNames } from '../../lib/classNames'

export interface HeroSlide {
  product: SellableProduct
  headline: string
  copy: string
  cta: string
  imageIndex?: number
  mobileObjectPosition: string
  desktopObjectPosition: string
}

interface HomeHeroCarouselProps {
  slides: readonly [HeroSlide, ...HeroSlide[]]
}

const AUTOPLAY_DELAY = 5_000
const SWIPE_DISTANCE = 48
const transitionEase = [0.22, 1, 0.36, 1] as const
const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '4%' : '-4%',
  }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '-2%' : '2%',
  }),
}

export function HomeHeroCarousel({ slides }: HomeHeroCarouselProps) {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const blockSlideClick = useRef(false)
  const activeSlide = slides[activeIndex] ?? slides[0]
  const activeImage =
    activeSlide.product.images[activeSlide.imageIndex ?? 0] ??
    activeSlide.product.images[0]

  useEffect(() => {
    if (prefersReducedMotion || hasUserInteracted || slides.length < 2) return
    const timer = window.setTimeout(() => {
      setDirection(1)
      setActiveIndex((index) => (index + 1) % slides.length)
    }, AUTOPLAY_DELAY)
    return () => window.clearTimeout(timer)
  }, [activeIndex, hasUserInteracted, prefersReducedMotion, slides.length])

  const showSlide = (index: number, movement: number) => {
    setHasUserInteracted(true)
    if (index === activeIndex) return
    setDirection(movement)
    setActiveIndex(index)
  }

  const showPrevious = () =>
    showSlide((activeIndex - 1 + slides.length) % slides.length, -1)
  const showNext = () => showSlide((activeIndex + 1) % slides.length, 1)

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  const handleTouchEnd = (event: TouchEvent<HTMLElement>) => {
    const start = touchStart.current
    const touch = event.changedTouches[0]
    touchStart.current = null
    if (!start || !touch) return

    const distanceX = touch.clientX - start.x
    const distanceY = touch.clientY - start.y
    if (
      Math.abs(distanceX) < SWIPE_DISTANCE ||
      Math.abs(distanceX) <= Math.abs(distanceY)
    ) {
      return
    }

    blockSlideClick.current = true
    window.setTimeout(() => {
      blockSlideClick.current = false
    }, 450)
    if (distanceX > 0) showPrevious()
    else showNext()
  }

  return (
    <section
      aria-label="Mithel Kapoor featured menswear"
      aria-roledescription="carousel"
      className="relative h-[min(72svh,38rem)] min-h-[32rem] overflow-hidden bg-ovia-plum focus-visible:outline focus-visible:outline-3 focus-visible:-outline-offset-3 lg:h-[min(78svh,48rem)] lg:min-h-[38rem]"
      data-testid="home-hero-carousel"
      onKeyDown={handleKeyDown}
      onTouchCancel={() => {
        touchStart.current = null
      }}
      onTouchEnd={handleTouchEnd}
      onTouchStart={(event) => {
        const touch = event.touches[0]
        if (!touch) return
        touchStart.current = { x: touch.clientX, y: touch.clientY }
      }}
      style={{ touchAction: 'pan-y' }}
      tabIndex={0}
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.article
          animate="center"
          aria-label={`${activeSlide.headline}: ${activeSlide.product.catalogueName}`}
          aria-roledescription="slide"
          className="absolute inset-0 overflow-hidden"
          custom={direction}
          data-slide-index={activeIndex}
          data-testid="hero-active-slide"
          exit="exit"
          initial="enter"
          key={activeSlide.product.id}
          role="group"
          transition={{
            duration: prefersReducedMotion ? 0 : 0.58,
            ease: transitionEase,
          }}
          variants={slideVariants}
        >
          <div className="absolute inset-0 lg:hidden">
            <motion.img
              alt={activeSlide.product.catalogueName}
              animate={{ scale: 1, x: 0 }}
              className="size-full object-cover [object-position:var(--hero-mobile-position)]"
              fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
              initial={{
                scale: prefersReducedMotion ? 1 : 1.025,
                x: prefersReducedMotion ? 0 : direction * 6,
              }}
              src={activeImage}
              style={
                {
                  '--hero-mobile-position': activeSlide.mobileObjectPosition,
                } as CSSProperties
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.68,
                ease: transitionEase,
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(16_17_15/0.05)_18%,transparent_42%,rgb(16_17_15/0.9)_100%)]" />
            <div className="pointer-events-none absolute inset-x-5 bottom-12 z-10 max-w-[20rem] text-white xs:bottom-14">
              <p className="text-[0.62rem] font-bold tracking-[0.16em] text-white/74 uppercase">
                {activeSlide.product.catalogueName}
              </p>
              <h1 className="mt-2 font-display text-[2.45rem] leading-[0.9] font-medium tracking-[-0.035em] xs:text-[2.7rem]">
                {activeSlide.headline}
              </h1>
              <p className="mt-2.5 hidden max-w-[18rem] text-[0.78rem] leading-5 text-white/78 xs:block">
                {activeSlide.copy}
              </p>
              <span className="mt-3 inline-flex min-h-11 items-center gap-2 border-b border-white/70 text-xs font-bold tracking-[0.08em] uppercase xs:mt-4">
                {activeSlide.cta}
                <ArrowRight aria-hidden="true" size={14} />
              </span>
            </div>
          </div>

          <div className="relative hidden size-full overflow-hidden bg-ovia-plum lg:block">
            <motion.img
              alt={activeSlide.product.catalogueName}
              animate={{ scale: 1, x: 0 }}
              className="absolute inset-0 size-full object-cover [object-position:var(--hero-desktop-position)]"
              fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
              initial={{
                scale: prefersReducedMotion ? 1 : 1.02,
                x: prefersReducedMotion ? 0 : direction * 8,
              }}
              src={activeImage}
              style={
                {
                  '--hero-desktop-position': activeSlide.desktopObjectPosition,
                } as CSSProperties
              }
              transition={{
                duration: prefersReducedMotion ? 0 : 0.72,
                ease: transitionEase,
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(16_17_15/0.88)_0%,rgb(16_17_15/0.64)_34%,rgb(16_17_15/0.08)_72%)]" />
            <div className="relative mx-auto flex size-full w-full max-w-360 items-center px-8 text-white">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 max-w-lg"
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 12,
                }}
                transition={{
                  delay: prefersReducedMotion ? 0 : 0.12,
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: transitionEase,
                }}
              >
                <p className="text-[0.67rem] font-bold tracking-[0.18em] text-ovia-logo uppercase">
                  {activeSlide.product.catalogueName}
                </p>
                <h1 className="mt-5 max-w-[10ch] font-display text-6xl leading-[0.9] font-medium xl:text-7xl">
                  {activeSlide.headline}
                </h1>
                <p className="mt-7 max-w-sm text-base leading-7 text-white/72">
                  {activeSlide.copy}
                </p>
                <span className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-ovia-logo text-xs font-bold tracking-[0.1em] uppercase">
                  {activeSlide.cta}
                  <ArrowRight aria-hidden="true" size={15} />
                </span>
              </motion.div>
            </div>
          </div>

          <Link
            aria-label={`View ${activeSlide.product.catalogueName}`}
            className="absolute inset-0 z-20 cursor-pointer focus-visible:outline-0"
            data-testid="hero-slide-link"
            onClick={(event) => {
              if (blockSlideClick.current) event.preventDefault()
              else setHasUserInteracted(true)
            }}
            to={`/product/${activeSlide.product.slug}`}
          >
            <span className="sr-only">View {activeSlide.product.catalogueName}</span>
          </Link>
        </motion.article>
      </AnimatePresence>

      <div
        aria-label="Choose featured slide"
        className="absolute bottom-2.5 left-4 z-30 flex items-center gap-1 lg:bottom-8 lg:left-[clamp(3rem,6vw,7.5rem)]"
        role="tablist"
      >
        {slides.map((slide, index) => {
          const selected = activeIndex === index
          return (
            <button
              aria-label={`Show slide ${index + 1}: ${slide.headline}`}
              aria-selected={selected}
              className="group flex min-h-11 min-w-8 items-center justify-center"
              data-testid={`hero-indicator-${index}`}
              key={slide.product.id}
              onClick={() => showSlide(index, index > activeIndex ? 1 : -1)}
              role="tab"
              type="button"
            >
              <span
                className={classNames(
                  'h-0.5 transition-[width,background-color] duration-300',
                  selected
                    ? 'w-8 bg-white'
                    : 'w-3 bg-white/38 group-hover:bg-white/70',
                )}
              />
            </button>
          )
        })}
      </div>

      <div className="absolute right-8 bottom-8 z-30 hidden items-center gap-2 lg:flex">
        <button
          aria-label="Previous hero slide"
          className="flex size-11 items-center justify-center rounded-full border border-white/28 bg-ovia-plum/20 text-white backdrop-blur-md transition-colors hover:bg-ovia-plum/42"
          data-testid="hero-previous"
          onClick={showPrevious}
          type="button"
        >
          <ArrowLeft aria-hidden="true" size={17} />
        </button>
        <button
          aria-label="Next hero slide"
          className="flex size-11 items-center justify-center rounded-full bg-white text-ovia-plum transition-colors hover:bg-ovia-ivory"
          data-testid="hero-next"
          onClick={showNext}
          type="button"
        >
          <ArrowRight aria-hidden="true" size={17} />
        </button>
      </div>
    </section>
  )
}
