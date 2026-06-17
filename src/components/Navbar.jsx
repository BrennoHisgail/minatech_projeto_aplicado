import { Link, useLocation } from 'react-router-dom'

/* Links de navegação centralizados */
const NAV_LINKS = [
  { to: '/quem-somos',  label: 'Quem somos'  },
  { to: '/parceiras',   label: 'Parceiras'   },
  { to: '/inscricao',   label: 'Inscrição'   },
  { to: '/programacao', label: 'Programação' },
  { to: '/faq',         label: 'FAQ'         },
  { to: '/#contato',    label: 'Contato'     },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-minatech sticky-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <span className="logo-mina">Mina</span>
          <span className="logo-tech">Tech</span>
        </Link>

        {/* Toggle mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-1">
            {NAV_LINKS.map((link, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className={`nav-link ${pathname === link.to ? 'active' : ''}`}
                  to={link.hash ? link.to + link.hash : link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  )
}
