import { Link } from 'react-router-dom'
import Navbar      from '../components/Navbar'
import FaqAccordion from '../components/FaqAccordion'
import Footer      from '../components/Footer'

export default function Faq() {
  return (
    <>
      <Navbar />

      <section className="faq-section">
        <div className="container" style={{ maxWidth: 760 }}>

          <h1>Perguntas mais frequentes</h1>
          <div className="divider-pink" />

          <FaqAccordion />

          {/* Seção de ação no final */}
          <div className="text-center mt-5">
            <p className="text-muted mb-3">Ainda tem dúvidas? Entre em contato!</p>
            <Link to="/inscricao" className="btn btn-pink me-2">Inscreva-se</Link>
            <a href="mailto:minatech.floripa@gmail.com" className="btn btn-outline-pink">
              Enviar e-mail
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
