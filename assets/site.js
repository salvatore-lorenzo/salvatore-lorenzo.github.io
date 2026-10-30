(() => {
  'use strict';
  document.documentElement.classList.add('js-enabled');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#primary-navigation');
  const menuLabel = document.querySelector('.menu-label');

  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Menu';
  }
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(isOpen));
    navigation.classList.toggle('is-open', isOpen);
    menuLabel.textContent = isOpen ? 'Close' : 'Menu';
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });

  const filters = document.querySelector('.publication-filters');
  const filterButtons = [...filters.querySelectorAll('button')];
  const publications = [...document.querySelectorAll('.publication')];
  const status = document.querySelector('#publication-status');
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const topic = button.dataset.filter;
    filterButtons.forEach((filter) => {
      const isActive = filter === button;
      filter.classList.toggle('active', isActive);
      filter.setAttribute('aria-pressed', String(isActive));
    });
    let visibleCount = 0;
    publications.forEach((publication) => {
      const isVisible = topic === 'all' || publication.dataset.topic === topic;
      publication.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });
    status.textContent = `${visibleCount} ${visibleCount === 1 ? 'publication' : 'publications'} shown.`;
  });
  document.querySelector('#copyright-year').textContent = new Date().getFullYear();
})();
