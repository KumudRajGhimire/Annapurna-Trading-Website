import { useMemo, useState } from 'react'

const emailAddress = 'atpl.nepal@gmail.com'

function GetQuoteSection() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [details, setDetails] = useState('')

  const mailtoLink = useMemo(() => {
    const subject = encodeURIComponent('Quote request from website')
    const body = encodeURIComponent(
      [
        'Hello Annapurna Trading,',
        '',
        'I would like to request a quote for the following requirement:',
        '',
        `Name: ${name || 'N/A'}`,
        `Company: ${company || 'N/A'}`,
        `Requirements: ${details || 'Please share more details.'}`,
        '',
        'Thank you.',
      ].join('\n')
    )

    return `mailto:${emailAddress}?subject=${subject}&body=${body}`
  }, [company, details, name])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = mailtoLink
  }

  return (
    <section className="section quote-section" id="quote">
      <div className="section-heading">
        <p className="eyebrow">Get quote</p>
        <h2>Tell us what you need and we’ll help you with the right paper solution.</h2>
      </div>

      <div className="quote-panel">
        <div className="quote-copy">
          <p>
            Share your paper requirement, quantity, size, or timing and we will get back with
            a quick estimate and product recommendation.
          </p>

          <ul className="quote-points">
            <li>Need pricing for office paper, printing stock, or packaging supply?</li>
            <li>Tell us your quantity, paper type, and expected delivery timeline.</li>
            <li>We will respond with the most suitable options for your business.</li>
          </ul>

          <a className="button button--primary" href={mailtoLink}>
            Email directly
          </a>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form__field">
            <label htmlFor="quote-name">Your name</label>
            <input
              id="quote-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
            />
          </div>

          <div className="quote-form__field">
            <label htmlFor="quote-company">Company</label>
            <input
              id="quote-company"
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Business or organisation name"
            />
          </div>

          <div className="quote-form__field">
            <label htmlFor="quote-message">Requirement details</label>
            <textarea
              id="quote-message"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Example: 1200 reams of A4 offset paper, 70 GSM, required within 2 weeks."
            />
          </div>

          <div className="quote-actions">
            <button type="submit" className="button button--primary">
              Send enquiry
            </button>
            <a className="button button--secondary" href={mailtoLink}>
              Write to email
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default GetQuoteSection
