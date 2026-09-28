import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className={`navbar ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
      <div className="navbar__row">
        <a
          className="brand"
          href="#home"
          aria-label="Annapurna Trading home"
          onClick={closeMenu}
        >
          <img
            className="brand__logo"
            src="/images/annapurna-logo.png"
            alt="Annapurna Trading logo"
          />
          <span>
            <strong>ANNAPURNA TRADING</strong>
            <small>Pvt. Ltd.</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="nav-menu">
        <div className="nav-links">
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#arrivals" onClick={closeMenu}>New Arrivals</a>
          <a href="#directors" onClick={closeMenu}>Directors</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <a className="nav-action" href="#contact" onClick={closeMenu}>
          Get Quote
        </a>
      </div>
    </nav>
  )
}

export default Navbar
