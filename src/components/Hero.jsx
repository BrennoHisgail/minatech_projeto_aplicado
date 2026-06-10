import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Texto */}
          <div className="col-lg-6">
            <p className="hero-label">Jornada Minatech · Florianópolis</p>
            <h1 className="hero-title">
              Tecnologia feita por{' '}
              <em>meninas,<br />para meninas</em>
            </h1>
            <p className="hero-desc">
              Um programa gratuito que inspira jovens meninas de escolas
              públicas a explorar engenharia e tecnologia, porque o futuro
              também é delas!
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link to="/inscricao" className="btn btn-pink">Participar</Link>
              <Link to="/doacao"    className="btn btn-outline-pink">Apoie o projeto</Link>
            </div>
          </div>

          {/* Imagem */}
          <div className="col-lg-6">
            <div className="hero-img-placeholder">
              <img
                src="https://picsum.photos/seed/minatech/600/400"
                alt="Meninas em atividade de tecnologia"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
