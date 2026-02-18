export function renderPetModal(pet) {
    return `<div class="modal-overlay active" id="modal-overlay">
                <div class="popup" data-id="${pet.id}">
                    <div class="container">
                        <button class="popup__btn" id="modalClose">christ</button>
                        <picture class="popup__pic" srcset="${pet.img}" type="img/png">
                            <img class="popup__pic__img" src="${pet.img}" alt="${pet.name}">
                        </picture>
                        <div class="popup__info">
                            <h3 class="popup__info__title">${pet.name}</h3>
                            <h4 class="popup__info__breed">${pet.breed}</h4>
                            <p class="popup__info__desc">${pet.desc}</p>
                            <ul class="popup__info__list">
                                <li class="popup__info__list__item"><span class="popup__info__list__item__span">${pet.list.age}:</span> ${pet.list.value}</li>
                                <li class="popup__info__list__item"><span class="popup__info__list__item__span">${pet.list.inoculations}:</span> ${pet.list.value2}</li>
                                <li class="popup__info__list__item"><span class="popup__info__list__item__span">${pet.list.deseases}:</span> ${pet.list.value3}</li>
                                <li class="popup__info__list__item"><span class="popup__info__list__item__span">${pet.list.parasites}:</span> ${pet.list.value4}</li>
                            </ul>
                        </div>
                    </div>
            </div>`;
}