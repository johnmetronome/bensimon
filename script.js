document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  const menuClose = document.querySelector('.mobile-menu-close');

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
  }

  if (menuToggle && mobileMenu && menuOverlay && menuClose) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('open');
      menuOverlay.classList.add('open');
    });
    menuClose.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);

    // Fermer le menu si on clique sur "Prestations" dans le menu mobile
    const prestationsLink = mobileMenu.querySelector('a[href="index.html#services"]');
    if (prestationsLink) {
      prestationsLink.addEventListener('click', function() {
        closeMobileMenu();
      });
    }
  }
});