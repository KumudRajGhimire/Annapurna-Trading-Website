import { useEffect, useRef, useState } from 'react'

const featuredProducts = [
  {
    name: 'NH4 Copier Paper A4',
    detail:
      'Main copier range marketed and distributed by Annapurna Trading Pvt. Ltd.',
    image: '/images/mainpic.jpeg',
    specs: ['70 GSM', '75 GSM', '80 GSM', 'A4 size'],
  },
  {
    name: 'NH4 80 GSM Copier',
    detail: 'Premium A4 copier paper for office, school, and reseller supply.',
    image: '/images/greennh4.jpeg',
    specs: ['80 GSM', 'A4 size', 'Excellent quality'],
  },
  {
    name: 'NH4 75 GSM Copier',
    detail: 'High-demand copier paper line for regular photocopy and printing.',
    image: '/images/rednh4.jpeg',
    specs: ['75 GSM', 'A4 size', 'Excellent quality'],
  },
  {
    name: 'NH4 70 GSM Copier',
    detail: 'Fine print copier paper available for bulk office requirements.',
    image: '/images/70gsmjpeg',
    specs: ['70 GSM', 'A3 available', 'Fine print'],
  },
  {
    name: 'Mbest Copier Paper',
    detail: 'Premium white copy paper with A5 and FS size availability.',
    image: '/images/mbestpaper.jpeg',
    specs: ['75 GSM', '80 GSM', 'A5 size', 'FS size'],
  },
  {
    name: 'Bindals Maplitho Paper',
    detail:
      'Bindals Britewite, Classic Maplitho, and Ace Maplitho paper ranges.',
    image: '/images/mainpicnh4.jpeg',
    specs: ['57-100 GSM', '64-140 GSM', 'Writing & printing'],
  },
  {
    name: 'Duplex Board Paper',
    detail:
      'Deevya Shakti India Limited duplex board paper for packaging and covers.',
    image: '/images/officepic.jpeg',
    specs: ['200-350 GSM', 'Board paper', 'Packaging'],
  },
  {
    name: 'FBB, Colour & Nepali Paper',
    detail:
      'Emami FBB board plus pink, yellow, green, blue, news print, and deluxe paper.',
    image: '/images/bluerednh4.jpeg',
    specs: ['190 GSM', '230 GSM', '250 GSM', '270 GSM'],
  },
  {
    name: 'NH4 Green Pack Stock',
    detail:
      'Available stock for copier paper resellers, institutions, and regular office supply.',
    image: '/images/greennh4-1.jpeg',
    specs: ['80 GSM', 'A4 size', 'Bulk supply'],
  },
  {
    name: 'NH4 Red Pack Stock',
    detail:
      'Packed copier paper stock suitable for wholesale and high-volume printing needs.',
    image: '/images/rednh4-1.jpeg',
    specs: ['75 GSM', 'A4 size', 'Wholesale'],
  },
]

function DotLoader() {
  return (
    <span className="dot-loader" aria-label="Loading image">
      <span />
      <span />
      <span />
    </span>
  )
}

function ProductCard({ product }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <article className="product-card">
      <div className="product-card__media">
        {!isLoaded && <DotLoader />}
        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? 'is-loaded' : ''}
        />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.detail}</p>
        <div className="spec-list" aria-label={`${product.name} specifications`}>
          {product.specs.map((spec) => (
            <span key={spec}>{spec}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProductsSection() {
  const [isInteracting, setIsInteracting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, startScrollLeft: 0 })
  const pauseTimerRef = useRef(null)
  const duplicatedProducts = [...featuredProducts, ...featuredProducts]

  useEffect(() => {
    const carousel = carouselRef.current

    if (!carousel) {
      return undefined
    }

    let direction = 1
    let frameId = null

    const tick = () => {
      if (!isInteracting && !isHovered && carousel.scrollWidth > carousel.clientWidth) {
        const maxScroll = carousel.scrollWidth / 2
        const nextScroll = carousel.scrollLeft + direction * 0.7

        if (nextScroll >= maxScroll) {
          direction = -1
          carousel.scrollLeft = maxScroll
        } else if (nextScroll <= 0) {
          direction = 1
          carousel.scrollLeft = 0
        } else {
          carousel.scrollLeft = nextScroll
        }
      }

      frameId = window.requestAnimationFrame(tick)
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [isHovered, isInteracting])

  const pauseAutoScroll = () => {
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current)
    }

    const isMobileViewport = window.innerWidth <= 768

    if (!isMobileViewport) {
      setIsInteracting(false)
      return
    }

    setIsInteracting(true)
    pauseTimerRef.current = setTimeout(() => {
      setIsInteracting(false)
    }, 2000)
  }

  const handlePointerDown = (event) => {
    const carousel = carouselRef.current

    if (!carousel) {
      return
    }

    const clientX = event.touches ? event.touches[0].clientX : event.clientX

    dragRef.current = {
      active: true,
      startX: clientX,
      startScrollLeft: carousel.scrollLeft,
    }

    setIsInteracting(true)
  }

  const handlePointerMove = (event) => {
    const carousel = carouselRef.current

    if (!carousel || !dragRef.current.active) {
      return
    }

    const clientX = event.touches ? event.touches[0].clientX : event.clientX
    const delta = clientX - dragRef.current.startX
    carousel.scrollLeft = dragRef.current.startScrollLeft - delta
  }

  const finishDragging = () => {
    dragRef.current.active = false
    pauseAutoScroll()
  }

  return (
    <section className="section products-section" id="products">
      <div className="section-heading">
        <p className="eyebrow">Featured products</p>
        <h2>Paper and board lines ready for bulk supply.</h2>
        <p>
          Product names, GSM ranges, and images are arranged from the supplied
          company details and Bindals technical sheet.
        </p>
      </div>

      <div
        ref={carouselRef}
        className={`product-carousel ${isInteracting || isHovered ? 'is-paused' : ''}`}
        aria-label="Featured products carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDragging}
        onPointerLeave={finishDragging}
        onPointerCancel={finishDragging}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={finishDragging}
        onTouchCancel={finishDragging}
      >
        <div className="product-carousel__track">
          {duplicatedProducts.map((product, index) => (
            <ProductCard product={product} key={`${product.name}-${index}`} />
          ))}
        </div>
      </div>

    </section>
  )
}

export default ProductsSection
