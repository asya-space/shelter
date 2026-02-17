const BASE_PATH = window.location.pathname.includes('/page') ? '../assets/' : 'assets/';

export const pets = [
    { 
        id: '1',
        name: 'Winston', 
        img: `${BASE_PATH}img/pets-winston.png`,
        breed: 'Cat - European Shorthair',
        desc: 'Winston is a steady and observant companion who loves to keep a watchful eye on his kingdom. While he may look serious with his classic tiger stripes, he’s a total softie for chin scratches and afternoon naps in the sun. He is a master of routine and will be the first to greet you at the door when you come home. After a long journey, Winston is ready to trade his adventures for a cozy lap and a forever family.',
        list: {
            age: 'Age:',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '2',
        name: 'Aldo', 
        img: `${BASE_PATH}img/pets-aldo.png`,
        breed: 'Dog - Harz Fox',
        desc: 'Aldo is a spirited and clever companion who treats every day like a new adventure. With his bright smile and watchful eyes, he is a master at keeping his humans entertained and on their toes. He thrives on being part of the action, whether it\'s a brisk morning walk or a focused training session where he can show off his quick learning skills. Above all, Aldo is a devoted friend whose "foxy" charm is matched only by his deep loyalty to his family.',
        list: {
            age: 'Age:',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '3',
        name: 'Donny', 
        img: `${BASE_PATH}img/pets-donny.png`,
        breed: 'Cat - Asian Tabby',
        desc: 'Donny is a friendly, inquisitive, and highly social companion that thrives on human interaction. His breed described as being more "laid-back" than their active Burmese ancestors, yet they remain playful and enjoy investigating every corner of their home. With Donny\'s expressive eyes and affectionate nature, he is perfect for families looking for a devoted and intelligent feline friend.',
        list: {
            age: 'Age:',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '4',
        name: 'Frederick', 
        img: `${BASE_PATH}img/pets-frederick.png`,
        breed: 'Dog - Beagle',
        desc: 'Frederick is a soulful and charming companion who is always ready for a new scent trail to follow. With his big, expressive eyes and loyal heart, he is a master at winning over everyone he meets. Whether he\'s bounding through the park on a morning adventure or curling up for a long nap after a job well done, Frederick brings a joyful energy to every moment. He is a devoted friend who is just looking for a forever home where he can be the "peaceful ruler" of his own cozy kingdom',
        list: {
            age: 'Age:',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '5',
        name: 'Shoshanna', 
        img: `${BASE_PATH}img/pets-shoshanna.png`,
        breed: 'Cat - Maine Coon',
        desc: 'Shoshanna is a majestic and graceful queen who carries her luxurious fur with regal charm. Like a true Maine Coon, she is likely a gentle soul who thrives on the routine of her human family while maintaining a curious and playful spirit. Whether she\'s exploring her indoor kingdom or curling up for a long nap, Shoshanna\'s striking colors and attentive nature make her a one-of-a-kind companion ready for her forever home.',
        list: {
            age: 'Age:',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '6',
        name: 'Bridget', 
        img: `${BASE_PATH}img/pets-bridget.png`,
        breed: 'Dog - Golden Retriever',
        desc: 'Bridget is the definition of a loyal and cheerful companion. With her bright, soulful eyes and ever-present "smile," she brings a warm and friendly energy to any home. She is a master of routine who likely lives for her morning walks and evening cuddles. Devoted and eager to please, Bridget is a heart of gold wrapped in a beautiful golden coat, ready to be your most steadfast friend.',
        list: {
            age: 'Age:',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '7',
        name: 'Hugo', 
        img: `${BASE_PATH}img/pets-hugo.png`,
        breed: 'Cat - Domestic Shorthair',
        desc: 'Hugo is the ultimate professional when it comes to the art of the afternoon nap. With his soft ginger stripes and peaceful expression, he’s a master at finding the sunniest spot in the house to recharge his batteries. While he may look like a sleepy soul in the middle of a deep dream, Hugo is likely a devoted companion who never misses a chance to greet his humans with a cheerful chirp. He is a warm, loyal friend who believes that every day is better when it includes plenty of chin scratches and a cozy lap to curl up in.',
        list: {
            age: 'Age: ',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    },
    { 
        id: '8',
        name: 'Archie', 
        img: `${BASE_PATH}img/pets-archie.png`,
        breed: 'Dog - Shetland Sheepdog',
        desc: 'Archie is a bright and soulful companion who is always tuned into his family\'s every move. With his elegant tricolor coat and quick mind, he is a master of learning new tricks and loves nothing more than a productive day of play or "herding" his favorite toys. While he might be a little reserved with new faces at first, Archie is a deeply devoted friend who thrives on routine and affection. He is looking for a home where his intelligence is celebrated and his loyal heart is always met with a warm lap.',
        list: {
            age: 'Age: ',
            inoculations: 'Inoculations:',
            deseases: 'Deseases:',
            parasites: 'Parasites:'
        }
    }
];