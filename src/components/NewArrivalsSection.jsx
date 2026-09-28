const arrivals = [
  'Colour paper: Pink, Yellow, Green, Blue',
  'Nepali paper',
  'News print',
  'Deluxe paper',
]

function NewArrivalsSection() {
  return (
    <section className="section mission-section" id="arrivals">
      <div className="mission-copy">
        <p className="eyebrow">Mission & vision</p>
        <h2>Reliable supply, ethical trading, and long-term customer trust.</h2>
        <p>
          We aim to meet customer demand with consistent supply, regular
          quality, and responsible business values. Our approach balances market
          needs, national interest, and trading principles.
        </p>
        <div className="arrival-list" aria-label="New arrivals">
          <h3>New arrivals</h3>
          <ul>
            {arrivals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="award-panel">
        <img src="/images/awards.jpeg" alt="Awards and recognition" />
        <div className="award-panel__caption">
          <span>Awards & recognition</span>
          <strong>Trusted by partners through consistent service.</strong>
        </div>
      </div>
    </section>
  )
}

export default NewArrivalsSection
