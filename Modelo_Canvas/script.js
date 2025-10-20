document.addEventListener('DOMContentLoaded', () => {
  // Obtener referencias a elementos DOM clave
  const main = document.getElementById('mainScrollable');
  const sections = Array.from(document.querySelectorAll('section.canvas-section'));
  const dotsContainer = document.getElementById('progressDots');
  const modalNav = document.getElementById('modalNav');

  // Cachear botones de navegación
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const mNext = document.getElementById('mNext');
  const mPrev = document.getElementById('mPrev');
  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');
  const menuOverlay = document.getElementById('menuOverlay');
  const contactCTA = document.getElementById('contactCTA');
  const contactForm = document.getElementById('contactForm');

  // Crear indicadores de progreso (puntos) dinámicamente
  sections.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('data-index', i);
    // Mejorar accesibilidad con aria-label para lectores de pantalla
    btn.setAttribute('aria-label', `Ir a la sección ${s.querySelector('h3') ? s.querySelector('h3').innerText : 'Introducción'}`);
    btn.title = s.querySelector('h3') ? s.querySelector('h3').innerText : 'Introducción';
    btn.addEventListener('click', () => scrollToIndex(i));
    dotsContainer.appendChild(btn);

    // Crear enlaces para el menú modal
    const link = document.createElement('a');
    link.href = `#${s.id || `section-${i}`}`;
    link.textContent = s.querySelector('h3')?.innerText || s.querySelector('h1')?.innerText || `Sección ${i}`;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToIndex(i);
      menuOverlay.classList.remove('show'); // Cerrar menú al hacer clic
    });
    modalNav.appendChild(link);
  });

  /**
   * Desplaza la vista a una sección específica por su índice.
   * @param {number} i - El índice de la sección a la que desplazarse.
   */
  function scrollToIndex(i) {
    const sec = sections[i];
    if (!sec) return; // Si la sección no existe, no hacer nada
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Actualizar el punto activo inmediatamente después de un desplazamiento programático
    updateActiveDot();
  }

  /**
   * Devuelve el índice de la sección más visible en el viewport.
   * Esto es útil para determinar qué sección está actualmente en foco.
   * @returns {number} El índice de la sección más visible.
   */
  function indexOfVisible() {
    let maxVisibleArea = -1;
    let visibleIndex = 0;
    sections.forEach((s, i) => {
      const rect = s.getBoundingClientRect();
      // Calcular la intersección de la sección con el viewport
      const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
      if (visibleHeight > maxVisibleArea) {
        maxVisibleArea = visibleHeight;
        visibleIndex = i;
      }
    });
    return visibleIndex;
  }

  // Event listeners para los botones de navegación (siguiente/anterior)
  nextBtn?.addEventListener('click', () => { scrollToIndex(Math.min(sections.length - 1, indexOfVisible() + 1)); });
  prevBtn?.addEventListener('click', () => { scrollToIndex(Math.max(0, indexOfVisible() - 1)); });
  mNext?.addEventListener('click', () => { scrollToIndex(Math.min(sections.length - 1, indexOfVisible() + 1)); });
  mPrev?.addEventListener('click', () => { scrollToIndex(Math.max(0, indexOfVisible() - 1)); });

  // Event listeners para botones con atributo data-goto
  document.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', e => {
    const idx = Number(e.currentTarget.getAttribute('data-goto'));
    scrollToIndex(idx);
  }));

  // Intersection Observer para activar animaciones en las tarjetas
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const card = entry.target.querySelector('.card-canvas');
      if (card) { // Asegurarse de que la tarjeta existe
        if (entry.isIntersecting) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      }
    });
  }, { threshold: 0.35 }); // El 35% de la tarjeta debe ser visible para activar la animación

  sections.forEach(s => observer.observe(s));

  /**
   * Actualiza el estado activo de los puntos de progreso basándose en la sección visible.
   */
  function updateActiveDot() {
    const i = indexOfVisible();
    Array.from(dotsContainer.children).forEach((d, idx) => {
      const isActive = idx === i;
      d.classList.toggle('active', isActive);
      d.setAttribute('aria-current', isActive ? 'true' : 'false'); // Indicar el elemento actual para accesibilidad
    });
  }

  // Actualizar el punto activo al hacer scroll en el contenedor principal y al redimensionar la ventana
  main.addEventListener('scroll', () => requestAnimationFrame(updateActiveDot));
  window.addEventListener('resize', () => requestAnimationFrame(updateActiveDot));
  
  // Llamada inicial para establecer el punto activo al cargar la página
  updateActiveDot();

  // Manejo del menú modal
  openMenuBtn?.addEventListener('click', () => menuOverlay.classList.add('show'));
  closeMenuBtn?.addEventListener('click', () => menuOverlay.classList.remove('show'));

  // CTA de Contacto -> ir a la sección de contacto
  contactCTA?.addEventListener('click', () => scrollToIndex(sections.length - 1));

  // Manejo básico del formulario de contacto (placeholder)
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias — aquí podrías enviar los datos a tu backend o a un servicio (Mailgun, SendGrid, etc.)');
    e.target.reset(); // Limpiar el formulario después del envío
  });

  // Mejora de accesibilidad: navegación con teclas de flecha (izquierda/derecha)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      scrollToIndex(Math.min(sections.length - 1, indexOfVisible() + 1));
    }
    if (e.key === 'ArrowLeft') {
      scrollToIndex(Math.max(0, indexOfVisible() - 1));
    }
  });
});