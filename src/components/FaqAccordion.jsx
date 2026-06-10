import { useState } from 'react'

const FAQS = [
  {
    question: 'É possível ganhar um certificado?',
    answer:   'Sim! Ao concluir a Jornada Minatech você recebe um certificado digital de 125 horas e também o certificado da parceira Jornada Microsoft. Basta ter frequência mínima de 75% nas atividades.',
  },
  {
    question: 'Onde será a jornada Minatech?',
    answer:   'A jornada será realizada em Menino, Florianópolis, Blumenau, Joinville e Chapecó. Elas se uniram para fazer a Jornada Minatech acontecer em diversas regiões de Santa Catarina.',
  },
  {
    question: 'Formas de autorização de responsáveis?',
    answer:   'Sim, se você tem menos de 18 anos, é necessário que um responsável confirme sua autorização. O termo será enviado por e-mail após a inscrição e deverá ser devolvido assinado em até 5 dias úteis.',
  },
  {
    question: 'Como é organizada a data das aulas no Minatech?',
    answer:   'Todas as atividades são adicionadas em um grupo de WhatsApp. No grupo você tem acesso às notificações e ao conteúdo de todas as atividades com antecedência.',
  },
  {
    question: 'O programa tem algum custo?',
    answer:   'Não! A Jornada Minatech é 100% gratuita. Nosso objetivo é democratizar o acesso à tecnologia e engenharia para meninas de escolas públicas.',
  },
  {
    question: 'Quem pode participar?',
    answer:   'O programa é voltado para meninas e pessoas que se identificam como mulheres, com idade entre 12 e 18 anos, matriculadas em escolas públicas da Grande Florianópolis.',
  },
]

export default function FaqAccordion() {
  /* Índice do item aberto; -1 = nenhum */
  const [open, setOpen] = useState(0)

  const toggle = (i) => setOpen(open === i ? -1 : i)

  return (
    <div className="accordion accordion-minatech">
      {FAQS.map((faq, i) => (
        <div className="accordion-item" key={i}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${open !== i ? 'collapsed' : ''}`}
              type="button"
              onClick={() => toggle(i)}
            >
              {faq.question}
            </button>
          </h2>

          {/* Exibe o corpo apenas quando aberto (React controla, sem Bootstrap JS) */}
          {open === i && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">{faq.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
