// alert('Hello world');

const qwerty = document.getElementById('querty');
const phrase = document.getElementById('phrase');
let missed = 0;
const startButton = document.getElementsByClassName('btn__reset');


// listens to the start button being clicked
startButton.addEventListener('click', () => {
    alert('stuff');
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
]



function getRandomPhraseAsArray(arr) {
    //do stuff to any arr that is passed in
    let randomNumber = Math.random
} 

//getRandomPhraseAsArray(phrases);

