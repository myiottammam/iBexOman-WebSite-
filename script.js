/* =========================================================
   iBex Oman — Premium B2B Gym Equipment Supplier
   Design tokens
   ========================================================= */
:root {
  /* Colors */
  --bg: #0A0A0B;
  --bg-alt: #121214;
  --surface: #17171A;
  --surface-2: #1D1D21;
  --border: #28282D;
  --text: #F2F1ED;
  --text-muted: #9C9C97;
  --text-dim: #6E6E6B;
  --navy: #222C62;
  --accent: #3E52C1;
  --accent-hover: #4E64E0;
  --accent-soft: rgba(62, 82, 193, 0.14);
  --whatsapp: #25D366;
  --success: #3FA34D;

  /* Type */
  --font-display: 'Bebas Neue', Impact, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Layout */
  --container: 1220px;
  --radius-sm: 3px;
  --radius: 6px;
  --nav-height: 76px;

  /* Shadows */
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

/* =========================================================
   Reset
   ========================================================= */
* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }
input, textarea, select { font: inherit; color: inherit; }

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

.text-accent { color: var(--accent); }

/* =========================================================
   Buttons
   ========================================================= */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 30px;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  border: 1px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.15s ease, color 0.2s ease;
  white-space: nowrap;
}
.btn:hover { transform: translateY(-1px); }

.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-hover); }

