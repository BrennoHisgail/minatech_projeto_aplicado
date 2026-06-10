/* Itens de contato do rodapé */
const CONTACTS = [
  { icon: 'bi-geo-alt-fill',   text: 'Florianópolis-SC'             },
  { icon: 'bi-google',         text: 'minatech.floripa@gmail.com'   },
  { icon: 'bi-telephone-fill', text: '(48) 99137-5245'              },
]

export default function Footer() {
  return (
    <footer className="footer-minatech" id="contato">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">

          {CONTACTS.map((c, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="footer-item">
                <i className={`bi ${c.icon}`} />
                <span>{c.text}</span>
              </div>
            </div>
          ))}

          <div className="col-6 col-md-3">
            <div className="footer-item ig-block">
              <i className="bi bi-instagram" />
              <span>Aproveite para nos acompanhar no nosso Instagram!!</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
