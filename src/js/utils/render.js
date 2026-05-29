import { generatePetCard } from '../components/generateCard.js';
export function render(container, pets) {
    container.innerHTML = '';
    pets.forEach(pet => {
        container.appendChild(generatePetCard(pet));
    });
} 