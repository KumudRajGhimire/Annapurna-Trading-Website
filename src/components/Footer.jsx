function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <a className="brand brand--footer" href="#home">
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
        <p>
          Suppliers of Writing & Printing Paper from Kathmandu, Nepal.
        </p>
      </div>
      <div>
        <h2>Contact</h2>
        <address>
          <a
            href="https://maps.google.com/?q=27.692194,85.276146"
            target="_blank"
            rel="noreferrer"
          >
            Red Cross road, Soalteemode
            <br />
            Kathmandu, Nepal
          </a>
          <br />
          <a href="tel:+977015670271">977-01-5670271</a>
          <br />
          <a href="mailto:atpl.nepal@gmail.com">atpl.nepal@gmail.com</a>
        </address>
      </div>
      <div>
        <h2>Find us</h2>
        <div className="map-frame">
          <span className="dot-loader map-loader" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <iframe
            title="Annapurna Trading Pvt. Ltd. location"
            src="https://www.google.com/maps?q=27.692194,85.276146&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-click-layer"
            href="https://maps.google.com/?q=27.692194,85.276146"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Annapurna Trading location in Google Maps"
          />
        </div>
        <a
          className="map-link"
          href="https://maps.google.com/?q=27.692194,85.276146"
          target="_blank"
          rel="noreferrer"
        >
          Open location in Google Maps
        </a>
      </div>
    </footer>
  )
}

export default Footer
