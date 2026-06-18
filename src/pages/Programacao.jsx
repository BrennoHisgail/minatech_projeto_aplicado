import Navbar          from '../components/Navbar'
import EventCard        from '../components/EventCard'
import ScheduleBox      from '../components/ScheduleBox'
import PastEventCard    from '../components/PastEventCard'
import TestimonialCard  from '../components/TestimonialCard'
import Footer           from '../components/Footer'

import pastEvent1 from '../assets/ImagemTurma1.png'
import pastEvent2 from '../assets/ImagemTurma5.png'
import vitoriaImg  from '../assets/ImagemMulherCodigo.png'
import mariaImg    from '../assets/ImagemTurma.png'
import pastEvent3 from '../assets/ImagemTurma2.png'
import pastEvent4 from '../assets/ImagemTurmaColaboradores.png'
import pastEvent5 from '../assets/ImagemTurma4.png'
import pastEvent6 from '../assets/ImagemColaboradores.png'
import pastEvent7 from '../assets/ImagemColaboradores1.png'
/* Dados dos eventos futuros */
const EVENTS = [
  { date: 'Sábado, 14 de junho de 2025',  badge: 'HOJE',  time: '09h00 — 12h00', title: 'Oficina de Lógica de Programação', location: 'UFSC — Sala 101, Bloco A', isOnline: false },
  { date: 'Sábado, 28 de junho de 2025',  badge: 'ZOOM',  time: '10h00 — 12h00', title: 'Talk — Mulheres na Engenharia',    location: 'Online via Zoom',             isOnline: true  },
  { date: 'Sábado, 12 de julho de 2025',  badge: null,    time: '09h00 — 13h00', title: 'Visita Técnica — Lab de Robótica', location: 'SENAI Florianópolis',         isOnline: false },
  { date: 'Sábado, 26 de julho de 2025',  badge: null,    time: '14h00 — 17h00', title: 'Workshop de Empreendedorismo',     location: 'Instituto de Inovação Corali', isOnline: false },
]

/* Agenda detalhada do sábado em destaque */
const SCHEDULE = [
  { time: '08h30', title: 'Credenciamento',              desc: 'Recepção e entrega de materiais'     },
  { time: '09h00', title: 'Abertura oficial',            desc: 'Boas-vindas pela coordenação'        },
  { time: '09h30', title: 'Oficina: Lógica de Programação', desc: 'Instruída por mentoras da área de TI' },
  { time: '11h00', title: 'Pausa para lanche',           desc: ''                                    },
  { time: '11h20', title: 'Talk: Trajetórias em STEAM',  desc: 'Depoimentos de profissionais'        },
  { time: '12h00', title: 'Encerramento',                desc: ''                                    },
]

/* Eventos passados */
const PAST = [
  {
    img: pastEvent1,
    text: 'Nossa imersão no Laboratório de Química da UFSC, conduzida pelas professoras Bomnina e Gisele, foi uma vitrine sobre a versatilidade da Engenharia Química. Além de explorarmos as áreas de atuação, vivenciamos na prática o tratamento de efluentes.',
  },
  {
    img: pastEvent2,
    text: 'Com a participação especial do Time Curie, do Senai, e da professora Daniela Szruk, graduandas e graduadas da UFSC compartilharam experiências mostrando caminhos em trajetória e conhecimentos técnicos avançados nas áreas de engenharia.',
  },
  {
    img: pastEvent3,
    text: 'Roda de conversa entre as participantes da Jornada Minatech, um espaço de troca de experiências e fortalecimento da rede entre as meninas do programa.',
  },
  {
    img: pastEvent4,
    text: 'Encontro de integração reunindo participantes de diferentes turmas em um momento de celebração e aprendizado coletivo.',
  },
  {
    img: pastEvent5,
    text: 'Momento de descontração e energia durante uma das dinâmicas em grupo da Jornada Minatech.',
  },
  {
    img: pastEvent6,
    text: 'Abertura oficial de uma das edições, com apresentação da proposta do programa às novas participantes pela equipe organizadora.',
  },
  {
    img: pastEvent7,
    text: 'Talk sobre trajetórias profissionais, com participantes atentas às experiências compartilhadas por profissionais da área de tecnologia e engenharia.',
  },
]

/* Depoimentos */
const TESTIMONIALS = [
  {
    img: vitoriaImg,
    name: 'Vitória da Rosa',
    text: 'Minha jornada no Minatech, em 2022 e 2023, foi uma grande fonte de inspiração e crescimento. O programa me ajudou a descobrir caminhos na Engenharia e Tecnologia, mostrando que elas têm capacidade e que essas profissões não são só para meninas.',
  },
  {
    img: mariaImg,
    name: 'Maria Eduarde',
    text: 'Participar do projeto entre 2020 e 2022 transformou minha visão de futuro e fortaleceu minha confiança na programação. Hoje, cursando Ciência da Computação, reconheço o quanto essa experiência contribuiu para minha base acadêmica e profissional.',
  },
]

export default function Programacao() {
  return (
    <>
      <Navbar />

      {/* Programação atual */}
      <section className="prog-section">
        <div className="container">
          <h1>Programação</h1>
          <p className="prog-sub">Data de todos os eventos</p>
          <div className="divider-pink" />

          <div className="row g-4 mt-2">
            {/* Lista de eventos */}
            <div className="col-lg-7">
              {EVENTS.map((ev, i) => (
                <EventCard key={i} {...ev} />
              ))}
            </div>

            {/* Agenda em destaque */}
            <div className="col-lg-5">
              <ScheduleBox title="Sábado — 14/06" items={SCHEDULE} />
            </div>
          </div>
        </div>
      </section>

      {/* Programações passadas */}
      <section className="past-events">
        <div className="container">
          <h2>Programações Passadas</h2>
          <div className="divider-pink" />
          <div className="row g-4 mt-2">
            {PAST.map((ev, i) => (
              <div className="col-md-6" key={i}>
                <PastEventCard {...ev} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="testimonials">
        <div className="container">
          <h2>Depoimentos de ex-alunas</h2>
          <div className="divider-pink" />
          <div className="mt-4">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
