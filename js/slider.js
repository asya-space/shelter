import { pets } from './data/pets.js';
import { shuffle } from './utils/shuffle.js'
import { generatePetCard } from './components/generateCard.js';
import { render } from './utils/render.js';
/* arrows */
const rightBtn = document.querySelector('.slider__next');
const leftBtn = document.querySelector('.slider__prev');
const ul = document.querySelector('.slider__list');

/* generation random cards */
const allIndexes = pets.map((_, index) => index);

function getNextIndexes(currentIndexes, count) {
   const availableIndexes = allIndexes.filter(index => !currentIndexes.includes(index));
   return shuffle(availableIndexes).slice(0, count);
}

function getVisibleCount() {
   const width = window.innerWidth;
   if(width >= 1280) return 3;
   if(width >= 768) return 2;
   return 1;
}

let visibleCount = getVisibleCount();
let visibleIndexes = getNextIndexes([], visibleCount); // first set

function renderSlider(indexes) {
   const petsForRender = indexes.map(index => pets[index]);
   render(ul, petsForRender);
};

renderSlider(visibleIndexes);

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

function slide(dir = 1) {
  if (isAnimating) return;
  isAnimating = true;

  const step = getStep();
  if (!step) { isAnimating = false; return; }

  const newItems = getNextIndexes(visibleIndexes, visibleCount);

  // new items(cards)
  const frag = document.createDocumentFragment();
  newItems.forEach(idx => frag.appendChild(generatePetCard(pets[idx])));

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

    visibleIndexes = newItems;
    isAnimating = false;
  }, { once: true });
}

function changeArrowsProperty() {
  const div = document.createElement('div');
  const carousel = document.querySelector('.slider__carousel');

  if(window.innerWidth < 720) {
    div.classList.add('slider__buttons');
    div.appendChild(leftBtn);
    div.appendChild(rightBtn);
    carousel.appendChild(div);

  } else if(window.innerWidth > 720) {
    div.classList.remove('slider__buttons');
    div.remove();
    carousel.appendChild(leftBtn);
    carousel.appendChild(rightBtn);
  }
}

rightBtn.addEventListener('click', () => slide(1));
leftBtn.addEventListener('click', () => slide(-1));
window.addEventListener('resize', changeArrowsProperty);






