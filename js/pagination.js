import { pets } from './data/pets.js';
import { shuffle } from './utils/shuffle.js';
import { render } from './utils/render.js';

const ul = document.querySelector('.pets__list');
let pets48 = [];

function createPets48(pets) {
   let result = [];
   for(let i = 0; i < 6; i++) {
        result = result.concat(shuffle(pets));
   }
   return result;
}

pets48 = createPets48(pets);
// 1280px
let currentPage = 1;
let itemsPerPage = 8;
let totalPages = Math.ceil(pets48.length / itemsPerPage);

function getPageSlice() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return pets48.slice(start, end);
}

function renderPage() {
    const petsForPage = getPageSlice();
    ul.classList.add('fade-out');
    setTimeout(() => {
        render(ul, petsForPage);
        ul.classList.remove('fade-out');
    }, 200);
}
renderPage();

const digit = document.querySelector('.pagination__controls__digit');
let currentNum = parseInt(digit.innerText);

function goNext() {
    if(currentPage >= totalPages) return;
    currentPage++;
    currentNum++;
    digit.innerText = currentNum;
    toStart.classList.remove('disabled');
    prevBtn.classList.remove('disabled');
    if(currentPage === totalPages) {
        toEnd.classList.add('disabled');
        nextBtn.classList.add('disabled');
    }
    renderPage();
}

function goPrev() {
    if(currentPage <= 1) return;
    currentPage--;
    currentNum--;
    digit.innerText = currentNum;
    if(currentPage === 1) {
        toStart.classList.add('disabled');
        prevBtn.classList.add('disabled');
    } else if(currentPage < totalPages) {
        toEnd.classList.remove('disabled');
        nextBtn.classList.remove('disabled');
    }
    renderPage();
}

function goFirst() {
    if(currentPage === 1) return;
    currentPage = 1;
    currentNum = 1;
    digit.innerHTML = currentNum;
    toStart.classList.add('disabled');
    prevBtn.classList.add('disabled');
    toEnd.classList.remove('disabled');
    nextBtn.classList.remove('disabled');
    renderPage();
}

function goLast() {
    if(currentPage === totalPages) return;
    toEnd.classList.add('disabled');
    nextBtn.classList.add('disabled');
    toStart.classList.remove('disabled');
    prevBtn.classList.remove('disabled');
    currentPage = totalPages;
    currentNum = totalPages;
    digit.innerHTML = currentNum;
    renderPage();
}

function updateViewByResize() {
    if(window.innerWidth >= 1280) {
        itemsPerPage = 8;
    } else if(window.innerWidth >= 768 || window.innerWidth >= 661) {
        itemsPerPage = 6;
    } else {
        itemsPerPage = 3;
    }
    totalPages = Math.ceil(pets48.length / itemsPerPage);
    if(currentPage > totalPages) {
        currentPage = totalPages;
    }
    renderPage();
}

window.addEventListener('resize', updateViewByResize);

const nextBtn = document.querySelector('.pagination__controls__next');
nextBtn.addEventListener('click', goNext);

const prevBtn = document.querySelector('.pagination__controls__prev');
prevBtn.addEventListener('click', goPrev);

const toStart = document.querySelector('.pagination__controls__double-prev');
toStart.addEventListener('click', goFirst);

const toEnd = document.querySelector('.pagination__controls__double-next');
toEnd.addEventListener('click', goLast);

