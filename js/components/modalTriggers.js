import { pets } from '../data/pets.js';
import { renderPetModal } from './renderModal.js';
import { openModal } from './modalCore.js'; 

document.addEventListener('click', (elem) => {
  const item = elem.target.closest('.slider__list__item');
  if (!item) return;

  const id = item.dataset.id;
  const pet = pets.find(p => p.id === id);
  if (!pet) return;

  const html = renderPetModal(pet);
  openModal(html);
});