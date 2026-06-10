const PARTNERS = [
  'CREA-SC',
  'Neoway',
  'HOGAR',
  'Be-Diverse',
  'Mero de Silício',
  'meSalva!',
]

export default function PartnersGrid() {
  return (
    <section className="partners-section">
      <div className="container">

        <h2>Parcerias</h2>
        <p className="partners-sub">Empresas e instituições que apoiam o projeto</p>
        <div className="divider-pink" />

        <div className="row g-3 mt-2">
          {PARTNERS.map((name, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={i}>
              <div className="partner-item">
                <span
                  className="partner-name"
                  style={{ fontSize: name.length > 8 ? '12px' : '14px' }}
                >
                  {name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
