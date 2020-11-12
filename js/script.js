const GameBoard = (()=>{
	//private

	//public
	let board = [
		['','',''],
		['','',''],
		['','','']
	];
		
	return {board};
})();


const Player = (name,choice,clicked)=>{
	//private

	//public
	let score = 0;
	return {name,score,choice,clicked};
}

const displayGame = (() =>{
	//private
	let playerName = '';
	let playerOne = Player('player1','x',true);
	let playerTwo = Player('player2','o',false);
	const playerOneName = document.getElementById('playerOneName');
	const playerTwoName = document.getElementById('playerTwoName');
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
	const resetButton = document.getElementById('reset');
	const gameButtons = document.getElementById('ticBtns');
	const allButtons = gameButtons.querySelectorAll('button');
	const whoWins = document.getElementById('whoWins');

	
		

	//public
	
		
	

	let gameLogic = ()=>{

		zeroZero.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[0][0] === ''){
				if(playerOne.clicked === true){
					GameBoard.board[0][0] = 'O';
					zeroZero.textContent = GameBoard.board[0][0];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[0][0] = 'X';
						zeroZero.textContent = GameBoard.board[0][0];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
			
			
		})

		zeroOne.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[0][1] === ''){
				if(playerOne.clicked === true){
					GameBoard.board[0][1] = 'O';
					zeroOne.textContent = GameBoard.board[0][1];
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
				}else if(playerTwo.clicked === true){
						GameBoard.board[0][1] = 'X';
						zeroOne.textContent = GameBoard.board[0][1];
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}
		})

		zeroTwo.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[0][2] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[0][2] = 'O';
					zeroTwo.textContent = GameBoard.board[0][2];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[0][2] = 'X';
						zeroTwo.textContent = GameBoard.board[0][2];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})

		oneZero.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[1][0] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[1][0] = 'O';
					oneZero.textContent = GameBoard.board[1][0];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[1][0] = 'X';
						oneZero.textContent = GameBoard.board[1][0];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})

		oneOne.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[1][1] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[1][1] = 'O';
					oneOne.textContent = GameBoard.board[1][1];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[1][1] = 'X';
						oneOne.textContent = GameBoard.board[1][1];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})

		oneTwo.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[1][2] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[1][2] = 'O';
					oneTwo.textContent = GameBoard.board[1][2];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[1][2] = 'X';
						oneTwo.textContent = GameBoard.board[1][2];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})

		twoZero.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[2][0] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[2][0] = 'O';
					twoZero.textContent = GameBoard.board[2][0];
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[2][0] = 'X';
						twoZero.textContent = GameBoard.board[2][0];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})

		twoOne.addEventListener('click',function(e){
			if(!winner){
				if(GameBoard.board[2][1] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[2][1] = 'O';
					twoOne.textContent = GameBoard.board[2][1];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[2][1] = 'X';
						twoOne.textContent = GameBoard.board[2][1];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})

		twoTwo.addEventListener('click',function(e){//
			if(!winner){
				if(GameBoard.board[2][2] === ''){
					if(playerOne.clicked === true){
					GameBoard.board[2][2] = 'O';
					twoTwo.textContent = GameBoard.board[2][2];
					
					playerOne.clicked = false;
					playerTwo.clicked = true;
					
					}else if(playerTwo.clicked === true){
						GameBoard.board[2][2] = 'X';
						twoTwo.textContent = GameBoard.board[2][2];
						
						playerTwo.clicked = false;
						playerOne.clicked = true;
					}
				}else{
					return;
				}
			}else{
				return;
			}
		})
	}

	let resetAll = ()=>{
		for(let i=0;i<GameBoard.board.length;i++){
			for(let j=0;j<GameBoard.board.length;j++){
				GameBoard.board[i][j] = '';
				allButtons.forEach((btn)=>{
						btn.textContent = '';
				})
			}
		}
		winner = false;
		whoWins.textContent = '';
	}

	reset.addEventListener('click',function(){
			resetAll();
	9})


	let winner = false;

	let gameOver = ()=>{
		allButtons.forEach((btn)=>{
			btn.addEventListener('click',function(e){
				
				//logic for row wins
				if(winner === false){
					if(e.target.parentElement.id === 'zero'){
						if(GameBoard.board[0][1] === GameBoard.board[0][0] && GameBoard.board[0][1] === GameBoard.board[0][2]){
							if(GameBoard.board[0][1] === 'X'){
								whoWins.textContent = 'Player one wins';
								playerOne.score += 1;
								playerOneScore.textContent = playerOne.score;
							}else if(GameBoard.board[0][1] === 'O'){
								whoWins.textContent = 'Player two wins';
								playerTwo.score += 1;
								playerTwoScore.textContent = playerTwo.score;
								
							}
							console.log('winner in the zero')
							winner = true;
						}
					}
				}

				if(winner === false){
					if(e.target.parentElement.id === 'one'){
						if(GameBoard.board[1][1] === GameBoard.board[1][0] && GameBoard.board[1][1] === GameBoard.board[1][2]){
							if(GameBoard.board[1][1] === 'X'){
								whoWins.textContent = 'Player one wins';
								playerOne.score += 1;
								playerOneScore.textContent = playerOne.score;
							}else if(GameBoard.board[1][1] === 'O'){
								whoWins.textContent = 'Player two wins';
								playerTwo.score += 1;
								playerTwoScore.textContent = playerTwo.score;
							}
							console.log('winner in the one')
							winner = true;

						}
					}
				}

				if(winner === false){
					if(e.target.parentElement.id === 'two'){
						if(GameBoard.board[2][1] === GameBoard.board[2][0] && GameBoard.board[2][1] === GameBoard.board[2][2]){
							if(GameBoard.board[2][1] === 'X'){
								whoWins.textContent = 'Player one wins';
								playerOne.score += 1;
								playerOneScore.textContent = playerOne.score;
							}else if(GameBoard.board[2][1] === 'O'){
								whoWins.textContent = 'Player two wins';
								playerTwo.score += 1;
								playerTwoScore.textContent = playerTwo.score;
							}
							console.log('winner in the two')
							winner = true;
						}
					}
				}

				//column logic

				if(winner === false){
					if(e.target.className === 'column1'){
						if(GameBoard.board[1][0] === GameBoard.board[0][0] && GameBoard.board[1][0] === GameBoard.board[2][0]){
							if(GameBoard.board[0][0] !== '' && GameBoard.board[1][0] !== '' && GameBoard.board[2][0] !== '') {
								if(GameBoard.board[1][0] === 'X'){
									whoWins.textContent = 'Player one wins';
									playerOne.score += 1;
									playerOneScore.textContent = playerOne.score;
								}else if(GameBoard.board[1][0] === 'O'){
									whoWins.textContent = 'player two wins';
									playerTwo.score += 1;
									playerTwoScore.textContent = playerTwo.score;
								}
								winner=true;
								console.log('winner in the col 1')
							}
						}
					}
				}

				if(winner === false){
					if(e.target.className === 'column2'){
						if(GameBoard.board[1][1] === GameBoard.board[0][1] && GameBoard.board[1][1] === GameBoard.board[2][1]){
							if(GameBoard.board[0][1] !== '' && GameBoard.board[1][1] !== '' && GameBoard.board[2][1] !== '') {
								if(GameBoard.board[1][1] === 'X'){
									whoWins.textContent = 'Player one wins';
									playerOne.score += 1;
									playerOneScore.textContent = playerOne.score;
								}else if(GameBoard.board[1][1] === 'O'){
									whoWins.textContent = 'Player two wins';
									playerTwo.score += 1;
									playerTwoScore.textContent = playerTwo.score;
								}
								winner=true;
								console.log('winner in the col 2')
							}
						}
					}
				}

				if(winner === false){
					if(e.target.className === 'column3'){
						if(GameBoard.board[1][2] === GameBoard.board[0][2] && GameBoard.board[1][2] === GameBoard.board[2][2]){
							if(GameBoard.board[0][2] !== '' && GameBoard.board[1][2] !== '' && GameBoard.board[2][2] !== '') {
								if(GameBoard.board[1][2] === 'X'){
									whoWins.textContent = 'Player one wins';
									playerOne.score += 1;
									playerOneScore.textContent = playerOne.score;

								}else if(GameBoard.board[1][2] === 'O'){
									whoWins.textContent = 'Player two wins';
									playerTwo.score += 1;
									playerTwoScore.textContent = playerTwo.score;
								}
								winner=true;
								console.log('winner in the col 3')
							}
						}
					}
				}

				//x logic
				if(winner === false){
					if(GameBoard.board[1][1] === GameBoard.board[0][0] && GameBoard.board[1][1] === GameBoard.board[2][2])
						if(GameBoard.board[1][1] !== '' && GameBoard.board[0][0] !== '' && GameBoard.board[2][2] !== ''){
							if(GameBoard.board[1][1] === 'X'){
								whoWins.textContent = 'Player one wins';
								playerOne.score += 1;
								playerOneScore.textContent = playerOne.score;
							}else if(GameBoard.board[1][1] === 'O'){
								whoWins.textContent = 'Player two wins';
								playerTwo.score += 1;
								playerTwoScore.textContent = playerTwo.score;
							}
							console.log('winner x');
							winner = true;
						}
				}

				if(winner === false){
					if(GameBoard.board[1][1] === GameBoard.board[0][2] && GameBoard.board[1][1] === GameBoard.board[2][0])
						if(GameBoard.board[0][2] !== '' && GameBoard.board[1][1] !== '' && GameBoard.board[2][0] !== ''){
							if(GameBoard.board[1][1] === 'X'){
								whoWins.textContent = 'Player one wins';
								playerOne.score += 1;
								playerOneScore.textContent = playerOne.score;
							}else if(GameBoard.board[1][1] === 'O'){
								whoWins.textContent = 'Player two wins';
								playerTwo.score += 1;
								playerTwoScore.textContent = playerTwo.score;
							}
							console.log('winner x2');
							winner = true;
						}
				}

			})
		})
	}

	return {gameLogic,gameOver};
})();

displayGame.gameLogic();
displayGame.gameOver();





