const GameBoard = (()=>{
	let myModule = {};
	//private
	let board = [
		['','',''],
		['','',''],
		['','','']
	]
	//public
	
		
	return myModule;
})();


const Player = (name,score)=>{
	//private

	//public

	return {name,score};
}

const displayGame = (() =>{
	let myModule = {};
	//private
	myModule.playerOne = Player('name',0);
	myModule.playerTwo = Player('name',0);
	//publice


	return myModule;
})();

