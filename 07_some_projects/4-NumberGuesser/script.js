let randomNumber = parseInt(Math.random() * 100 +1);  //generates a random int number btw 1 to 100
// game around if we guess random number within 10 tries

const submit = document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const newgameSpan = document.createElement('span')

let prevGuess = []
let numGuess = 0

let playGame = true 

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid Number');
    } else if(guess < 1) {
        alert('Number has to be atleast 1');
    } else if(guess >100) {
        alert('Number cannot be 100 or more');
    } else {
        prevGuess.push(guess)
        if (numGuess === 9) {
            displayGuess(guess);
            checkGuess(guess);
            lowOrHi.style.color='crimson';
            displayMessage(`Game Over, Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        lowOrHi.style.color='lightgreen';
        displayMessage('You Guessed it right');
        endGame();
    } else if(guess < randomNumber) {
        displayMessage('Number is TOO Low');
    } else if(guess > randomNumber) {
        displayMessage('Number is TOO High');
    }
}

function displayGuess(guess) {
    userInput.value = '';      //cleans input
    guessSlot.style.backgroundColor ='#7a7a7a';    
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`;

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value= '';
    userInput.setAttribute('disabled', ''); // The 'disabled' attribute is a boolean attribute and does not require a value.
    submit.setAttribute('disabled', '');
    newgameSpan.innerHTML = "<button id='newGame'>Start New Game</button>";
    startOver.appendChild(newgameSpan);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random()*100 +1);
        prevGuess = [];
        numGuess=0;
        newgameSpan.innerHTML='';
        guessSlot.innerHTML='';
        remaining.innerHTML = `${10-numGuess}`;
        lowOrHi.innerHTML='';
        userInput.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        lowOrHi.style.color='';
        guessSlot.style.backgroundColor ='';    
        
        playGame=true;
    })
}