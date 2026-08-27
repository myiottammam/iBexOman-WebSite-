/* =========================================================
   iBex Oman — site behavior
   Vanilla JS, no external dependencies.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------
     CONFIG — edit these two lines when the real details
     are available.
     --------------------------------------------------- */
  // TODO: replace with the real WhatsApp number in international
  // format, digits only (no +, spaces or leading zeros).
  const WHATSAPP_NUMBER = '968XXXXXXXX';
  const WHATSAPP_MESSAGE = 'Hello iBex Oman, I am interested in your gym equipment and would like to request a quotation.';

  /* ---------------------------------------------------
     Build every WhatsApp link on the page from one place
     --------------------------------------------------- */
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document.querySelectorAll('.js-whatsapp-link').forEach(link => {
    link.setAttribute('href', waUrl);
  });

  /* ---------------------------------------------------
     Mobile menu toggle
     --------------------------------------------------- */
  const menuToggle = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isActive = navMenu.classList.toggle('active');
      menuToggle.classList.toggle('is-active', isActive);
      menuToggle.setAttribute('aria-expanded', String(isActive));
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------
     Sticky navbar background on scroll
     --------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------
     Smooth scroll for in-page anchor links, offset for
     the fixed navbar
     --------------------------------------------------- */
  const navHeight = navbar ? navbar.offsetHeight : 76;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------------------------------------------------
     Equipment filter + search
     --------------------------------------------------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const searchInput = document.getElementById('equipment-search');
  const productCards = document.querySelectorAll('.product-card');
  const emptyState = document.getElementById('empty-state');

  let activeFilter = 'all';

  function applyFilters() {
    const term = (searchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;

    productCards.forEach(card => {
      const category = card.dataset.category;
      const text = card.textContent.toLowerCase();
      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = term === '' || text.includes(term);
      const show = matchesFilter && matchesSearch;
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      activeFilter = tab.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  /* ---------------------------------------------------
     Scroll reveal (progressive enhancement — content is
     fully visible without JS)
     --------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.category-card, .product-card, .why-card, .project-card, .info-card'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------------------------------------------
     Contact form — no backend on GitHub Pages.
     Connect this form to a service (Formspree, Getform,
     Web3Forms, etc.) by setting the <form action="...">
     and removing this preventDefault once that's done.
     --------------------------------------------------- */
  const form = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formNote) formNote.hidden = false;
      form.reset();
    });
  }

});
