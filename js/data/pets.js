const BASE_PATH = window.location.pathname.includes('/page') ? '../assets/' : 'assets/';

export const pets = [
    { name: "Winston", img: `${BASE_PATH}/img/pets-winston.png`},
    { name: "Aldo", img: `${BASE_PATH}/img/pets-aldo.png`},
    { name: "Donny", img: `${BASE_PATH}/img/pets-donny.png`},
    { name: "Frederick", img: `${BASE_PATH}/img/pets-frederick.png`},
    { name: "Emma", img: `${BASE_PATH}/img/pets-emma.png`},
    { name: "Bridget", img: `${BASE_PATH}/img/pets-bridget.png`},
    { name: "Hugo", img: `${BASE_PATH}/img/pets-hugo.png`},
    { name: "Archie", img: `${BASE_PATH}/img/pets-archie.png`}
];