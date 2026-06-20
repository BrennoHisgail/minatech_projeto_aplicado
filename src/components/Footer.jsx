import { Link } from 'react-router-dom'
import marcaMinatech from '../assets/marca-Minatech-removebg-preview.png'

const LINKS = [
  { to: '/quem-somos',  label: 'Quem somos'  },
  { to: '/inscricao',   label: 'Inscrição'   },
  { to: '/programacao', label: 'Programação' },
  { to: '/faq',         label: 'FAQ'         },
  { to: '/doacao',      label: 'Doação'      },
  { to: '/contato',     label: 'Contato'     },
]

export default function Footer() {
  return (
    <footer className="footer-minatech">
      <div className="container">
        <div className="footer-grid">

          {/* Marca */}
          <div className="footer-brand">
            <img src={marcaMinatech} alt="MinaTech" className="footer-logo" />
            <p className="footer-desc">
              Tecnologia feita por meninas, para meninas. Um programa 100% gratuito
              em Florianópolis, SC.
            </p>
          </div>

          {/* Links */}
          <div className="footer-col">
            <p className="footer-col-title">Navegação</p>
            <ul className="footer-links">
              {LINKS.map((l, i) => (
                <li key={i}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="footer-col">
            <p className="footer-col-title">Contato</p>
            <ul className="footer-links">
              <li>
                <a href="mailto:minatech.floripa@gmail.com">
                  <i className="bi bi-envelope me-2" />minatech.floripa@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5548991375245" target="_blank" rel="noreferrer">
                  <i className="bi bi-whatsapp me-2" />(48) 99137-5245
                </a>
              </li>
              <li>
                <a href="https://instagram.com/minatech.brasil" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram me-2" />@minatech.brasil
                </a>
              </li>
              <li>
                <i className="bi bi-geo-alt me-2" />Florianópolis, SC
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>MinaTech™ — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
