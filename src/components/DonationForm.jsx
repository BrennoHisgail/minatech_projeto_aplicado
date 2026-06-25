// Formulário da página Doação
// Coleta nome e email do doador, salva no Supabase e mostra o PIX pra pagamento

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function DonationForm() {
  const [form, setForm]       = useState({ nome: '', email: '' })

  // controla se a chave PIX foi copiada
  const [copied, setCopied]   = useState(false)

  // vira true depois que o formulário é enviado com sucesso
  const [done, setDone]       = useState(false)

  // controla o estado de carregamento enquanto salva no banco
  const [loading, setLoading] = useState(false)

  // guarda mensagem de erro caso o envio falhe
  const [erro, setErro]       = useState(null)

  // atualiza o campo certo no objeto form quando o usuário digita
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // envia os dados do doador pro Supabase quando o formulário é submetido
  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErro(null)

    const { error } = await supabase.from('doacoes').insert({
      nome:  form.nome,
      email: form.email,
    })

    setLoading(false)
    if (error) { setErro('Erro ao registrar doação. Tente novamente.'); return }
    setDone(true)
  }

  // copia a chave PIX pro clipboard e muda o texto do botão por 2.5 segundos
  const copyPix = () => {
    navigator.clipboard.writeText('minatech.floripa@gmail.com')
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
  }

  /* tela de agradecimento que aparece depois que o formulário é enviado */
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

        {/* campos de nome e email do doador */}
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

        {/* área do PIX com QR code e botão de copiar a chave */}
        <p className="field-section-label">PIX</p>

        <div className="pix-block">
          <div className="qr-placeholder">
            <span>QR Code PIX</span>
          </div>

          {/* botão muda de texto quando a chave é copiada */}
          <button type="button" className="btn-copy-link" onClick={copyPix}>
            <i className={`bi ${copied ? 'bi-check-lg' : 'bi-link-45deg'} me-1`} />
            {copied ? 'Copiado!' : 'Copiar link'}
          </button>
        </div>

        {/* mostra mensagem de erro se der problema ao salvar */}
        {erro && <p className="text-danger mt-2 mb-0" style={{ fontSize: 14 }}>{erro}</p>}

        {/* botão de envio — desabilitado e com spinner enquanto carrega */}
        <button type="submit" className="btn btn-pink w-100 mt-3 py-3" disabled={loading}>
          {loading
            ? <><span className="spinner-border spinner-border-sm me-2" />Enviando...</>
            : 'Concluir doação'
          }
        </button>

      </form>
    </div>
  )
}
