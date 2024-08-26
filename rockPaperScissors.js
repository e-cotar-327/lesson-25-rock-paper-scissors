// 1
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        return 'Please check again your input!';
    }
}

//console.log(getUserChoice('ROCK'));
//console.log(getUserChoice('skjjhdf jshdf '));

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'Error!';
            break;
    }
}

//console.log(getComputerChoice());
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return `It's a tie!`;
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return `The computer won!`;
        } else {
            return `You won!`;
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return `The computer won!`;
        } else {
            return `You won!`;
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return `You won!`;
        } else {
            return `The computer won!`;
        }
    }
}

function playGame() {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}.`);
    console.log(`The computer chose: ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
playGame();
playGame();
playGame();