import { useState } from 'react'

export default function DonationForm() {
  const [form, setForm]       = useState({ nome: '', email: '' })
  const [copied, setCopied]   = useState(false)
  const [done, setDone]       = useState(false)

  const change  = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit  = (e) => { e.preventDefault(); setDone(true) }

  const copyPix = () => {
    navigator.clipboard.writeText('minatech.floripa@gmail.com')
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
  }

  /* Tela de agradecimento */
  if (done) return (
    <div className="donation-form-wrap text-center py-5">
      <i className="bi bi-heart-fill" style={{ fontSize: 64, color: 'var(--primary)' }} />
      <h3 className="mt-3 fw-bold">Obrigada pela sua doação!</h3>
      <p className="text-muted">Logo entraremos em contato.</p>
    </div>
  )

  return (
    <div className="donation-form-wrap">
      <form onSubmit={submit}>

        {/* Dados pessoais */}
        <p className="field-section-label">Dados pessoais</p>

        <div className="mb-3">
          <label className="form-label fw-semibold" htmlFor="doador-nome">
            Nome completo
          </label>
          <input id="doador-nome" name="nome" type="text"
            className="form-control" placeholder="Digite seu nome completo"
            value={form.nome} onChange={change} />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold" htmlFor="doador-email">
            Email de contato
          </label>
          <input id="doador-email" name="email" type="email"
            className="form-control" placeholder="SeuEmail@gmail.com"
            value={form.email} onChange={change} />
        </div>

        {/* PIX */}
        <p className="field-section-label">PIX</p>

        <div className="pix-block">
          <div className="qr-placeholder">
            <span>QR Code PIX</span>
          </div>

          <button type="button" className="btn-copy-link" onClick={copyPix}>
            <i className={`bi ${copied ? 'bi-check-lg' : 'bi-link-45deg'} me-1`} />
            {copied ? 'Copiado!' : 'Copiar link'}
          </button>
        </div>

        <button type="submit" className="btn btn-pink w-100 mt-3 py-3">
          Concluir doação
        </button>

      </form>
    </div>
  )
}
