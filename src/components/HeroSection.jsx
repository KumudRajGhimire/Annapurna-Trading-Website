const stats = [
  ['Since', '2016'],
  ['Product Lines', '25+'],
  ['Supply Reach', 'Nepal'],
]

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Paper importer & supplier in Nepal</p>
        <h1>Complete paper solutions for printing, publishing, and offices.</h1>
        <p className="hero-lede">
          Suppliers of writing and printing paper, copier paper, duplex board,
          FBB board, colour paper, Nepali paper, and news print with dependable
          service from Kathmandu, Nepal.
        </p>
        <div className="hero-actions">
          <a className="button button--primary" href="#products">
            View Products
          </a>
          <a className="button button--secondary" href="tel:+977015670271">
            Call 977-01-5670271
          </a>
        </div>
        <dl className="hero-stats" aria-label="Company highlights">
          {stats.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <a
          className="hero-award"
          href="#arrivals"
          aria-label="View awards and recognition"
        >
          <img src="/images/awards.jpeg" alt="" />
          <span>
            <small>Recognition</small>
            <strong>Awards & trusted partnerships</strong>
          </span>
        </a>
      </div>

      <div className="hero-media" aria-label="Product image placeholder">
        <img src="/images/mainpic.jpeg" alt="NH4 copier paper range" />
        <div className="hero-card">
          <span>Featured</span>
          <strong>NH4 A4 Copier Paper</strong>
          <small>70 GSM, 75 GSM, and 80 GSM</small>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
