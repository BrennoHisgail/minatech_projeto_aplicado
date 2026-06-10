/**
 * MinaTech — Components Library
 * Componentes reutilizáveis no estilo JSX (render() retorna HTML string)
 * Cada classe representa um componente isolado e independente.
 */

/* ============================================================
   NavbarComponent — barra de navegação fixa no topo
   @param {string} activePage  — id da página ativa para highlight
   ============================================================ */
class NavbarComponent {
  constructor(activePage = '') {
    this.activePage = activePage;

    /* Definição centralizada dos links de navegação */
    this.links = [
      { id: 'oscs',        href: 'oscs.html',        label: 'Quem somos'  },
      { id: 'oscs2',       href: 'oscs.html#oscs',   label: 'OSCS'        },
      { id: 'inscricao',   href: 'inscricao.html',   label: 'Inscrição'   },
      { id: 'programacao', href: 'programacao.html', label: 'Programação' },
      { id: 'faq',         href: 'faq.html',         label: 'FAQ'         },
      { id: 'contato',     href: '#contato',          label: 'Contato'     },
    ];
  }

  render() {
    const navLinks = this.links
      .map(link => `
        <li class="nav-item">
          <a class="nav-link ${this.activePage === link.id ? 'active' : ''}"
             href="${link.href}">
            ${link.label}
          </a>
        </li>`)
      .join('');

    return `
      <nav class="navbar navbar-expand-lg navbar-minatech sticky-top">
        <div class="container">

          <!-- Logo -->
          <a class="navbar-brand" href="index.html">
            <span class="logo-mina">Mina</span><span class="logo-tech">Tech</span>
          </a>

          <!-- Toggle mobile -->
          <button class="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navMenu"
                  aria-controls="navMenu" aria-expanded="false"
                  aria-label="Abrir menu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Links -->
          <div class="collapse navbar-collapse justify-content-end" id="navMenu">
            <ul class="navbar-nav gap-1">
              ${navLinks}
            </ul>
          </div>

        </div>
      </nav>`;
  }
}

/* ============================================================
   FooterComponent — rodapé com informações de contato
   ============================================================ */
class FooterComponent {
  render() {
    return `
      <footer class="footer-minatech" id="contato">
        <div class="container">
          <div class="row justify-content-center align-items-center g-4">

            <!-- Localização -->
            <div class="col-6 col-md-3">
              <div class="footer-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>Florianópolis-SC</span>
              </div>
            </div>

            <!-- E-mail -->
            <div class="col-6 col-md-3">
              <div class="footer-item">
                <i class="bi bi-google"></i>
                <span>minatech.floripa@gmail.com</span>
              </div>
            </div>

            <!-- Telefone -->
            <div class="col-6 col-md-3">
              <div class="footer-item">
                <i class="bi bi-telephone-fill"></i>
                <span>(48) 99137-5245</span>
              </div>
            </div>

            <!-- Instagram -->
            <div class="col-6 col-md-3">
              <div class="footer-item ig-block">
                <i class="bi bi-instagram"></i>
                <span>Aproveite para nos acompanhar no nosso Instagram!!</span>
              </div>
            </div>

          </div>
        </div>
      </footer>`;
  }
}

/* ============================================================
   HeroComponent — banner principal da Home
   ============================================================ */
class HeroComponent {
  render() {
    return `
      <section class="hero-section" id="inicio">
        <div class="container">
          <div class="row align-items-center g-5">

            <!-- Texto -->
            <div class="col-lg-6">
              <p class="hero-label">Jornada Minatech · Florianópolis</p>
              <h1 class="hero-title">
                Tecnologia feita por
                <em>meninas,<br>para meninas</em>
              </h1>
              <p class="hero-desc">
                Um programa gratuito que inspira jovens meninas de escolas
                públicas a explorar engenharia e tecnologia, porque o futuro
                também é delas!
              </p>
              <div class="d-flex flex-wrap gap-3">
                <a href="inscricao.html" class="btn btn-pink">Participar</a>
                <a href="doacao.html"    class="btn btn-outline-pink">Apoie o projeto</a>
              </div>
            </div>

            <!-- Imagem -->
            <div class="col-lg-6">
              <div class="hero-img-placeholder">
                <img src="https://picsum.photos/seed/minatech/600/400"
                     alt="Meninas em atividade de tecnologia" />
              </div>
            </div>

          </div>
        </div>
      </section>`;
  }
}

/* ============================================================
   TickerComponent — faixa animada com palavras-chave
   ============================================================ */
class TickerComponent {
  render() {
    const words = ['STEAM', 'Tecnologia', 'Engenharia', 'Inovação',
                   'Programação', 'Ciência', 'Matemática', 'Física',
                   'STEAM', 'Tecnologia', 'Engenharia', 'Inovação',
                   'Programação', 'Ciência', 'Matemática', 'Física'];

    const items = words
      .map(w => `<span class="ticker-item">${w}</span>`)
      .join('');

    return `
      <div class="ticker-section" aria-hidden="true">
        <div class="ticker-track">${items}</div>
      </div>`;
  }
}

/* ============================================================
   StatsComponent — banner de estatísticas
   ============================================================ */
class StatsComponent {
  render() {
    return `
      <section class="stats-banner">
        <div class="container">
          <div class="row align-items-center justify-content-center g-4">

            <div class="col-md-8 text-white">
              <p class="stats-prefix">mais de</p>
              <span class="stats-number" data-target="150">0</span>
              <p class="stats-suffix mt-2">
                meninas impactadas na Grande Florianópolis!
              </p>
            </div>

            <div class="col-md-auto">
              <div class="badge-gratuito">
                <span class="pct">100%</span>
                <span>GRATUITO</span>
              </div>
            </div>

          </div>
        </div>
      </section>`;
  }
}

/* ============================================================
   AcolheComponent — cards "O Minatech acolhe"
   ============================================================ */
class AcolheComponent {
  render() {
    const cards = [
      { icon: 'bi-brain',          label: 'Neurodivergentes' },
      { icon: 'bi-mortarboard',    label: 'Estudantes'       },
      { icon: 'bi-gender-female',  label: 'Mulheres'         },
      { icon: 'bi-rainbow',        label: 'LGBTQIA+'         },
    ];

    const cardHTML = cards
      .map(c => `
        <div class="col-6 col-md-3">
          <div class="acolhe-card">
            <div class="acolhe-icon"><i class="bi ${c.icon}"></i></div>
            <p>${c.label}</p>
          </div>
        </div>`)
      .join('');

    return `
      <section class="acolhe-section">
        <div class="container">
          <h2 class="section-title">O Minatech acolhe</h2>
          <div class="row justify-content-center g-3">
            ${cardHTML}
          </div>
        </div>
      </section>`;
  }
}
