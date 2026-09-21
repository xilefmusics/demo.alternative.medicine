const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#main-menu');

if (navToggle && navMenu) {
  const setMenuState = (isOpen) => {
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.querySelector('.sr-only').textContent = isOpen ? 'Menü schließen' : 'Menü öffnen';
    navMenu.classList.toggle('is-open', isOpen);
  };

  navToggle.addEventListener('click', () => {
    setMenuState(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenuState(false);
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
