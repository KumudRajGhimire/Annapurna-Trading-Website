const strengths = [
  'Nationwide supply chain across Nepal',
  'Authorized distributor of Bindals Paper Mills Limited, India',
  'Importer and dealer of NH4 and Mbest copier paper',
  'Located at Kalanki, Kathmandu, Nepal',
]

function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="about-media">
        <img src="/images/officepic.jpeg" alt="Annapurna Trading office" />
      </div>
      <div className="about-copy">
        <p className="eyebrow">About us</p>
        <h2>Built for consistent supply, quality, and long-term trust.</h2>
        <p>
          Annapurna Trading Pvt. Ltd. has operated in Nepal since 2016 as a
          trading company for writing and printing paper, copier paper, and
          related paper materials. The company supports customers in Kathmandu
          and across Nepal with paper used for books, notebooks, photocopying,
          packing, and commercial printing.
        </p>
        <div className="strength-list">
          {strengths.map((strength) => (
            <span key={strength}>{strength}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
