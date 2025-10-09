/* console.log((`Approximately
    1. Main 1280px: 14\n
    2. Main 768px: 14\n
    3. Main 320px: 0\n
    4. Pets 1280px: 6\n
    5. Pets 768px: 6\n
    6. Pets 320px: 0\n
    7. False,  0\n
    8. False, 0\n
    9. False, 0\n
   10. 4\n
   Sum: 44`
   )) */

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

next.addEventListener('click', () => {
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
})
