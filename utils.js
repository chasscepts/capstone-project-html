(function iife() {
  const setupHamburgerNav = () => {
    const hamburgerBg = document.querySelector('#hamburger-bg');
    const hamburger = document.querySelector('#hamburger');
    const drawer = document.querySelector('#drawer');

    document.addEventListener('scroll', () => {
      if(window.scrollY > 40) {
        hamburgerBg.classList.add('slidedown');
      }
      else {
        hamburgerBg.classList.remove('slidedown');
      }
    });

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      drawer.classList.toggle('open');
    });
  }

  window.addEventListener('load', () => {
    setupHamburgerNav();
  })
})();