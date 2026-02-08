import { pets } from './data/pets.js';
import { shuffle } from './utils/shuffle.js';
import { generatePetCard } from './components/generateCard.js';
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

console.log('pets48 created:', pets48);
console.log('pets48 length:', pets48.length);


function renderPage() {
    const petsForPage = getPageSlice();
    render(ul, petsForPage);
    console.log('Page:', currentPage);
    console.log(petsForPage);
}
renderPage();

function goNext() {
    if(currentPage >= totalPages) return;
    currentPage++;
    renderPage();
}

function goPrev() {
    if(currentPage <= 1) return;
    currentPage--;
    renderPage();
}

function goFirst() {
    if(currentPage === 1) return;
    currentPage = 1;
    renderPage();
}

function goLast() {
    if(currentPage === totalPages) return;
    currentPage = totalPages;
    renderPage();
}

