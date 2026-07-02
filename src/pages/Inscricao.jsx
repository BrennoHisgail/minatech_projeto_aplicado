import Navbar               from '../components/Navbar'
import MultiStepForm        from '../components/MultiStepForm'
import TestimonialsSection  from '../components/TestimonialsSection'
import Footer               from '../components/Footer'

export default function Inscricao() {
  return (
    <>
      <Navbar />

      {/* Cabeçalho da página */}
      <div className="form-page-header">
        <div className="container">
          <p>
            Preencha o formulário abaixo para garantir{' '}
            <em>sua vaga.</em>
          </p>
        </div>
      </div>

      {/* Formulário multi-etapas */}
      <div className="form-layout">
        <div className="container">
          <MultiStepForm />
        </div>
      </div>

      <TestimonialsSection />

      <Footer />
    </>
  )
}
