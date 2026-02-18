const BASE_PATH = window.location.pathname.includes('/page') ? '../assets/' : 'assets/';

export const pets = [
    { 
        id: '1',
        name: 'Winston', 
        img: `${BASE_PATH}img/pets-winston.png`,
        breed: 'Cat &#8210; European Shorthair',
        desc: 'Winston is a steady and observant companion who loves to keep a watchful eye on his kingdom. While he may look serious with his classic tiger stripes, he is a total softie for chin scratches and afternoon naps in the sun.',
        list: {
            age: 'Age', value: '7 months',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    },
    { 
        id: '2',
        name: 'Aldo', 
        img: `${BASE_PATH}img/pets-aldo.png`,
        breed: 'Dog &#8210; Harz Fox',
        desc: 'Aldo is a spirited and clever companion who treats every day like a new adventure. He thrives on being part of the action. Above all, Aldo is a devoted friend whose "foxy" charm is matched only by his deep loyalty to his family.',
        list: {
            age: 'Age', value: '2 years',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    },
    { 
        id: '3',
        name: 'Donny', 
        img: `${BASE_PATH}img/pets-donny.png`,
        breed: 'Cat &#8210; Asian Tabby',
        desc: 'Donny is a friendly and highly social companion. His breed is described as being more "laid-back" than their active Burmese ancestors, yet they remain playful and enjoy investigating every corner of their home. Donny is perfect for families looking for a devoted and intelligent feline friend.',
        list: {
            age: 'Age', value: '6 months',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    },
    { 
        id: '4',
        name: 'Frederick', 
        img: `${BASE_PATH}img/pets-frederick.png`,
        breed: 'Dog &#8210; Beagle',
        desc: 'Frederick is a soulful and charming companion who is always ready for a new scent trail to follow. Whether he\'s bounding through the park on a morning adventure or curling up for a long nap after a job well done, Frederick brings a joyful energy to every moment.',
        list: {
            age: 'Age', value: '3 years',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    },
    { 
        id: '5',
        name: 'Shoshanna', 
        img: `${BASE_PATH}img/pets-shoshanna.png`,
        breed: 'Cat &#8210; Maine Coon',
        desc: 'Shoshanna is a majestic and graceful queen who carries her luxurious fur with regal charm. Whether she\'s exploring her indoor kingdom or curling up for a long nap, Shoshanna\'s striking colors and attentive nature make her a one-of-a-kind companion ready for her forever home.',
        list: {
            age: 'Age', value: '2 years',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    },
    { 
        id: '6',
        name: 'Bridget', 
        img: `${BASE_PATH}img/pets-bridget.png`,
        breed: 'Dog &#8210; Golden Retriever',
        desc: 'Bridget is the definition of a loyal and cheerful companion. With her ever-present "smile," she brings a warm and friendly energy to any home. Bridget is a heart of gold wrapped in a beautiful golden coat, ready to be your most steadfast friend.',
        list: { 
            age: 'Age', value: '2.5 years',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites',  value4: 'none'
        }
    },
    { 
        id: '7',
        name: 'Hugo', 
        img: `${BASE_PATH}img/pets-hugo.png`,
        breed: 'Cat &#8210; Domestic Shorthair',
        desc: 'Hugo is the ultimate professional when it comes to the art of the afternoon nap. Hugo is a devoted companion who never misses a chance to greet his humans with a cheerful bark. He is a warm, loyal friend who believes that today will be better than yesterday.',
        list: {
            age: 'Age', value: '1.7 year',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    },
    { 
        id: '8',
        name: 'Archie', 
        img: `${BASE_PATH}img/pets-archie.png`,
        breed: 'Dog &#8210; Shetland Sheepdog',
        desc: 'Archie is a bright and soulful companion who is always tuned into his family\'s every move. With his quick mind, he is easy to train and loves nothing more than a productive day of play. Archie\'s loyal heart is always met with a warm lap.',
        list: {
            age: 'Age', value: '4 years',
            inoculations: 'Inoculations', value2: 'none',
            deseases: 'Deseases', value3: 'none',
            parasites: 'Parasites', value4: 'none'
        }
    }
];