.btn-accent { background: var(--accent); color: #fff; }
.btn-accent:hover { background: var(--accent-hover); }

.btn-outline { background: transparent; color: var(--text); border-color: rgba(242,241,237,0.3); }
.btn-outline:hover { border-color: var(--text); background: rgba(255,255,255,0.04); }

.btn-whatsapp { background: var(--whatsapp); color: #08210f; }
.btn-whatsapp:hover { background: #2fe377; }

.btn-sm { padding: 10px 20px; font-size: 0.8rem; }
.btn-full { width: 100%; }

/* =========================================================
   Navigation
   ========================================================= */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  background: rgba(10, 10, 11, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease;
}
.navbar.scrolled {
  background: rgba(10, 10, 11, 0.94);
  border-bottom-color: var(--border);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo { display: flex; align-items: center; gap: 12px; }
.logo-img { width: 40px; height: 40px; object-fit: cover; border-radius: var(--radius-sm); }
.logo-word {
  font-family: var(--font-display);
  font-size: 1.5rem;
  letter-spacing: 0.04em;
  color: var(--text);
}
.logo-word em { font-style: normal; color: var(--accent); }

.nav-menu {
  display: flex;
  align-items: center;
  gap: 34px;
}
.nav-link {
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  position: relative;
  padding: 6px 0;
  transition: color 0.2s ease;
}
.nav-link:hover { color: var(--text); }
.nav-link::after {
  content: "";
  position: absolute;
  left: 0; bottom: 0;
  width: 0; height: 2px;
  background: var(--accent);
  transition: width 0.2s ease;
}
.nav-link:hover::after { width: 100%; }

.nav-cta-item { margin-left: 4px; }

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}
.menu-toggle .bar {
  width: 24px; height: 2px;
  background: var(--text);
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.menu-toggle.is-active .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.is-active .bar:nth-child(2) { opacity: 0; }
.menu-toggle.is-active .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* =========================================================
   Hero
   ========================================================= */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
  background: radial-gradient(ellipse at 30% 0%, #17171a 0%, #0A0A0B 55%);
  overflow: hidden;
}

.hero-photo {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.34;
}
.hero-photo::after {
  content: "";
  position: absolute; inset: 0;
  background:
    linear-gradient(100deg, #0A0A0B 20%, rgba(10,10,11,0.55) 55%, rgba(10,10,11,0.85) 100%),
    linear-gradient(0deg, #0A0A0B 0%, transparent 30%);
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(242,241,237,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(242,241,237,0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 80%);
  pointer-events: none;
}

.hero-content { position: relative; z-index: 1; padding: 80px 24px; }

.hero-frame {
  position: relative;
  max-width: 780px;
  padding: 56px clamp(24px, 5vw, 64px);
}
.corner {
  position: absolute;
  width: 22px; height: 22px;
  border: 2px solid var(--accent);
}
.corner-tl { top: 0; left: 0; border-right: none; border-bottom: none; }
.corner-tr { top: 0; right: 0; border-left: none; border-bottom: none; }
.corner-bl { bottom: 0; left: 0; border-right: none; border-top: none; }
.corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }

.eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.02;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 22px;
}

.hero-sub {
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: var(--text-muted);
  max-width: 52ch;
  margin-bottom: 34px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 40px;
}

.hero-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 28px;
}
.hero-specs li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.hero-specs i { color: var(--accent); font-size: 0.75rem; }

.scroll-indicator {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
.scroll-line {
  display: block;
  width: 1px; height: 46px;
  background: linear-gradient(var(--accent), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

/* =========================================================
   Sections — shared
   ========================================================= */
.section { padding: 110px 0; }
.section-alt { background: var(--bg-alt); }
.section-dark { background: #0A0A0B; position: relative; overflow: hidden; }

.section-header { max-width: 640px; margin: 0 auto 56px; text-align: center; }
.section-header .eyebrow { display: block; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  text-transform: uppercase;
  letter-spacing: 0.01em;
  margin-bottom: 14px;
}
.section-subtitle { color: var(--text-muted); font-size: 1.02rem; }
.section-subtitle-left { text-align: left; margin: 0 0 32px; max-width: 46ch; }

/* =========================================================
   Category cards
   ========================================================= */
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 22px;
}
.category-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 26px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.category-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
}
.category-icon {
  width: 52px; height: 52px;
  display: flex; align-items: center; justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: var(--radius-sm);
  font-size: 1.3rem;
  margin-bottom: 20px;
}
.category-card h3 {
  font-size: 1.15rem;
  margin-bottom: 14px;
  letter-spacing: 0.01em;
}
.category-list { margin-bottom: 22px; }
.category-list li {
  font-size: 0.88rem;
  color: var(--text-muted);
  padding: 5px 0;
  border-bottom: 1px dashed var(--border);
}
.category-list li:last-child { border-bottom: none; }
.category-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--accent);
}
.category-link i { font-size: 0.75rem; transition: transform 0.2s ease; }
.category-card:hover .category-link i { transform: translateX(4px); }

/* =========================================================
   Equipment controls (filter + search)
   ========================================================= */
.equipment-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}
.filter-tabs { display: flex; flex-wrap: wrap; gap: 8px; }
.filter-tab {
  padding: 9px 18px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  transition: all 0.2s ease;
}
.filter-tab:hover { color: var(--text); border-color: var(--text-muted); }
.filter-tab.is-active { background: var(--accent); border-color: var(--accent); color: #fff; }

.search-box {
  position: relative;
  min-width: 220px;
}
.search-box i {
  position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
  color: var(--text-dim); font-size: 0.85rem;
}
.search-box input {
  width: 100%;
  padding: 11px 16px 11px 38px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text);
}
.search-box input:focus { border-color: var(--accent); }

/* =========================================================
   Product grid
   ========================================================= */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
.product-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.product-card:hover { border-color: var(--accent); transform: translateY(-4px); }

.product-visual {
  height: 160px;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.4rem;
  color: var(--text-dim);
  background:
    repeating-linear-gradient(135deg, rgba(242,241,237,0.03) 0 2px, transparent 2px 14px),
    var(--surface-2);
  border-bottom: 1px solid var(--border);
}
.product-body { padding: 22px 22px 26px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.product-tag {
  align-self: flex-start;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 4px 10px;
  border-radius: 999px;
}
.product-body h3 { font-size: 1.05rem; }
.product-body p { font-size: 0.87rem; color: var(--text-muted); flex: 1; }
.product-body .btn { margin-top: 6px; align-self: flex-start; }

.empty-state {
  text-align: center;
  color: var(--text-muted);
  padding: 40px 0 0;
}

/* =========================================================
   Why us
   ========================================================= */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
}
.why-card { padding: 8px 4px; }
.why-icon {
  width: 48px; height: 48px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--accent);
  font-size: 1.15rem;
  margin-bottom: 18px;
}
.why-card h3 { font-size: 1.08rem; margin-bottom: 8px; }
.why-card p { color: var(--text-muted); font-size: 0.92rem; }

/* =========================================================
   Numbered rows (Core Services / Competitive Advantage)
   ========================================================= */
.numbered-list { display: flex; flex-direction: column; }
.numbered-row {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 22px;
  padding: 26px 0;
  border-bottom: 1px solid var(--border);
}
.numbered-row:last-child { border-bottom: none; }
.numbered-row .num {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--accent);
  line-height: 1;
}
.numbered-row h3 { font-size: 1.08rem; margin-bottom: 6px; }
.numbered-row p { color: var(--text-muted); font-size: 0.92rem; max-width: 62ch; }

/* =========================================================
   Segment grid (Industry Segments We Serve)
   ========================================================= */
.segment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.segment-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
}
.segment-card .num {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 12px;
}
.segment-card h3 { font-size: 1.02rem; margin-bottom: 8px; }
.segment-card p { color: var(--text-muted); font-size: 0.88rem; }

