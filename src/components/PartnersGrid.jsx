// Grid de parceiros e apoiadores do programa
// Cada card exibe a logo e o nome do parceiro

import creaSC      from '../assets/crea-sc.png'
import neoway      from '../assets/neoway.png'
import hogar       from '../assets/hogar.png'
import beDiverse   from '../assets/be_diverse.png'
import morroSilicio from '../assets/morro_silicio.png'
import meSalva     from '../assets/me_salva.png'

const PARTNERS = [
  { name: 'CREA-SC',          logo: creaSC       },
  { name: 'Neoway',           logo: neoway       },
  { name: 'HOGAR',            logo: hogar        },
  { name: 'Be-Diverse',       logo: beDiverse    },
  { name: 'Morro de Silício', logo: morroSilicio },
  { name: 'meSalva!',         logo: meSalva      },
]

export default function PartnersGrid() {
  return (
    <section className="partners-section">
      <div className="container">

        <h2>Parcerias</h2>
        <p className="partners-sub">Empresas e instituições que apoiam o projeto</p>
        <div className="divider-pink" />

        <div className="row g-4 mt-2">
          {PARTNERS.map((p, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={i}>
              <div className="partner-item">
                <img src={p.logo} alt={p.name} className="partner-logo-img" />
                <span className="partner-name">{p.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
