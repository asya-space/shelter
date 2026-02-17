const template = document.querySelector('.template');

export function generatePetCard(pet) {
    const li = template.cloneNode(true);
    li.style.display = '';
    const img = li.querySelector('.card__img');
    const source = li.querySelector('source');
    const name = li.querySelector('.card__name');
    li.dataset.id = pet.id;
    img.src = pet.img;
    img.alt = pet.name;
    if(source) { source.srcset = pet.img};
    name.textContent = pet.name;
    return li;
} 