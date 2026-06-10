import { useState } from 'react'

const STEPS = [
  { label: 'Dados pessoais'        },
  { label: 'Contato'               },
  { label: 'Diversidade e inclusão'},
  { label: 'Situação familiar'     },
  { label: 'Acesso digital'        },
]

export default function MultiStepForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({})
  const [done, setDone] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const next   = () => setStep(s => Math.min(s + 1, STEPS.length - 1))
  const prev   = () => setStep(s => Math.max(s - 1, 0))
  const submit = (e) => { e.preventDefault(); setDone(true) }

  /* Tela de sucesso após envio */
  if (done) return (
    <div className="text-center py-5">
      <i className="bi bi-check-circle-fill" style={{ fontSize: 64, color: 'var(--primary)' }} />
      <h3 className="mt-3 fw-bold">Inscrição realizada com sucesso!</h3>
      <p className="text-muted">Em breve entraremos em contato.</p>
    </div>
  )

  return (
    <form onSubmit={submit} id="multi-step-form">
      <div className="row g-4">

        {/* Sidebar de etapas */}
        <div className="col-lg-3">
          <div className="steps-sidebar">
            {STEPS.map((s, i) => (
              <div
                key={i}
                className={`step-item ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}
                onClick={() => setStep(i)}
              >
                <div className="step-circle">
                  {i < step ? <i className="bi bi-check" /> : i + 1}
                </div>
                <span className="step-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Painel do formulário */}
        <div className="col-lg-9">
          <div className="form-panel">

            {/* ── Etapa 1 — Dados pessoais ── */}
            {step === 0 && (
              <>
                <p className="form-section-label">Dados pessoais</p>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nome completo</label>
                  <input name="nome" type="text" className="form-control"
                    placeholder="Digite seu nome completo"
                    value={form.nome || ''} onChange={change} />
                </div>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Idade</label>
                    <input name="idade" type="number" className="form-control"
                      placeholder="Quantos anos você tem?" min="10" max="99"
                      value={form.idade || ''} onChange={change} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Escolaridade</label>
                    <select name="escolaridade" className="form-select"
                      value={form.escolaridade || ''} onChange={change}>
                      <option value="">Selecione</option>
                      <option>Ensino Fundamental — anos iniciais</option>
                      <option>Ensino Fundamental — anos finais</option>
                      <option>Ensino Médio</option>
                      <option>Ensino Superior</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {/* ── Etapa 2 — Contato ── */}
            {step === 1 && (
              <>
                <p className="form-section-label">Contato</p>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Telefone</label>
                  <input name="telefone" type="tel" className="form-control"
                    placeholder="+55 (48) 9-0000-0000"
                    value={form.telefone || ''} onChange={change} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">E-mail</label>
                  <input name="email" type="email" className="form-control"
                    placeholder="seuemail@gmail.com"
                    value={form.email || ''} onChange={change} />
                </div>
              </>
            )}

            {/* ── Etapa 3 — Diversidade e inclusão ── */}
            {step === 2 && (
              <>
                <p className="form-section-label">Diversidade e inclusão</p>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Gênero</label>
                    <select name="genero" className="form-select"
                      value={form.genero || ''} onChange={change}>
                      <option value="">Selecione</option>
                      <option>Mulher cisgênero</option>
                      <option>Mulher transgênero</option>
                      <option>Não-binário</option>
                      <option>Outro</option>
                      <option>Prefiro não dizer</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Raça</label>
                    <select name="raca" className="form-select"
                      value={form.raca || ''} onChange={change}>
                      <option value="">Selecione</option>
                      <option>Branca</option>
                      <option>Preta</option>
                      <option>Parda</option>
                      <option>Amarela</option>
                      <option>Indígena</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Possui alguma alergia?</label>
                  <input name="alergia" type="text" className="form-control"
                    placeholder="Ex.: glúten, amendoim, remédios…"
                    value={form.alergia || ''} onChange={change} />
                </div>
              </>
            )}

            {/* ── Etapa 4 — Situação familiar ── */}
            {step === 3 && (
              <>
                <p className="form-section-label">Situação familiar</p>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Faixa social da família</label>
                  <select name="faixaSocial" className="form-select"
                    value={form.faixaSocial || ''} onChange={change}>
                    <option value="">Selecione a faixa</option>
                    <option>Classe A (acima de 20 SM)</option>
                    <option>Classe B (10 a 20 SM)</option>
                    <option>Classe C (4 a 10 SM)</option>
                    <option>Classe D (2 a 4 SM)</option>
                    <option>Classe E (até 2 SM)</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Quantas pessoas moram em sua casa?</label>
                  <select name="numPessoas" className="form-select"
                    value={form.numPessoas || ''} onChange={change}>
                    <option value="">Selecione</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5 ou mais</option>
                  </select>
                </div>
              </>
            )}

            {/* ── Etapa 5 — Acesso digital ── */}
            {step === 4 && (
              <>
                <p className="form-section-label">Acesso digital</p>
                <p className="fw-semibold mb-3">Quais dispositivos tem em sua casa?</p>

                <div className="row align-items-center mb-3 g-2">
                  <div className="col-sm-7">
                    <label className="form-label mb-0">Computador / notebook</label>
                  </div>
                  <div className="col-sm-5">
                    <select className="form-select form-select-sm" name="computador"
                      value={form.computador || 'Sim'} onChange={change}>
                      <option>Sim</option>
                      <option>Não</option>
                    </select>
                  </div>
                </div>

                <div className="row align-items-center mb-3 g-2">
                  <div className="col-sm-7">
                    <label className="form-label mb-0">Celular / tablet</label>
                  </div>
                  <div className="col-sm-5">
                    <select className="form-select form-select-sm" name="celular"
                      value={form.celular || '1'} onChange={change}>
                      <option>1</option>
                      <option>2</option>
                      <option>3 ou mais</option>
                      <option>Nenhum</option>
                    </select>
                  </div>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="nenhum" name="nenhum" />
                  <label className="form-check-label" htmlFor="nenhum">Nenhum dos acima</label>
                </div>
              </>
            )}

            {/* Navegação entre etapas */}
            <div className="d-flex justify-content-between mt-4">
              {step > 0
                ? <button type="button" className="btn btn-outline-pink" onClick={prev}>
                    <i className="bi bi-arrow-left me-1" />Anterior
                  </button>
                : <span />
              }
              {step < STEPS.length - 1
                ? <button type="button" className="btn btn-pink" onClick={next}>
                    Próximo <i className="bi bi-arrow-right ms-1" />
                  </button>
                : <button type="submit" className="btn btn-pink">
                    Inscreva-se já <i className="bi bi-check-lg ms-1" />
                  </button>
              }
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}