/* =========================================================
   Brand strip
   ========================================================= */
.brand-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}
.brand-strip span {
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 8px 18px;
}
.brand-strip-label {
  width: 100%;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-dim);
  margin-bottom: 4px;
}

/* =========================================================
   Section photo (used standalone or beside text)
   ========================================================= */
.section-photo {
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  position: relative;
}
.section-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.photo-credit {
  position: absolute;
  bottom: 10px; right: 12px;
  font-size: 0.68rem;
  letter-spacing: 0.03em;
  color: rgba(255,255,255,0.85);
  background: rgba(10,10,11,0.55);
  padding: 4px 9px;
  border-radius: 999px;
  backdrop-filter: blur(3px);
}

/* =========================================================
   Projects (real photography, captioned illustrative)
   ========================================================= */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
}
.project-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--surface);
}
.project-visual {
  height: 240px;
  position: relative;
  overflow: hidden;
}
.project-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
.project-card figcaption {
  padding: 16px 18px;
  font-weight: 600;
  font-size: 0.92rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.project-card figcaption span {
  font-weight: 400;
  font-size: 0.76rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* =========================================================
   About
   ========================================================= */
.about-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 50px;
  align-items: center;
}
.about-container { max-width: 760px; }
.about-text { color: var(--text-muted); margin-bottom: 18px; font-size: 1.02rem; }
.about-photo { height: 100%; min-height: 340px; }
.mission-block {
  margin-top: 28px;
  padding: 22px 24px;
  border-left: 2px solid var(--accent);
  background: var(--surface);
  border-radius: 0 var(--radius) var(--radius) 0;
}
.mission-block h3 {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 8px;
}
.mission-block p { color: var(--text-muted); font-size: 0.95rem; }

/* =========================================================
   CTA band
   ========================================================= */
.cta-section {
  background: var(--accent);
  padding: 80px 0;
  text-align: center;
}
.cta-content h2 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 14px;
}
.cta-content p { color: rgba(255,255,255,0.85); max-width: 46ch; margin: 0 auto 30px; }
.cta-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 14px; }
.cta-section .btn-primary { background: #0A0A0B; }
.cta-section .btn-primary:hover { background: #1D1D21; }

/* =========================================================
   Contact
   ========================================================= */
.contact-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 40px;
  margin-bottom: 50px;
}
.contact-info { display: flex; flex-direction: column; gap: 14px; }
.info-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease;
}
a.info-card:hover { border-color: var(--accent); }
.info-icon {
  width: 40px; height: 40px;
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: var(--radius-sm);
}
.info-card h4 { font-size: 0.95rem; margin-bottom: 3px; }
.info-card p { font-size: 0.88rem; color: var(--text-muted); }
.placeholder-flag { color: var(--accent); font-size: 0.75rem; }

