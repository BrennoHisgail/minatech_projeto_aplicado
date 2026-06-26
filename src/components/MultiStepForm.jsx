import { useState } from 'react'
import { supabase } from '../lib/supabase'

const STEPS_ESTUDANTE = [
  { label: 'Dados pessoais'         },
  { label: 'Contato'                },
  { label: 'Diversidade e inclusão' },
  { label: 'Situação familiar'      },
  { label: 'Acesso digital'         },
]

const STEPS_VOLUNTARIA = [
  { label: 'Dados pessoais'   },
  { label: 'Como contribuir'  },
]

export default function MultiStepForm() {
  const [tipo, setTipo]       = useState(null)
  const [step, setStep]       = useState(0)
  const [form, setForm]       = useState({})
  const [done, setDone]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [erro, setErro]       = useState(null)

  const STEPS = tipo === 'voluntaria' ? STEPS_VOLUNTARIA : STEPS_ESTUDANTE

  const change = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const changeNenhum = (e) => {
    if (e.target.checked) {
      setForm(f => ({ ...f, nenhum: true, computador: null, celular: null }))
    } else {
      setForm(f => ({ ...f, nenhum: false, computador: 'Sim', celular: '1' }))
    }
  }

  const escolherTipo = (t) => {
    setTipo(t)
    setStep(0)
    setForm({})
    setErro(null)
  }

  const next = () => setStep(s => Math.min(s + 1, STEPS.length - 1))
  const prev = () => setStep(s => Math.max(s - 1, 0))

  const submit = async () => {
    setLoading(true)
    setErro(null)

    if (!supabase) {
      setErro('Formulário indisponível neste ambiente.')
      setLoading(false)
      return
    }

    let error

    if (tipo === 'estudante') {
      ;({ error } = await supabase.from('inscricoes').insert({
        nome:         form.nome,
        idade:        form.idade ? Number(form.idade) : null,
        escolaridade: form.escolaridade,
        telefone:     form.telefone,
        email:        form.email,
        genero:       form.genero,
        raca:         form.raca,
        alergia:      form.alergia,
        faixa_social: form.faixaSocial,
        num_pessoas:  form.numPessoas,
        computador:   form.nenhum ? null : (form.computador ?? 'Sim'),
        celular:      form.nenhum ? null : (form.celular   ?? '1'),
      }))
    } else {
      ;({ error } = await supabase.from('voluntarias').insert({
        nome:            form.nome,
        email:           form.email,
        telefone:        form.telefone,
        area:            form.area,
        disponibilidade: form.disponibilidade,
      }))
    }

    setLoading(false)
    if (error) { setErro('Erro ao enviar. Tente novamente.'); return }
    setDone(true)
  }

  /* Tela de sucesso */
  if (done) return (
    <div className="text-center py-5">
      <i className="bi bi-check-circle-fill" style={{ fontSize: 64, color: 'var(--primary)' }} />
      <h3 className="mt-3 fw-bold">
        {tipo === 'estudante' ? 'Inscrição realizada com sucesso!' : 'Obrigada pelo interesse em ser voluntária!'}
      </h3>
      <p className="text-muted">Em breve entraremos em contato.</p>
    </div>
  )

  /* Tela de seleção de tipo */
  if (!tipo) return (
    <div className="tipo-select">
      <p className="form-section-label mb-4">Como você quer participar?</p>
      <div className="row g-4">
        <div className="col-md-6">
          <button type="button" className="tipo-card" onClick={() => escolherTipo('estudante')}>
            <i className="bi bi-mortarboard tipo-card-icon" />
            <span className="tipo-card-title">Estudante</span>
            <span className="tipo-card-desc">Quero participar do programa como aluna</span>
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" className="tipo-card" onClick={() => escolherTipo('voluntaria')}>
            <i className="bi bi-heart tipo-card-icon" />
            <span className="tipo-card-title">Voluntária</span>
            <span className="tipo-card-desc">Quero contribuir com o programa como voluntária</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <form onSubmit={e => e.preventDefault()} id="multi-step-form">
      <div className="row g-4">

        {/* Sidebar de etapas */}
        <div className="col-lg-3">
          {/* botão para voltar à seleção */}
          <button
            type="button"
            className="btn-voltar-tipo"
            onClick={() => { setTipo(null); setStep(0); setForm({}) }}
          >
            <i className="bi bi-arrow-left me-1" />Voltar
          </button>
          <div className="steps-sidebar mt-3">
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

            {/* ── ESTUDANTE — Etapa 1: Dados pessoais ── */}
            {tipo === 'estudante' && step === 0 && (
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

            {/* ── ESTUDANTE — Etapa 2: Contato ── */}
            {tipo === 'estudante' && step === 1 && (
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

            {/* ── ESTUDANTE — Etapa 3: Diversidade e inclusão ── */}
            {tipo === 'estudante' && step === 2 && (
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

            {/* ── ESTUDANTE — Etapa 4: Situação familiar ── */}
            {tipo === 'estudante' && step === 3 && (
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

            {/* ── ESTUDANTE — Etapa 5: Acesso digital ── */}
            {tipo === 'estudante' && step === 4 && (
              <>
                <p className="form-section-label">Acesso digital</p>
                <p className="fw-semibold mb-3">Quais dispositivos tem em sua casa?</p>
                <div className="row align-items-center mb-3 g-2">
                  <div className="col-sm-7">
                    <label className={`form-label mb-0${form.nenhum ? ' text-muted' : ''}`}>
                      Computador / notebook
                    </label>
                  </div>
                  <div className="col-sm-5">
                    <select className="form-select form-select-sm" name="computador"
                      value={form.nenhum ? '' : (form.computador ?? 'Sim')}
                      onChange={change} disabled={!!form.nenhum}>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </select>
                  </div>
                </div>
                <div className="row align-items-center mb-3 g-2">
                  <div className="col-sm-7">
                    <label className={`form-label mb-0${form.nenhum ? ' text-muted' : ''}`}>
                      Celular / tablet
                    </label>
                  </div>
                  <div className="col-sm-5">
                    <select className="form-select form-select-sm" name="celular"
                      value={form.nenhum ? '' : (form.celular ?? '1')}
                      onChange={change} disabled={!!form.nenhum}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3 ou mais">3 ou mais</option>
                      <option value="Nenhum">Nenhum</option>
                    </select>
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="nenhum"
                    checked={!!form.nenhum} onChange={changeNenhum} />
                  <label className="form-check-label" htmlFor="nenhum">Nenhum dos acima</label>
                </div>
              </>
            )}

            {/* ── VOLUNTÁRIA — Etapa 1: Dados pessoais ── */}
            {tipo === 'voluntaria' && step === 0 && (
              <>
                <p className="form-section-label">Dados pessoais</p>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nome completo</label>
                  <input name="nome" type="text" className="form-control"
                    placeholder="Digite seu nome completo"
                    value={form.nome || ''} onChange={change} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">E-mail</label>
                  <input name="email" type="email" className="form-control"
                    placeholder="seuemail@gmail.com"
                    value={form.email || ''} onChange={change} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Telefone</label>
                  <input name="telefone" type="tel" className="form-control"
                    placeholder="+55 (48) 9-0000-0000"
                    value={form.telefone || ''} onChange={change} />
                </div>
              </>
            )}

            {/* ── VOLUNTÁRIA — Etapa 2: Como contribuir ── */}
            {tipo === 'voluntaria' && step === 1 && (
              <>
                <p className="form-section-label">Como você quer contribuir</p>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Área de atuação</label>
                  <select name="area" className="form-select"
                    value={form.area || ''} onChange={change}>
                    <option value="">Selecione</option>
                    <option>Tecnologia</option>
                    <option>Engenharia</option>
                    <option>Educação</option>
                    <option>Comunicação</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Disponibilidade</label>
                  <select name="disponibilidade" className="form-select"
                    value={form.disponibilidade || ''} onChange={change}>
                    <option value="">Selecione</option>
                    <option>Semanal</option>
                    <option>Quinzenal</option>
                    <option>Mensal</option>
                  </select>
                </div>
              </>
            )}

            {/* Navegação */}
            {erro && <p className="text-danger mt-3 mb-0" style={{ fontSize: 14 }}>{erro}</p>}
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
                : <button type="button" className="btn btn-pink" onClick={submit} disabled={loading}>
                    {loading
                      ? <><span className="spinner-border spinner-border-sm me-2" />Enviando...</>
                      : <>Enviar <i className="bi bi-check-lg ms-1" /></>
                    }
                  </button>
              }
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}
