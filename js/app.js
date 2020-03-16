// Variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];
const button = document.querySelector('button');
const overlay = document.getElementById('overlay');

let missed = 0;



// listens to the start button being clicked
startButton.addEventListener('click', () => {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    overlay.classList.remove('win');
    overlay.classList.remove('lose');
});

// set of complete phrases
const phrases = [
    'sun upon your soul',
    'frontend developer',
    'strive for greatness',
    'learning is the key',
    'unexpected downtime'
];

// get random number between a min and max number 
function getRandomInt(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getRandomPhraseAsArray(arr) {
    //get a random number between 0 and the length of the array
    let randomNumber = getRandomInt(0, phrases.length-1);

    // get the string based on that random number
    let randomPhrase = phrases[randomNumber];

    // get an arrary of characters from that string
    return randomPhrase.split('');
}; 

const characterArray = getRandomPhraseAsArray(phrases);
console.log(characterArray);

function addPhraseToDisplay(arr) {
    for ( let i = 0; i < characterArray.length; i += 1) {
        //creates list item for each character in the arrray
        const li = document.createElement('li');
        //put character inside list item
        li.textContent = characterArray[i];
        //append list item to html
        

        // if character is a letter assign a class to it
        if ( characterArray[i] !== ' ') {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        } 

        document.querySelector('#phrase ul').appendChild(li);
    }    
};

addPhraseToDisplay(characterArray);


// checks if a certain letter is in the phrase
 function checkLetter(button) {
    // gets all elements with a class of letter
    const letter = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < letter.length; i += 1) {
        //console.log(letter[i].textContent);
        // if condition is met, assign a class to it
        if ( button.textContent === letter[i].textContent) {
           letter[i].classList.add('show');
           match = button.textContent;
        }
    }

    return match
};

function checkWin() {
    const liLetter = document.getElementsByClassName('letter');
    const liShow = document.getElementsByClassName('show');
    if (liLetter.length === liShow.length) {
       overlay.classList.add('win');
       overlay.children[0].textContent = 'You won. Good Job!';
       overlay.style.display = 'flex';

    } else if ( missed >= 5 ) {
       // alert('You lost');
       overlay.classList.add('lose');
       overlay.children[0].textContent = 'You lost. No worries, try it again!';
       overlay.style.display = 'flex';
    }
}




//listens to a letter button being clicked on screen
qwerty.addEventListener('click', (event) => {
    const cButton = event.target;

    // apply class of chosen for already clicked buttons
    if (cButton.tagName === 'BUTTON') {
        cButton.classList.add('chosen');
        cButton.disabled = 'true';

        const letterFound = checkLetter(cButton);

        if (letterFound === null) {
        const liveHearts = document.getElementsByClassName('tries');
        

        liveHearts[missed].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';
        missed += 1;


        /*
        let heartToDisableIndex = liveHearts.length - missed;
        
        liveHearts[heartToDisableIndex].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';

        if( heartToDisableIndex === 0 )
            alert('you lost the game');*/
        
        
        /*for (let i = 0; i < liveHearts.length; i += 1) {
            liveHearts[i].innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px">';
            missed += 1;
            
            console.log(missed);
        }*/
        
        
        }
//console.log(missed);
    
    };
    console.log(cButton.textContent);
    checkWin();
    
    
});

