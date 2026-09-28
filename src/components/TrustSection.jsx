const directors = [
  {
    name: 'Salik Ram Baskota',
    role: 'Managing Director',
    image: '/salik-clean.png',
  },
  {
    name: 'Sangam Regmi',
    role: 'Director',
    image: '/sangam-clean.png',
  },
  {
    name: 'Sanjog Regmi',
    role: 'Director',
    image: '/sanjog-clean.png',
  },
]

function TrustSection() {
  return (
    <section className="section trust-section" id="directors">
      <div className="section-heading">
        <p className="eyebrow">Leadership</p>
        <h2>Managed by an experienced paper trading team.</h2>
      </div>
      <div className="director-grid">
        {directors.map((director) => (
          <article className="director-card" key={director.name}>
            <div className="director-photo">
              <img src={director.image} alt={director.name} />
            </div>
            <div className="director-info">
              <span>{director.role}</span>
              <strong>{director.name}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrustSection
