const modalRoot = document.getElementById('modal-root');

export function openModal(html) {
    modalRoot.innerHTML = html;
    document.body.classList.add('no-scroll');
    const overlay = document.getElementById('modal-overlay');
    const modal = document.querySelector('.popup');
    const closeBtn = document.querySelector('.popup__btn');

    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', elem => elem.stopPropagation());
}

export function closeModal() {
    modalRoot.innerHTML = '';
    document.body.classList.remove('no-scroll');
}
