let randomNumber = (parseInt(Math.random() * 100 + 1 ));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessfield')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const lowOrHigh = document.querySelector('.loworhi')
const startOver = document.querySelector('.resultparas')

const p = document.createElement('p');

let prevGuess = []
let numberOfGuesses = 1;

let playgame = true;


//functions

if (playgame) {
  submit.addEventListener('click' , function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })  
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess<1) {
        alert('please enter a valid number more than 1')

    }
    else if (guess > 100) {
        alert('please enter a valid number less than 100')

    }
    else{
        prevGuess.push(guess)
        if (numberOfGuesses === 11) {
            displayGuess(guess)
            displayMessage(`Game Over . Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

 function checkGuess(guess) {        // check prvided number is equal , lower or greater than provided number
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`number is too low`)

    }
    else if (guess > randomNumber) {
        displayMessage(`number is too high`)

    }
 }

 function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , ` //pushes values into guess
    numberOfGuesses ++;
    remaining.innerHTML = `${11-numberOfGuesses}`
 }

function displayMessage(message) { // this method interacts directly with dom
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
   userInput.value = ''
   userInput.setAttribute('disabled' , '')
   p.classList.add('button')
    p.innerHTML =`<h2 id = "newGame" > Start New Game </h2>` ;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}
function newGame()  {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click' , function(){
    randomNumber = (parseInt(Math.random() * 100 + 1));
    prevGuess = [];
    numberOfGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p); 
    playgame = true;
   })
}