const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const reviewForm = document.querySelector('[data-review-form]');

if (reviewForm) {
  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!reviewForm.checkValidity()) {
      reviewForm.reportValidity();
      return;
    }

    const status = reviewForm.querySelector('[data-form-status]');
    if (status) {
      status.hidden = false;
      status.focus();
    }
  });
}
