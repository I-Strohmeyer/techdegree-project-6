// Variables
const qwerty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startButton = document.getElementsByClassName('btn__reset')[0];


// listens to the start button being clicked
startButton.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

// set of complete phrases
const phrases = [
    'Change the world by being yourself',
    'Aspire to inspire before we expire',
    'Strive for greatness',
    'To live will be an awfully big adventure',
    'Daypaio experienced an unexpected downtime'
];

// get random number between a min and max number 
function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPhraseAsArray(arr) {
    //get a random number between 0 and the length of the array
    let randomNumber = getRandomInt(0, phrases.length-1);

    // get the string based on that random number
    let randomPhrase = phrases[randomNumber];

    // get an arrary of characters from that string
    return randomPhrase.split('');
} 

const characterArray = getRandomPhraseAsArray(phrases);
console.log(characterArray);


//getRandomPhraseAsArray(phrases);

