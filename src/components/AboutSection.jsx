export default function AboutSection() {
  return (
    <section className="about-section" id="quem-somos">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Texto */}
          <div className="col-lg-6">
            <h2>Quem somos</h2>
            <p className="org-subtitle">
              Corali &amp; Engenheiros sem Fronteiras — núcleo Florianópolis
            </p>
            <div className="divider-pink" />

            <p>
              Somos a Jornada Minatech. A Corali e os Engenheiros sem Fronteiras
              (Florianópolis) se uniram para organizar a Jornada Minatech.
            </p>
            <p>
              <em>Vamos ao sonho de inspirar meninas a conhecerem e seguirem
              carreiras tecnológicas</em>, mostrando que elas têm capacidade e
              que essas profissões não são só para meninos.
            </p>
            <p>
              Para isso, promovemos oficinas de lógica, matemática e física,
              junto com talks sobre profissões, soft skills, empreendedorismo,
              diversidade e empoderamento feminino.
            </p>
          </div>

          {/* Imagem */}
          <div className="col-lg-6">
            <div className="about-img-wrap">
              <img
                src="https://picsum.photos/seed/minatech2/600/380"
                alt="Grupo de meninas do projeto MinaTech"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
