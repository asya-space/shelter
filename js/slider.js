import { pets } from './pets.js';
/* arrows */
const rightBtn = document.querySelector('.slider__next');
const leftBtn = document.querySelector('.slider__prev');
const ul = document.querySelector('.slider__list');

/* generate slides */

const template = document.querySelector('.template');
function generateCard(pet) {
    const li = template.cloneNode(true);
    li.style.display = '';
    const img = li.querySelector('.slider__list__item__card__pic__img');
    const source = li.querySelector('source');
    const name = li.querySelector('.slider__list__item__card__name');
    img.src = pet.img;
    img.alt = pet.name;
    if(source) { source.srcset = pet.img};
    name.textContent = pet.name;
    return li;
}

/* generation random cards */
const allItems = pets.map((_, index) => index);

function getSet(show, countNew) {
   const item = allItems.filter(card => !show.includes(card)) // includes => method. look at MDN
   for(let i = item.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [item[i], item[j]] = [item[j], item[i]];
   }
   return item.slice(0, countNew);
}

function getVisibleCount() {
   const width = window.innerWidth;
   if(width >= 1280) return 3;
   if(width >= 768) return 2;
   return 1;
}

let visibleCount = getVisibleCount();
let currentItems = getSet([], visibleCount); // first set

function rendering(allItems) {
   ul.innerHTML = '';
   allItems.forEach(card => {
      const pet = pets[card];
      const item = generateCard(pet);
      ul.appendChild(item);
   })
};

rendering(currentItems);

function getCardMetrics() {
  const card = ul.firstElementChild;
  if (!card) return { width: 0, margin: 0 }; // margin - marginRight
  const width = card.getBoundingClientRect().width;
  const margin = parseFloat(getComputedStyle(card).marginRight) || 0;
  return { width, margin };
}

function getStep() {
  const { width, margin } = getCardMetrics();
  return (width + margin) * visibleCount;
}

// moving left/right
let isAnimating = false;

function moving(dir = 1) {
  if (isAnimating) return;
  isAnimating = true;

  const step = getStep();
  if (!step) { isAnimating = false; return; }

  const newItems = getSet(currentItems, visibleCount);

  // new items(cards)
  const frag = document.createDocumentFragment();
  newItems.forEach(idx => frag.appendChild(generateCard(pets[idx])));

  // preparing DOM
  if (dir === 1) {
    ul.appendChild(frag);
    ul.style.transition = 'none';
    ul.style.transform = 'translateX(0px)';
    ul.offsetHeight; // reflow (stop and get new metrics from browser)
    ul.style.transition = 'transform 350ms ease';
    ul.style.transform = `translateX(${-step}px)`;
  } else {
    ul.prepend(frag);
    ul.style.transition = 'none';
    ul.style.transform = `translateX(${-step}px)`;
    ul.offsetHeight; // reflow. the same (look up)
    ul.style.transition = 'transform 350ms ease';
    ul.style.transform = 'translateX(0px)';
  }

  ul.addEventListener('transitionend', () => {
    // clean. when animation finished
    ul.style.transition = 'none';

    const kids = [...ul.children];
    if (dir === 1) {
      kids.slice(0, visibleCount).forEach(el => el.remove());
    } else {
      kids.slice(visibleCount).forEach(el => el.remove());
    }

    // slider into init step
    ul.style.transform = 'translateX(0px)';
    ul.offsetHeight; // you know already :)
    ul.style.transition = 'transform 500ms ease';

    currentItems = newItems;
    isAnimating = false;
  }, { once: true });
}

rightBtn.addEventListener('click', () => moving(1));
leftBtn.addEventListener('click', () => moving(-1));






