import { pets } from '../data/pets.js';
const modalRoot = document.getElementById('modal-root');

function openModal(pet) {
    modalRoot.innerHTML = `
    <div class="modal-overlay active" id="modalOverlay">
    <div class="modal" data-id="${pet.id}">
        <button class="modal__btn" id="modalClose">pepe</button>
        <picture class="modal__pic" srcset="${pet.img}" type="img/png">
            <img class="modal__pic__img" src="${pet.img}" alt="${pet.name}">
        </picture>
        <h2 class="modal__title">${pet.name}</h2>
        <span class="modal__breed">${pet.breed}</span>
        <p class="modal__desc">${pet.desc}</p>
        <ul class="modal__list">
            <li class="modal__list__item">${pet.list.age}</li>
            <li class="modal__list__item">${pet.list.inoculations}</li>
            <li class="modal__list__item">${pet.list.deseases}</li>
            <li class="modal__list__item">${pet.list.parasites}</li>
        </ul>`;
    document.body.classList.add('no-scroll');
    const overlay = document.getElementById('modalOverlay');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.modal__btn');

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', elem => elem.stopPropagation());
}

function closeModal() {
    modalRoot.innerHTML = '';
    document.body.classList.remove('no-scroll');
}

const items = document.querySelectorAll('.slider__list__item');

items.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.dataset.id;
    const pet = pets.find(p => p.id === id);
    openModal(pet);
  });
});