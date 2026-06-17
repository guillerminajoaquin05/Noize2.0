// ── LOGO SVG ──
const LOGO = `<svg width="110" height="36" viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 6 L2 30 L7 30 L7 14 L15 30 L20 30 L20 6 L15 6 L15 22 L7 6 Z" fill="#39ff14"/>
  <circle cx="31" cy="18" r="11" fill="#111" stroke="#39ff14" stroke-width="1.5"/>
  <circle cx="31" cy="18" r="7" fill="none" stroke="rgba(57,255,20,.2)" stroke-width="1"/>
  <circle cx="31" cy="18" r="2.2" fill="#39ff14"/>
  <line x1="37" y1="12" x2="33" y2="18" stroke="#ff6b00" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="37.5" cy="11.5" r="1.4" fill="#ff6b00"/>
  <rect x="44" y="6" width="5" height="24" rx="1" fill="#39ff14"/>
  <path d="M52 6 L66 6 L66 11 L57 25 L66 25 L66 30 L52 30 L52 25 L61 11 L52 11 Z" fill="#39ff14"/>
  <path d="M70 6 L84 6 L84 11 L75 11 L75 16 L83 16 L83 21 L75 21 L75 25 L84 25 L84 30 L70 30 Z" fill="#c084fc"/>
  <polyline points="2,34 9,32 16,35 23,32 30,35 37,32 44,35 51,32 58,35 65,32 72,35 79,32 84,34" stroke="#ff6b00" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".6"/>
</svg>`;

// ── NAV ──
function buildNav(active) {
  const pages = [
    { href:'index.html',   label:'home' },
    { href:'resenas.html', label:'reseñas' },
    { href:'agenda.html',  label:'agenda' },
    { href:'mapa.html',    label:'mapa' },
    { href:'vinilos.html', label:'vinilos' },
    { href:'perfil.html',  label:'perfil' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${active===p.href?'active':''}">${p.label}</a></li>`
  ).join('');
  return `
  <nav class="nav" id="main-nav">
    <a href="index.html" class="nav-logo" aria-label="NOIZE home">
      ${LOGO}
    </a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-actions">
      <a href="login.html" class="btn">ingresar</a>
      <a href="login.html" class="btn btn-green">unirse →</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    ${pages.map(p=>`<a href="${p.href}" class="${active===p.href?'active':''}">${p.label}</a>`).join('')}
    <a href="#" class="btn btn-green" style="margin-top:16px;font-size:14px;">unirse →</a>
  </div>`;
}

// ── TICKER ──
function buildTicker() {
  const items = ['reseñas','◆','conciertos','◆','vinilos','◆','álbumes','◆','artistas','◆','disquerías','◆','escenarios','◆','novedades','◆'];
  const html = items.map(i=>`<span class="ticker-item${i==='◆'?' ticker-sep':''}">${i}</span>`).join('');
  return `<div class="ticker"><div class="ticker-track">${html}${html}</div></div>`;
}

// ── FOOTER ──
function buildFooter() {
  return `<footer>
    <div class="footer-grid">
      <div>
        <div class="footer-logo">NOIZE</div>
        <p class="footer-desc">La plataforma musical de la comunidad. Reseñas, agenda de eventos y mapa de espacios musicales en Buenos Aires.</p>
        <div class="socials">
          <a class="social" href="#" aria-label="Instagram">📸</a>
          <a class="social" href="#" aria-label="Twitter">𝕏</a>
          <a class="social" href="#" aria-label="TikTok">🎵</a>
          <a class="social" href="#" aria-label="Spotify">▶</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>plataforma</h4>
        <ul>
          <li><a href="resenas.html">reseñas</a></li>
          <li><a href="agenda.html">agenda</a></li>
          <li><a href="mapa.html">mapa</a></li>
          <li><a href="vinilos.html">vinilos</a></li>
          <li><a href="perfil.html">perfil</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>comunidad</h4>
        <ul>
          <li><a href="#">top reviewers</a></li>
          <li><a href="#">listas</a></li>
          <li><a href="#">foros</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>nosotros</h4>
        <ul>
          <li><a href="#">sobre NOIZE</a></li>
          <li><a href="#">contacto</a></li>
          <li><a href="#">privacidad</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 NOIZE — todos los derechos reservados ◆</span>
      <span style="color:var(--green)">hecho con ♡ para la música · Buenos Aires</span>
    </div>
  </footer>`;
}

// ── CURSOR ──
function initCursor() {
  const dot  = document.querySelector('.cur-dot');
  const ring = document.querySelector('.cur-ring');
  if (!dot || !ring) return;
  let mx=0, my=0, rx=0, ry=0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx+'px'; dot.style.top = my+'px';
  });
  (function anim(){
    rx += (mx-rx)*.12; ry += (my-ry)*.12;
    ring.style.left = rx+'px'; ring.style.top = ry+'px';
    requestAnimationFrame(anim);
  })();
  document.querySelectorAll('a,button,.card,.pill').forEach(el => {
    el.addEventListener('mouseenter',()=>{ dot.style.transform='translate(-50%,-50%) scale(2.5)'; dot.style.background='var(--orange)'; ring.style.borderColor='rgba(255,107,0,.5)'; });
    el.addEventListener('mouseleave',()=>{ dot.style.transform='translate(-50%,-50%) scale(1)'; dot.style.background='var(--green)'; ring.style.borderColor='rgba(57,255,20,.45)'; });
  });
}

// ── HAMBURGER ──
function initHamburger() {
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!ham || !menu) return;
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open'); menu.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// ── FILTER PILLS ──
function initFilters(selector, cards, attr) {
  const pills = document.querySelectorAll(selector);
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active','g','v','o'));
      pill.classList.add('active');
      const val = pill.dataset.filter;
      document.querySelectorAll(cards).forEach(card => {
        card.style.display = (val === 'all' || card.dataset[attr] === val || card.dataset[attr]?.includes(val)) ? '' : 'none';
      });
    });
  });
}

// ── INIT PAGE ──
function initPage(active) {
  document.getElementById('nav-root').innerHTML = buildNav(active);
  document.getElementById('ticker-root').innerHTML = buildTicker();
  document.getElementById('footer-root').innerHTML = buildFooter();
  initCursor();
  initHamburger();
}
