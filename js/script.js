const GameBoard = (() => {
    //private

    //public
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    return {
        board
    };
})();


const Player = (name, choice, clicked) => {
    //private

    //public
    let score = 0;
    return {
        name,
        score,
        choice,
        clicked
    };
}

const computer = (choice, clicked) => {
    //private

    //public
    let score = 0;

    return {
        choice,
        clicked,
        score
    }
};

const displayGame = (() => {
    //private
    let playerName = '';
    let tieCounter = 0;
    let playerOneName = document.getElementById('playerOneName');
    let playerTwoName = document.getElementById('playerTwoName');
    const playerOneScore = document.getElementById('playerOneScore');
    const playerTwoScore = document.getElementById('playerTwoScore');
    const ticContainer = document.getElementById('ticBtns');
    const AllTicBtn = ticContainer.querySelectorAll('button');

    //button of the grid
    const zeroZero = document.getElementById('zero-zero');
    const zeroOne = document.getElementById('zero-one');
    const zeroTwo = document.getElementById('zero-two');
    const oneZero = document.getElementById('one-zero');
    const oneOne = document.getElementById('one-one');
    const oneTwo = document.getElementById('one-two');
    const twoZero = document.getElementById('two-zero');
    const twoOne = document.getElementById('two-one');
    const twoTwo = document.getElementById('two-two');
    const gameButtons = document.getElementById('ticBtns');
    const allButtons = gameButtons.querySelectorAll('button');


    const formButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const whoWins = document.getElementById('whoWins');
    const form = document.getElementById('menu');
    const playerOneInput = document.getElementById('playerInputNameOne');
    const playerTwoInput = document.getElementById('playerInputNameTwo');
    const startButton = document.getElementById('startBtn');;
    const xPlayerOne = document.getElementById('xBtnPlayerOne');
    const oPlayerOne = document.getElementById('oBtnPlayerOne');
    const xPlayerTwo = document.getElementById('xBtnPlayerTwo');
    const oPlayerTwo = document.getElementById('oBtnPlayerTwo');
    const playerBtnChoice = document.getElementById('player-choice');
    const pcBtnChoice = document.getElementById('pc-choice');
    const againstWho = document.getElementById('against-who');
    const pcMenu = document.getElementById('pcMenu');
    const playerInputVsPc = document.getElementById('playerInputNameVsPc');
    const xBtnPlayerOneVsPc = document.getElementById('xBtnPlayerVsPc');
    const oBtnPlayerOneVsPc = document.getElementById('oBtnPlayerVsPc');
    const startBtnVsPc = document.getElementById('startBtnVsPc');
    let XOArray = GameBoard.board;
    let playerOneChoice = '';
    let playerTwoChoice = '';
    let computerChoice = '';
    //create two player objects
    let playerOne = Player(playerOneName, playerOneChoice, true);
    let playerTwo = Player(playerTwoName, playerTwoChoice, false);
    let pc = computer(computerChoice, false);
    let winner = false;

    //in the pc form 
    xBtnPlayerOneVsPc.addEventListener('click', () => {
        playerOneChoice = 'X';
        computerChoice = 'O';
        xBtnPlayerOneVsPc.classList.add('buttonChoice');
        oBtnPlayerOneVsPc.classList.remove('buttonChoice');

    })

    oBtnPlayerOneVsPc.addEventListener('click', () => {
        playerOneChoice = 'O';
        computerChoice = 'X';
        oBtnPlayerOneVsPc.classList.add('buttonChoice');
        xBtnPlayerOneVsPc.classList.remove('buttonChoice');

    })

    //when click on the pc button click event fires
    pcBtnChoice.addEventListener('click', () => {
        //hide the whole screen
        againstWho.classList.remove('vs-who-display');
        againstWho.classList.add('vs-who-display-none');
        playerTwoName.textContent = 'Pc';

        //show the pc menu

        pcMenu.classList.add('menu-display');
        pcMenu.classList.remove('menu-display-none');
    })


    startBtnVsPc.addEventListener('click', () => {
        //error logic
        if (playerInputVsPc.value === '') {
            return;
        } else if (playerOneChoice === '') {
            return;
        } else {
            playerOneName.textContent = playerInputVsPc.value.toUpperCase();
        }


        playerOne.score = 0;
        pc.score = 0;
        playerOneScore.textContent = `Score:${playerOne.score}`;
        playerTwoScore.textContent = `Score:${pc.score}`;
        resetAll();
        click = false;

        //hide the menu
        pcMenu.classList.add('menu-display-none');
        pcMenu.classList.remove('menu-display');
    })

    //the player choice in the form
    xPlayerOne.addEventListener('click', () => {
        playerOneChoice = 'X';
        playerTwoChoice = 'O';
        xPlayerOne.classList.add('buttonChoice');
        oPlayerTwo.classList.add('buttonChoice');
        oPlayerOne.classList.remove('buttonChoice');
        xPlayerTwo.classList.remove('buttonChoice');
    })

    oPlayerOne.addEventListener('click', () => {
        playerOneChoice = 'O';
        playerTwoChoice = 'X';
        oPlayerOne.classList.add('buttonChoice');
        xPlayerTwo.classList.add('buttonChoice');
        xPlayerOne.classList.remove('buttonChoice');
        oPlayerTwo.classList.remove('buttonChoice');
    })

    xPlayerTwo.addEventListener('click', () => {
        playerOneChoice = 'O';
        playerTwoChoice = 'X';
        xPlayerTwo.classList.add('buttonChoice');
        oPlayerOne.classList.add('buttonChoice');
        oPlayerTwo.classList.remove('buttonChoice');
        xPlayerOne.classList.remove('buttonChoice');
    })

    oPlayerTwo.addEventListener('click', () => {
        playerOneChoice = 'X';
        playerTwoChoice = 'O';
        oPlayerTwo.classList.add('buttonChoice');
        xPlayerOne.classList.add('buttonChoice');
        xPlayerTwo.classList.remove('buttonChoice');
        oPlayerOne.classList.remove('buttonChoice');
    })



    //adding info for the players
    startButton.addEventListener('click', (e) => {
        //error logic
        if (playerOneInput.value === '' || playerTwoInput.value === '') {
            return;
        } else if (playerOneChoice === '' || playerTwoChoice === '') {
            return;
        } else {
            playerOneName.textContent = playerOneInput.value.toUpperCase();
            playerTwoName.textContent = playerTwoInput.value.toUpperCase();
        }


        playerOne.score = 0;
        playerTwo.score = 0;
        playerOneScore.textContent = `Score:${playerOne.score}`;
        playerTwoScore.textContent = `Score:${playerTwo.score}`;
        resetAll();
        click = false;

        //hide the menu
        form.classList.add('menu-display-none');
        form.classList.remove('menu-display');
    })

    //when click on the player button click event fires
    playerBtnChoice.addEventListener('click', () => {
        //hide the whole screen
        againstWho.classList.remove('vs-who-display');
        againstWho.classList.add('vs-who-display-none');
        //show the player menu to put name and the choice of x,o
        form.classList.add('menu-display');
        form.classList.remove('menu-display-none');


    })


    // to know wether the window is clicked once or not
    let click = false;
    //to know wether the button is clicked after one of the player is win over three rounds
    window.addEventListener('click', () => {
        if (!click) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {
                if (playerOne.score > playerTwo.score) {
                    whoWins.textContent = `The winner is ${playerOneName.textContent} 
                    Press the restart game to play again`;
                } else {
                    whoWins.textContent = `The winner is ${playerTwoName.textContent} 
                    Press the restart game to play again`;
                }
                click = true;
                winner = true;

            }
        }
    })



    //public


    //the main game logic
    let gameLogic = () => {

        AllTicBtn.forEach((button) => {
            button.addEventListener('click', (e) => {
                    if (e.target.id === 'zero-zero') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[0][0] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[0][0] = playerOneChoice;

                                        if (computerChoice !== '') {
                                                XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }

                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[0][0] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'zero-one') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[0][1] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[0][1] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }

                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[0][1] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'zero-two') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[0][2] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[0][2] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[0][2] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'one-zero') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[1][0] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[1][0] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[1][0] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'one-one') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[1][1] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[1][1] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[1][1] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'one-two') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[1][2] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[1][2] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[1][2] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'two-zero') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[2][0] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[2][0] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[2][0] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'two-one') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[2][1] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[2][1] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[2][1] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                    if (e.target.id === 'two-two') {

                        if (playerOne.score >= 3 || playerTwo.score >= 3) {
                            return;
                        } else {
                            if (!winner) {
                                if (XOArray[2][2] === '') {
                                    tieCounter += 1;
                                    if (playerOne.clicked === true) {
                                        XOArray[2][2] = playerOneChoice;

                                        if (computerChoice !== '') {
                                            XOArray[generateRandom(3)][generateRandom(3)] = computerChoice;
                                        } else {
                                            playerOne.clicked = false;
                                            playerTwo.clicked = true;
                                        }
                                        displayBoard();

                                    } else if (playerTwo.clicked === true) {
                                        XOArray[2][2] = playerTwoChoice;
                                        //add style to the x and the o 

                                        playerTwo.clicked = false;
                                        playerOne.clicked = true;
                                        displayBoard();
                                    }
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                        }

                    }

                }) //end buttons event
        })

    }


    formButton.addEventListener('click', () => {
        form.classList.add('menu-display');
        form.classList.remove('menu-display-none');
    })

    resetButton.addEventListener('click', () => {
        if (playerOne.score >= 3 || playerTwo.score >= 3) {
            return;
        } else {
            resetAll();

        }
    })



    let gameOver = () => {
            //loop in every button in the DOM
            allButtons.forEach((btn) => {
                    //add click event to every button
                    btn.addEventListener('click', function(e) {

                            if (playerOne.score <= 3 || playerTwo.score <= 3) {
                                if (winner === false) {

                                    outer: for (let i = 0; i < XOArray.length; i++) {

                                            for (let j = 0; j < XOArray.length; j++) {

                                                //row win
                                                if (XOArray[i][j] === XOArray[i][j + 1] && XOArray[i][j] === XOArray[i][j - 1]) {
                                                    if (XOArray[i][j] !== '') {
                                                        if (XOArray[i][j] === playerOneChoice) {
                                                            whoWins.textContent = `${playerOneName.textContent} wins`;
                                                            playerOne.score += 1;
                                                            playerOneScore.textContent = `Score:${playerOne.score}`;

                                                        } else if (XOArray[i][j] === playerTwoChoice) {
                                                            whoWins.textContent = `${playerTwoName.textContent} wins`;
                                                            playerTwo.score += 1;
                                                            playerTwoScore.textContent = `Score:${playerTwo.score}`;

                                                        }
                                                        winner = true;
                                                    }
                                                }


                                                //column win
                                                if (XOArray[1][j] === XOArray[0][j] && XOArray[1][j] === XOArray[2][j]) {
                                                    if (XOArray[1][j] !== '') {
                                                        if (XOArray[1][j] === playerOneChoice) {
                                                            whoWins.textContent = `${playerOneName.textContent} wins`;
                                                            playerOne.score += 1;
                                                            playerOneScore.textContent = `Score:${playerOne.score}`;
                                                            break outer;
                                                        } else if (XOArray[1][j] === playerTwoChoice) {
                                                            whoWins.textContent = `${playerTwoName.textContent} wins`;
                                                            playerTwo.score += 1;
                                                            playerTwoScore.textContent = `Score:${playerTwo.score}`;
                                                            break outer;
                                                        }
                                                        winner = true;
                                                    }
                                                }


                                            } //inner for loop

                                        } //outer for loop

                                    //x wins
                                        if (XOArray[1][1] === XOArray[0][0] && XOArray[1][1] === XOArray[2][2]) {
                                            if (XOArray[0][0] !== '' && XOArray[1][1] !== '' && XOArray[2][2] !== '') {
                                                if (XOArray[1][1] === playerOneChoice) {
                                                    whoWins.textContent = `${playerOneName.textContent} wins`;
                                                    playerOne.score += 1;
                                                    playerOneScore.textContent = `Score:${playerOne.score}`;
                                                } else if (XOArray[1][1] === playerTwoChoice) {
                                                    whoWins.textContent = `${playerTwoName.textContent} wins`;
                                                    playerTwo.score += 1;
                                                    playerTwoScore.textContent = `Score:${playerTwo.score}`;
                                                }
                                                winner = true;
                                            }
                                        }

                                        //reverse x wins
                                    if (XOArray[1][1] === XOArray[0][2] && XOArray[1][1] === XOArray[2][0]) {
                                        if (XOArray[0][2] !== '' && XOArray[1][1] !== '' && XOArray[2][0] !== '') {
                                            if (XOArray[1][1] === playerOneChoice) {
                                                whoWins.textContent = `${playerOneName.textContent} wins`;
                                                playerOne.score += 1;
                                                playerOneScore.textContent = `Score:${playerOne.score}`;
                                            } else if (XOArray[1][1] === playerTwoChoice) {
                                                whoWins.textContent = `${playerTwoName.textContent} wins`;
                                                playerTwo.score += 1;
                                                playerTwoScore.textContent = `Score:${playerTwo.score}`;
                                            }
                                            winner = true;
                                        }
                                    }

                                    //tie
                                    if (tieCounter >= 9) {
                                        if (!winner) {
                                            whoWins.textContent = `Tie`;
                                            winner = true;
                                        }
                                    }


                                } //end if winner false
                            }
                        }) //end event lisener
                }) //end for each
        } //end function

    //function to reset the game
    let resetAll = () => {
        for (let i = 0; i < XOArray.length; i++) {
            for (let j = 0; j < XOArray.length; j++) {
                XOArray[i][j] = '';
                allButtons.forEach((btn) => {
                    btn.textContent = '';
                })
            }
        }
        winner = false;
        tieCounter = 0;
        whoWins.textContent = '';
    }

    //generate random number from 0 to the max number
    let generateRandom = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let displayBoard = () => {
        for (let i = 0; i < XOArray.length; i++) {
           

            for (let j = 0; j < XOArray.length; j++) {
                if (XOArray[i][j] !== '') {
                    if (i === 0 && j === 0) {
                        zeroZero.textContent = XOArray[0][0];
                        if (XOArray[0][0] === 'O') {
                            zeroZero.classList.add('o');
                            zeroZero.classList.remove('x');
                        } else if (XOArray[0][0] === 'X') {
                            zeroZero.classList.add('x');
                            zeroZero.classList.remove('o');
                        }
                    }
                    if (i === 0 && j === 1) {
                        zeroOne.textContent = XOArray[0][1];
                        if (XOArray[0][1] === 'O') {
                            zeroOne.classList.add('o');
                            zeroOne.classList.remove('x');
                        } else if (XOArray[0][1] === 'X') {
                            zeroOne.classList.add('x');
                            zeroOne.classList.remove('o');
                        }

                    }
                    if (i === 0 && j === 2) {
                        zeroTwo.textContent = XOArray[0][2];
                        if (XOArray[0][2] === 'O') {
                            zeroTwo.classList.add('o');
                            zeroTwo.classList.remove('x');
                        } else if (XOArray[0][2] === 'X') {
                            zeroTwo.classList.add('x');
                            zeroTwo.classList.remove('o');
                        }

                    }
                    if (i === 1 && j === 0) {
                        oneZero.textContent = XOArray[1][0];
                        if (XOArray[1][0] === 'O') {
                            oneZero.classList.add('o');
                            oneZero.classList.remove('x');
                        } else if (XOArray[1][0] === 'X') {
                            oneZero.classList.add('x');
                            oneZero.classList.remove('o');
                        }

                    }
                    if (i === 1 && j === 1) {
                        oneOne.textContent = XOArray[1][1];
                        if (XOArray[1][1] === 'O') {
                            oneOne.classList.add('o');
                            oneOne.classList.remove('x');
                        } else if (XOArray[1][1] === 'X') {
                            oneOne.classList.add('x');
                            oneOne.classList.remove('o');
                        }

                    }
                    if (i === 1 && j === 2) {
                        oneTwo.textContent = XOArray[1][2];
                        if (XOArray[1][2] === 'O') {
                            oneTwo.classList.add('o');
                            oneTwo.classList.remove('x');
                        } else if (XOArray[1][2] === 'X') {
                            oneTwo.classList.add('x');
                            oneTwo.classList.remove('o');
                        }

                    }
                    if (i === 2 && j === 0) {
                        twoZero.textContent = XOArray[2][0];
                        if (XOArray[2][0] === 'O') {
                            twoZero.classList.add('o');
                            twoZero.classList.remove('x');
                        } else if (XOArray[2][0] === 'X') {
                            twoZero.classList.add('x');
                            twoZero.classList.remove('o');
                        }

                    }
                    if (i === 2 && j === 1) {
                        twoOne.textContent = XOArray[2][1];
                        if (XOArray[2][1] === 'O') {
                            twoOne.classList.add('o');
                            twoOne.classList.remove('x');
                        } else if (XOArray[2][1] === 'X') {
                            twoOne.classList.add('x');
                            twoOne.classList.remove('o');
                        }

                    }
                    if (i === 2 && j === 2) {
                        twoTwo.textContent = XOArray[2][2];
                        if (XOArray[2][2] === 'O') {
                            twoTwo.classList.add('o');
                            twoTwo.classList.remove('x');
                        } else if (XOArray[2][2] === 'X') {
                            twoTwo.classList.add('x');
                            twoTwo.classList.remove('o');
                        }

                    }

                }
            }
        }
    }

    return {
        gameLogic,
        gameOver
    };
})();

displayGame.gameLogic();
displayGame.gameOver();