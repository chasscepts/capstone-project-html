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

  const setupHomeSpeakersExpand = () => {
    const btn = document.querySelector('#home-speakers-more-btn');
    if(!btn) {
      // This is not home page
      return;
    }
    let expanded = false;
    const section = document.querySelector('#home-speakers');
    const span = btn.querySelector('span');
    btn.addEventListener('click', () => {
      expanded = !expanded;
      if(expanded) {
        btn.classList.add('expanded');
        section.classList.add('expanded');
        span.innerHTML = 'Less';
      }
      else {
        btn.classList.remove('expanded');
        section.classList.remove('expanded');
        span.innerHTML = 'More';
      }
    });
  }

  window.addEventListener('load', () => {
    setupHamburgerNav();
    setupHomeSpeakersExpand();
  })
})();