.contact-form {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.form-field { display: flex; flex-direction: column; gap: 8px; }
.form-field label { font-size: 0.82rem; font-weight: 600; color: var(--text-muted); }
.form-field input,
.form-field textarea,
.form-field select {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  color: var(--text);
}
.form-field input:focus,
.form-field textarea:focus,
.form-field select:focus { border-color: var(--accent); }
.form-note {
  font-size: 0.85rem;
  color: var(--success);
  text-align: center;
}

.map-wrapper {
  height: 380px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  filter: grayscale(0.4) invert(0.92) contrast(0.9);
}

/* =========================================================
   Footer
   ========================================================= */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 60px 0 0; }
.footer-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
}
.footer-brand { display: flex; align-items: center; gap: 14px; }
.footer-logo-img { width: 44px; height: 44px; object-fit: cover; border-radius: var(--radius-sm); }
.footer-name { font-family: var(--font-display); font-size: 1.3rem; letter-spacing: 0.03em; }
.footer-tagline { font-size: 0.85rem; color: var(--text-muted); }

.footer-links, .footer-contact { display: flex; flex-direction: column; gap: 12px; }
.footer-links a, .footer-contact a { font-size: 0.9rem; color: var(--text-muted); transition: color 0.2s ease; }
.footer-links a:hover, .footer-contact a:hover { color: var(--text); }
.footer-contact a { display: flex; align-items: center; gap: 10px; }
.footer-contact i { color: var(--accent); width: 16px; }

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 22px 0;
  text-align: center;
  font-size: 0.82rem;
  color: var(--text-dim);
}

/* =========================================================
   Floating WhatsApp button
   ========================================================= */
.whatsapp-float {
  position: fixed;
  bottom: 26px; right: 26px;
  width: 58px; height: 58px;
  background: var(--whatsapp);
  color: #08210f;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: var(--shadow);
  z-index: 900;
  transition: transform 0.2s ease;
}
.whatsapp-float:hover { transform: scale(1.08); }

/* =========================================================
   Reveal-on-scroll (progressive enhancement, JS toggles .is-visible)
   ========================================================= */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.is-visible { opacity: 1; transform: none; }

/* =========================================================
   Responsive
   ========================================================= */
@media (max-width: 980px) {
  .commercial-grid { grid-template-columns: 1fr; gap: 36px; }
  .contact-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 860px) {
  .nav-menu {
    position: fixed;
    top: var(--nav-height); left: 0; right: 0;
    background: rgba(10,10,11,0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 10px 24px 26px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-12px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  .nav-menu li { width: 100%; }
  .nav-link { display: block; padding: 14px 0; width: 100%; }
  .nav-cta-item { margin: 10px 0 0; }
  .nav-cta-item .btn { width: 100%; }
  .menu-toggle { display: flex; }
}

@media (max-width: 640px) {
  .section { padding: 76px 0; }
  .hero-frame { padding: 40px 22px; }
  .corner { display: none; }
  .hero-buttons { flex-direction: column; align-items: stretch; }
  .hero-buttons .btn { width: 100%; }
  .hero-specs { flex-direction: column; gap: 10px; }
  .form-row { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; text-align: left; }
  .equipment-controls { flex-direction: column; align-items: stretch; }
  .search-box { min-width: 0; }
  .whatsapp-float { width: 52px; height: 52px; font-size: 1.3rem; bottom: 18px; right: 18px; }
}
