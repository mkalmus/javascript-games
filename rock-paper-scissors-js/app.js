const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

var greeter = "say hello"
console.log(greeter);

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumb = Math.floor(Math.random() * possibleChoices.length)
    if (randomNumb === 0) {
        computerChoice = 'rock'
    }
    if (randomNumb === 1) {
        computerChoice = 'paper'
    }
    if (randomNumb === 2) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "it's a draw!"
    }
    else if (computerChoice === 'rock' && userChoice == 'scissors') {
        result = "you lost :("
    }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost :("
    }
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost :("
    }
    else {
        result = "you won! :)"
    }
    resultDisplay.innerHTML = result
}