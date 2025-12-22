const burgerBtn = document.querySelector('.burger'),
      nav = document.getElementById('menu'),
      links = nav.querySelectorAll('.nav__list__item__link'),
      body = document.querySelector('body'),
      layer = document.createElement('div');
let axisY = 0;

function stopBody() {
   axisY = window.scrollY;
   body.style.top = `-${axisY}px`;
   body.classList.add('body-lock');
}

function moveBody() {
    body.classList.remove('body-lock');
    body.style.top = '';
    window.scrollTo(0, axisY);
}

function openMenu() {
    burgerBtn.classList.add('burger-active');
    burgerBtn.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    nav.setAttribute('aria-hidden', 'false');
    stopBody();
}

function closeMenu() {
    burgerBtn.classList.remove('burger-active');
    burgerBtn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    moveBody();
}

function toggleMenu() {
    const isOpen = nav.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
}

burgerBtn.addEventListener('click', toggleMenu);

links.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (el) => {
  if (nav.classList.contains('open') && !nav.contains(el.target) && !burgerBtn.contains(el.target)) {
        closeMenu();
  }
});