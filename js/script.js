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


const Player = (name,score,choice,clicked)=>{
	//private

	//public
	return {name,score,choice,clicked};
}

const displayGame = (() =>{
	//private
	let playerName = '';
	let playerScore = 0;
	let playerOne = Player('player1',playerScore,'x',true);
	let playerTwo = Player('player2',playerScore,'o',false);
	let zeroZero = document.getElementById('zero-zero');
	let zeroOne = document.getElementById('zero-one');
	let zeroTwo = document.getElementById('zero-two');
	let oneZero = document.getElementById('one-zero');
	let oneOne = document.getElementById('one-one');
	let oneTwo = document.getElementById('one-two');
	let twoZero = document.getElementById('two-zero');
	let twoOne = document.getElementById('two-one');
	let twoTwo = document.getElementById('two-two');
	let resetButton = document.getElementById('reset');
	const gameButtons = document.getElementById('ticBtns');
	const allButtons = gameButtons.querySelectorAll('button');

	
		

	//public
	
		
	

	let gameLogic = ()=>{

		zeroZero.addEventListener('click',function(e){
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
			
			
		})

		zeroOne.addEventListener('click',function(e){
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
		})

		zeroTwo.addEventListener('click',function(e){
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
		})

		oneZero.addEventListener('click',function(e){
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
		})

		oneOne.addEventListener('click',function(e){
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
		})

		oneTwo.addEventListener('click',function(e){
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
		})

		twoZero.addEventListener('click',function(e){
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
		})

		twoOne.addEventListener('click',function(e){
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
		})

		twoTwo.addEventListener('click',function(e){//
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
		})
	}

	reset.addEventListener('click',function(){
		for(let i=0;i<GameBoard.board.length;i++){
			for(let j=0;j<GameBoard.board.length;j++){
				GameBoard.board[i][j] = '';
				allButtons.forEach((btn)=>{
					btn.textContent = '';
				})

			}
		}
	})

	let display = ()=>{
		allButtons.forEach((btn)=>{
			btn.addEventListener('click',function(e){
					for(let i=0;i<GameBoard.board.length;i++){
					console.log(GameBoard.board[i])
				}
			})
		})
	}

		


	return {gameLogic,display};
})();

displayGame.gameLogic();
displayGame.display();




