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

const displayGame = (() => {
    //private
    let playerName = '';
    let tieCounter = 0;
    let playerOneName = document.getElementById('playerOneName');
    let playerTwoName = document.getElementById('playerTwoName');
    const playerOneScore = document.getElementById('playerOneScore');
    const playerTwoScore = document.getElementById('playerTwoScore');
    const zeroZero = document.getElementById('zero-zero');
    const zeroOne = document.getElementById('zero-one');
    const zeroTwo = document.getElementById('zero-two');
    const oneZero = document.getElementById('one-zero');
    const oneOne = document.getElementById('one-one');
    const oneTwo = document.getElementById('one-two');
    const twoZero = document.getElementById('two-zero');
    const twoOne = document.getElementById('two-one');
    const twoTwo = document.getElementById('two-two');
    const formButton = document.getElementById('start');
    const resetButton = document.getElementById('reset');
    const gameButtons = document.getElementById('ticBtns');
    const allButtons = gameButtons.querySelectorAll('button');
    const whoWins = document.getElementById('whoWins');
    const form = document.getElementById('menu');
    const playerOneInput = document.getElementById('playerInputNameOne');
    const playerTwoInput = document.getElementById('playerInputNameTwo');
    const startButton = document.getElementById('startBtn');;
    const xPlayerOne = document.getElementById('xBtnPlayerOne');
    const oPlayerOne = document.getElementById('oBtnPlayerOne');
    const xPlayerTwo = document.getElementById('xBtnPlayerTwo');
    const oPlayerTwo = document.getElementById('oBtnPlayerTwo');
    let playerOneChoice = '';
    let playerTwoChoice = '';
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
    startButton.addEventListener('click', () => {
        //error logic
        if (playerOneInput.value === '' || playerTwoInput.value === '') {
            return;
        } else if (playerOneChoice === '' || playerTwoChoice === '') {
            return;
        } else {
            playerOneName.textContent = playerOneInput.value.toUpperCase();
            playerTwoName.textContent = playerTwoInput.value.toUpperCase();
        }

        playerOneInput.value = '';
        playerTwoInput.value = '';
        playerOne.score = 0;
        playerTwo.score = 0;
        playerOneScore.textContent = `Score:${playerOne.score}`;
        playerTwoScore.textContent = `Score:${playerTwo.score}`;



        //hide the menu
        form.classList.add('menu-display-none');
        form.classList.remove('menu-display');
    })

    window.addEventListener('DOMContentLoaded', () => {
        form.classList.add('menu-display');
    })

    let playerOne = Player(playerOneName, playerOneChoice, true);
    let playerTwo = Player(playerTwoName, playerTwoChoice, false);
    let winner = false;



    //public


    //the main game logic
    let gameLogic = () => {

        zeroZero.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[0][0] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[0][0] = playerOneChoice;
                            zeroZero.textContent = GameBoard.board[0][0];
                            //add style to the x and the o

                            if (GameBoard.board[0][0] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[0][0] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[0][0] = playerTwoChoice;
                            zeroZero.textContent = GameBoard.board[0][0];
                            //add style to the x and the o 

                            if (GameBoard.board[0][0] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[0][0] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }


        })

        zeroOne.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[0][1] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[0][1] = playerOneChoice;
                            zeroOne.textContent = GameBoard.board[0][1];
                            //add style to the x and the o 

                            if (GameBoard.board[0][1] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[0][1] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[0][1] = playerTwoChoice;
                            zeroOne.textContent = GameBoard.board[0][1];

                            //add style to the x and the o 
                            if (GameBoard.board[0][1] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[0][1] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                }
            }

        })

        zeroTwo.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[0][2] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[0][2] = playerOneChoice;
                            zeroTwo.textContent = GameBoard.board[0][2];
                            //add style to the x and the o 

                            if (GameBoard.board[0][2] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[0][2] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[0][2] = playerTwoChoice;
                            zeroTwo.textContent = GameBoard.board[0][2];
                            //add style to the x and the o

                            if (GameBoard.board[0][2] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[0][2] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }


        })

        oneZero.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[1][0] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[1][0] = playerOneChoice;
                            oneZero.textContent = GameBoard.board[1][0];

                            //add style to the x and the o

                            if (GameBoard.board[1][0] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[1][0] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[1][0] = playerTwoChoice;
                            oneZero.textContent = GameBoard.board[1][0];
                            //add style to the x and the o

                            if (GameBoard.board[1][0] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[1][0] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }


        })

        oneOne.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {

                if (!winner) {
                    if (GameBoard.board[1][1] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[1][1] = playerOneChoice;
                            oneOne.textContent = GameBoard.board[1][1];
                            //add style to the x and the o

                            if (GameBoard.board[1][1] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[1][1] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[1][1] = playerTwoChoice;
                            oneOne.textContent = GameBoard.board[1][1];
                            //add style to the x and the o

                            if (GameBoard.board[1][1] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[1][1] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }

        })

        oneTwo.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[1][2] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[1][2] = playerOneChoice;
                            oneTwo.textContent = GameBoard.board[1][2];
                            //add style to the x and the o

                            if (GameBoard.board[1][2] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[1][2] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[1][2] = playerTwoChoice;
                            oneTwo.textContent = GameBoard.board[1][2];
                            //add style to the x and the o

                            if (GameBoard.board[1][2] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[1][2] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }
        })

        twoZero.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[2][0] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[2][0] = playerOneChoice;
                            twoZero.textContent = GameBoard.board[2][0];
                            //add style to the x and the o

                            if (GameBoard.board[2][0] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[2][0] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }

                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[2][0] = playerTwoChoice;
                            twoZero.textContent = GameBoard.board[2][0];
                            //add style to the x and the o

                            if (GameBoard.board[2][0] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[2][0] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }


        })

        twoOne.addEventListener('click', function(e) {
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[2][1] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[2][1] = playerOneChoice;
                            twoOne.textContent = GameBoard.board[2][1];
                            //add style to the x and the o

                            if (GameBoard.board[2][1] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[2][1] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[2][1] = playerTwoChoice;
                            twoOne.textContent = GameBoard.board[2][1];
                            //add style to the x and the o

                            if (GameBoard.board[2][1] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[2][1] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }


        })

        twoTwo.addEventListener('click', function(e) { //
            if (playerOne.score >= 3 || playerTwo.score >= 3) {

                return;
            } else {
                if (!winner) {
                    if (GameBoard.board[2][2] === '') {
                        if (playerOne.clicked === true) {
                            GameBoard.board[2][2] = playerOneChoice;
                            twoTwo.textContent = GameBoard.board[2][2];
                            //add style to the x and the o

                            if (GameBoard.board[2][2] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[2][2] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerOne.clicked = false;
                            playerTwo.clicked = true;

                        } else if (playerTwo.clicked === true) {
                            GameBoard.board[2][2] = playerTwoChoice;
                            twoTwo.textContent = GameBoard.board[2][2];
                            //add style to the x and the o

                            if (GameBoard.board[2][2] === 'O') {
                                e.target.classList.add('o');
                                e.target.classList.remove('x');
                            } else if (GameBoard.board[2][2] === 'X') {
                                e.target.classList.add('x');
                                e.target.classList.remove('o');
                            }


                            playerTwo.clicked = false;
                            playerOne.clicked = true;
                        }
                    } else {
                        return;
                    }
                } else {
                    return;
                }
            }


        })
    }

    let resetAll = () => {
        for (let i = 0; i < GameBoard.board.length; i++) {
            for (let j = 0; j < GameBoard.board.length; j++) {
                GameBoard.board[i][j] = '';
                allButtons.forEach((btn) => {
                    btn.textContent = '';
                })
            }
        }
        winner = false;
        tieCounter = 0;
        whoWins.textContent = '';
    }



    formButton.addEventListener('click', () => {
        form.classList.add('menu-display');
        form.classList.remove('menu-display-none');
    })

    resetButton.addEventListener('click', () => {
        resetAll();
    })



    let gameOver = () => {

        allButtons.forEach((btn) => {

            btn.addEventListener('click', function(e) {

                if (playerOne.score <= 3 || playerTwo.score <= 3) {
                    if (winner === false) {
                        tieCounter += 1;
                        outer: for (let i = 0; i < GameBoard.board.length; i++) {

                            for (let j = 0; j < GameBoard.board.length; j++) {

                                //row win
                                if (GameBoard.board[i][j] === GameBoard.board[i][j + 1] && GameBoard.board[i][j] === GameBoard.board[i][j - 1]) {
                                    if (GameBoard.board[i][j] !== '') {
                                        if (GameBoard.board[i][j] === playerOneChoice) {
                                            whoWins.textContent = `${playerOneName.textContent} wins`;
                                            playerOne.score += 1;
                                            playerOneScore.textContent = `Score:${playerOne.score}`;

                                        } else if (GameBoard.board[i][j] === playerTwoChoice) {
                                            whoWins.textContent = `${playerTwoName.textContent} wins`;
                                            playerTwo.score += 1;
                                            playerTwoScore.textContent = `Score:${playerTwo.score}`;

                                        }
                                        winner = true;
                                    }
                                }


                                //column win
                                if (GameBoard.board[1][j] === GameBoard.board[0][j] && GameBoard.board[1][j] === GameBoard.board[2][j]) {
                                    if (GameBoard.board[1][j] !== '') {
                                        if (GameBoard.board[1][j] === playerOneChoice) {
                                            whoWins.textContent = `${playerOneName.textContent} wins`;
                                            playerOne.score += 1;
                                            playerOneScore.textContent = `Score:${playerOne.score}`;
                                            break outer;
                                        } else if (GameBoard.board[1][j] === playerTwoChoice) {
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
                        if (GameBoard.board[1][1] === GameBoard.board[0][0] && GameBoard.board[1][1] === GameBoard.board[2][2]) {
                            if (GameBoard.board[0][0] !== '' && GameBoard.board[1][1] !== '' && GameBoard.board[2][2] !== '') {
                                if (GameBoard.board[1][1] === playerOneChoice) {
                                    whoWins.textContent = `${playerOneName.textContent} wins`;
                                    playerOne.score += 1;
                                    playerOneScore.textContent = `Score:${playerOne.score}`;
                                } else if (GameBoard.board[1][1] === playerTwoChoice) {
                                    whoWins.textContent = `${playerTwoName.textContent} wins`;
                                    playerTwo.score += 1;
                                    playerTwoScore.textContent = `Score:${playerTwo.score}`;
                                }
                                winner = true;
                            }
                        }

                        //reverse x wins
                        if (GameBoard.board[1][1] === GameBoard.board[0][2] && GameBoard.board[1][1] === GameBoard.board[2][0]) {
                            if (GameBoard.board[0][2] !== '' && GameBoard.board[1][1] !== '' && GameBoard.board[2][0] !== '') {
                                if (GameBoard.board[1][1] === playerOneChoice) {
                                    whoWins.textContent = `${playerOneName.textContent} wins`;
                                    playerOne.score += 1;
                                    playerOneScore.textContent = `Score:${playerOne.score}`;
                                } else if (GameBoard.board[1][1] === playerTwoChoice) {
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


                    } //if winner false
                }
            }) //end event lisener
        }) //end for each
    } //end function

    let theWinner = ()=>{
        if(playerOne.score > playerOne.score){
            console.log('winner is player one');
        }else{
            console.log('winenr is player two')
        }
    }
    return {
        gameLogic,
        gameOver,
        theWinner
    };
})();

displayGame.gameLogic();
displayGame.gameOver();
displayGame.theWinner();