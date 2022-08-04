
const Player = (name) => {
	return {name};
};


//hmtl components
const mainBoard = document.querySelector('#mainBoard');
const newGameBtn = document.querySelector('#newGameBtn');
const cell = document.querySelectorAll('#cellId');
const modal = document.querySelector('#mainModal')


const gameBoard = (() => {
	// board = ['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O'];
	board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

	var playerSide = ['X', 'O'];

	function getCellValue(index) {
		return board[index];
	}

	function setCellValue(index, value) {
		board[index] = value;
	}

	function getGameBoard(){
		return board;
	}

	return {getGameBoard, getCellValue, setCellValue};
})();


const gameController = (() => {

	var whoIsPlaying = null;

	const playerOne = {
		value: 'X',
		player: null
	}

	const playerTwo = {
		value: 'O',
		player: null
	}


	function renderBoardValues() {
		mainBoard.innerHTML = '';

		gameBoard.getGameBoard().forEach((item, index) => {
			const cell = document.createElement('div')
			cell.classList.add('cell');
			cell.setAttribute('id', 'cellId'); 
			cell.textContent = item;
			mainBoard.appendChild(cell);
		});
	}

	function getPLayers(){
		return [ playerOne, playerTwo ];
	}

	function setPlayers(p1, p2) {
		playerOne.player = p1;
		playerTwo.player = p2;
	}

	function getWhoIsPlaying(){
		return whoIsPlaying;
	}

	function setWhoIsPlaying(player){
		whoIsPlaying = player;
	}

	const start = () => {
		renderBoardValues();

	};

	return {start, setPlayers, getPLayers, setWhoIsPlaying, getWhoIsPlaying};
})();


newGameBtn.addEventListener('click', function(){
	gameController.start();
	modal.style.display = "block";

});

mainBoard.addEventListener('click', function (e){
	if (e.target.classList.contains('cell')) {
		gameController.setPlayers(Player('felipe'),Player('gabi'));
		gameController.setWhoIsPlaying(gameController.getPLayers()[0]);
		e.target.innerHTML = gameController.getWhoIsPlaying().value;
    }
});







