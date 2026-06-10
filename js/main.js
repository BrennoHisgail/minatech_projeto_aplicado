/**
 * MinaTech — main.js
 * Inicialização dos componentes e interatividade global.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Renderiza Navbar ---- */
  const navEl = document.getElementById('navbar-container');
  if (navEl) {
    const page = navEl.dataset.page || '';
    navEl.innerHTML = new NavbarComponent(page).render();
  }

  /* ---- Renderiza Footer ---- */
  const footEl = document.getElementById('footer-container');
  if (footEl) {
    footEl.innerHTML = new FooterComponent().render();
  }

  /* ---- Renderiza Hero (somente index) ---- */
  const heroEl = document.getElementById('hero-container');
  if (heroEl) {
    heroEl.innerHTML = new HeroComponent().render();
  }

  /* ---- Renderiza Ticker ---- */
  const tickerEl = document.getElementById('ticker-container');
  if (tickerEl) {
    tickerEl.innerHTML = new TickerComponent().render();
  }

  /* ---- Renderiza Stats ---- */
  const statsEl = document.getElementById('stats-container');
  if (statsEl) {
    statsEl.innerHTML = new StatsComponent().render();
  }

  /* ---- Renderiza Acolhe ---- */
  const acolheEl = document.getElementById('acolhe-container');
  if (acolheEl) {
    acolheEl.innerHTML = new AcolheComponent().render();
  }

  /* ---- Inicializa funcionalidades ---- */
  initCounterAnimation();
  initMultiStepForm();
  initCopyPix();
});

/* ============================================================
   Animação de contador (IntersectionObserver)
   ============================================================ */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const fps    = 60;
      const dur    = 1800; // ms
      const steps  = (fps * dur) / 1000;
      const inc    = target / steps;
      let   cur    = 0;

      const tick = () => {
        cur += inc;
        if (cur >= target) {
          el.textContent = target + '+';
        } else {
          el.textContent = Math.floor(cur);
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================================
   Formulário multi-etapas
   ============================================================ */
function initMultiStepForm() {
  const form = document.getElementById('multi-step-form');
  if (!form) return;

  const steps       = form.querySelectorAll('.form-step');
  const sideItems   = document.querySelectorAll('.step-item');
  const btnNext     = form.querySelectorAll('.btn-next');
  const btnPrev     = form.querySelectorAll('.btn-prev');
  let   current     = 0;

  /* Exibe a etapa correta e atualiza sidebar */
  function goTo(index) {
    steps.forEach((s, i) => s.classList.toggle('active', i === index));

    sideItems.forEach((item, i) => {
      item.classList.remove('active', 'completed');
      if (i < index)  item.classList.add('completed');
      if (i === index) item.classList.add('active');
    });

    current = index;
  }

  /* Botões Próximo */
  btnNext.forEach(btn => {
    btn.addEventListener('click', () => {
      if (current < steps.length - 1) goTo(current + 1);
    });
  });

  /* Botões Anterior */
  btnPrev.forEach(btn => {
    btn.addEventListener('click', () => {
      if (current > 0) goTo(current - 1);
    });
  });

  /* Clique direto na sidebar */
  sideItems.forEach((item, i) => {
    item.addEventListener('click', () => goTo(i));
  });

  goTo(0);
}

/* ============================================================
   Copiar chave PIX para a área de transferência
   ============================================================ */
function initCopyPix() {
  const btn = document.getElementById('btn-copy-pix');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const key = 'minatech.floripa@gmail.com';

    navigator.clipboard.writeText(key)
      .then(() => {
        btn.textContent = '✓ Copiado!';
        setTimeout(() => { btn.textContent = 'Copiar link'; }, 2500);
      })
      .catch(() => {
        /* Fallback para navegadores sem clipboard API */
        const tmp = document.createElement('textarea');
        tmp.value = key;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
        btn.textContent = '✓ Copiado!';
        setTimeout(() => { btn.textContent = 'Copiar link'; }, 2500);
      });
  });
}
