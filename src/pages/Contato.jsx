import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const INFOS = [
  {
    icon:  'bi-geo-alt-fill',
    label: 'Localização',
    value: 'Florianópolis, SC',
    href:  null,
  },
  {
    icon:  'bi-envelope-fill',
    label: 'E-mail',
    value: 'minatech.floripa@gmail.com',
    href:  'mailto:minatech.floripa@gmail.com',
  },
  {
    icon:  'bi-whatsapp',
    label: 'WhatsApp',
    value: '(48) 99137-5245',
    href:  'https://wa.me/5548991375245',
  },
  {
    icon:  'bi-instagram',
    label: 'Instagram',
    value: '@minatech.floripa',
    href:  'https://instagram.com/minatech.floripa',
  },
]

export default function Contato() {
  return (
    <>
      <Navbar />

      <section className="contato-page">
        <div className="container">

          <div className="contato-header">
            <h1>Contato</h1>
            <p className="contato-lead">
              Quer saber mais sobre o MinaTech, tem alguma dúvida ou quer ser parceira?
              Fale com a gente!
            </p>
          </div>

          <div className="row justify-content-center g-4">
            {INFOS.map((item, i) => (
              <div className="col-12 col-sm-6 col-md-3" key={i}>
                <div className="contato-card">
                  <div className="contato-card-icon">
                    <i className={`bi ${item.icon}`} />
                  </div>
                  <p className="contato-card-label">{item.label}</p>
                  {item.href ? (
                    <a className="contato-card-value" href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p className="contato-card-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
