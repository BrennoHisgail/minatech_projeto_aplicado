import { useState } from 'react'
import { Link } from 'react-router-dom'

const PIX = 'minatech.floripa@gmail.com'

export default function DonationSection() {
  const [copied, setCopied] = useState(false)

  const copyPix = () => {
    navigator.clipboard.writeText(PIX).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <section className="donation-home-section">
      <div className="container">
        <div className="donation-home-block">

          <div className="donation-home-block-text">
            <p className="donation-home-eyebrow">Faça a diferença</p>
            <h2 className="donation-home-title">
              Apoie o <span>MinaTech</span>
            </h2>
            <p className="donation-home-desc">
              Sua contribuição mantém o programa gratuito e abre portas
              para mais meninas na tecnologia.
            </p>
            <Link to="/doacao" className="btn btn-pink mt-2">
              Quero apoiar <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>

          <div className="donation-home-block-pix">
            <p className="donation-home-card-label">Doe agora via PIX</p>
            <div className="donation-pix-key">
              <i className="bi bi-key" />
              <span>{PIX}</span>
            </div>
            <button className="btn-copy-pix" onClick={copyPix}>
              <i className={`bi ${copied ? 'bi-check-lg' : 'bi-clipboard'} me-2`} />
              {copied ? 'Chave copiada!' : 'Copiar chave PIX'}
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
