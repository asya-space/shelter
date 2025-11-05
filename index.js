/* draft slider. doesn't work now, I'll do it later.
  
const slides = document.querySelectorAll('.slide__list__item__card'),
    prev = document.querySelector('#prev'),
    next = document.querySelector('#next'),
    sliderWrapper = document.querySelector('.slider'),
    slidesArea = document.querySelector('.slider__list'),
    sliderWidth = window.getComputedStyle(sliderWrapper).width;
let currentSlideIndex = 1;
let offset = 0;
let width = '360px';

slidesArea.style.width = 100 * slides.length + '%';

/*slides.forEach(slide => {
    slide.style.width = width;
});*/

/*next.addEventListener('click', () => {
    if (offset == 0 || offset > 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length - 2);
    }
    slidesArea.style.transform = `translateX(${offset}px)`;
})

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
        offset += +width.slice(0, width.length - 2);
    }

    slidesArea.style.transform = `translateX(${+offset}px)`;
})*/
const burgerBtn = document.querySelector('.burger');
const nav = document.getElementById('menu');
let axisY = 0;

function stopBody() {
   axisY = window.scrollY;
   document.body.style.top = `-${axisY}px`;
   document.body.classList.add('body-lock');
}

function moveBody() {
    document.body.classList.remove('body-lock');
    document.body.style.top = '';
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
