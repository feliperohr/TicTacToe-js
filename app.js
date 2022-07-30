
const Player = (name) => {
	return {name};
};


//hmtl components
const mainBoard = document.querySelector('#mainBoard');
const newGameBtn = document.querySelector('#newGameBtn');
const cell = document.querySelectorAll('#cellId');


const gameBoard = (() => {
	board = ['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O'];

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

	var whoIsPlaying = 'null';

	const xPlayer = {
		value: 'X',
		player: null
	}

	const oPlayer = {
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
		return [ xPlayer, oPlayer ];
	}

	function setPlayers(p1, p2) {
		xPlayer.player = p1
		oPlayer.player = p2
	}

	function getWhoIsPlaying(){
		console.log(whoIsPlaying)
	}

	function setWhoIsPlaying(){

	}

	const start = () => {
		renderBoardValues();

	};

	return {start, setPlayers, getPLayers, setWhoIsPlaying, getWhoIsPlaying};
})();


newGameBtn.addEventListener('click', function(){
	gameController.start();
});

mainBoard.addEventListener('click', function (e){
	if (e.target.classList.contains('cell')) {
		gameController.getWhoIsPlaying();
      // console.log(e.target.innerHTML);
    }
});







