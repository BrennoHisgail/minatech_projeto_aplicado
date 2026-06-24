// Navbar do site MinaTech
// Fica fixada no topo e marca o link ativo dependendo da rota atual

import { Link, useLocation } from 'react-router-dom'
import marcaMinatech from '../assets/marca-Minatech-removebg-preview.png'

// lista dos links do menu — fica aqui fora pra não recriar a cada render
const NAV_LINKS = [
  { to: '/quem-somos',  label: 'Quem somos'  },
  { to: '/inscricao',   label: 'Inscrição'   },
  { to: '/programacao', label: 'Programação' },
  { to: '/faq',         label: 'FAQ'         },
  { to: '/doacao',      label: 'Doação'      },
  { to: '/contato',     label: 'Contato'     },
]

export default function Navbar() {
  // pega o caminho atual da URL pra saber qual link marcar como ativo
  const { pathname } = useLocation()

  return (
    <nav className="navbar navbar-expand-lg navbar-minatech sticky-top">
      <div className="container-fluid px-4">

        {/* logo do minatech — clica e vai pra home */}
        <Link className="navbar-brand" to="/">
          <img src={marcaMinatech} alt="MinaTech" className="navbar-logo-img" />
        </Link>

        {/* botão hamburguer que aparece no celular pra abrir o menu */}
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

        {/* links de navegação — coloca a classe active no link da página atual */}
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav gap-1">
            {NAV_LINKS.map((link, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className={`nav-link ${pathname === link.to ? 'active' : ''}`}
                  to={link.to}
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
