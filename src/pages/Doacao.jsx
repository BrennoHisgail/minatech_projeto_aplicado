import Navbar       from '../components/Navbar'
import DonationForm from '../components/DonationForm'
import Footer       from '../components/Footer'

export default function Doacao() {
  return (
    <>
      <Navbar />

      <section className="donation-section">
        <div className="container">

          <h1>
            Preencha as informações para se tornar um{' '}
            <em>patrocinador.</em>
          </h1>
          <div className="divider-pink" />

          <DonationForm />

        </div>
      </section>

      <Footer />
    </>
  )
}
