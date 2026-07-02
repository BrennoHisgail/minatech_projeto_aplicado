// Seção de depoimentos de alunas do programa
// Exibe dois cards horizontais com foto e texto, alternando o lado da foto

import { useState } from 'react'
import vitoriaImg     from '../assets/vitoria_da_rosa.png'
import mariaEduardaImg from '../assets/maria_eduarda.png'

const DEPOIMENTOS = [
  {
    nome:  'Vitória da Rosa',
    ano:   '2022 e 2023',
    foto:  vitoriaImg,
    texto: 'Minha jornada no Minatech, em 2022 e 2023, foi uma grande fonte de inspiração e crescimento. O programa me ajudou a descobrir caminhos na Engenharia e Tecnologia, contribuindo para minha formação em Engenharia de Software e para meu desenvolvimento profissional. Sou muito grata ao Minatech pelas oportunidades e por incentivar mulheres a irem cada vez mais longe.',
    reverse: false,
  },
  {
    nome:  'Maria Eduarda',
    ano:   '2020 e 2022',
    foto:  mariaEduardaImg,
    texto: 'Participar do projeto entre 2020 e 2022 transformou minha visão de futuro e fortaleceu minha confiança na programação. Hoje, cursando Ciência da Computação, reconheço o quanto essa experiência contribuiu para minha base acadêmica e profissional. Sou grata por iniciativas como essa, que incentivam mais mulheres a conquistarem espaço e crescerem na tecnologia.',
    reverse: true,
  },
]

export default function TestimonialsSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="testimonials-section">
      <div className="container text-center">

        <button
          className="testimonials-trigger"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          O que as alunas <span className="testimonials-trigger-highlight">dizem?</span>
          <i className={`bi bi-chevron-down ms-2 acolhe-chevron${open ? ' open' : ''}`} />
        </button>

        <div className={`acolhe-expand${open ? ' open' : ''}`}>
          <div className="testimonials-list mt-4">
            {DEPOIMENTOS.map((d, i) => (
              <div className={`testimonial-row${d.reverse ? ' testimonial-row--reverse' : ''}`} key={i}>

                <div className="testimonial-foto-wrap">
                  <img src={d.foto} alt={d.nome} className="testimonial-foto" />
                </div>

                <div className="testimonial-content">
                  <span className="testimonial-nome">{d.nome}</span>
                  <i className="bi bi-quote testimonial-quote" />
                  <p className="testimonial-texto">{d.texto}</p>
                  <span className="testimonial-ano">Participante {d.ano}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
