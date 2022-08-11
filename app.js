
const Player = (name, playerSymbol) => {

	return {name, playerSymbol};
}


//hmtl components
const mainBoard = document.querySelector('#mainBoard');
const newGameBtn = document.querySelector('#newGameBtn');
const cell = document.querySelectorAll('#cellId');
const modal = document.querySelector('#mainModal');
const modalContent = document.querySelector('#modalContent');
const inputPlayerOne = document.querySelector('#playerOneName');
const inputPlayerTwo = document.querySelector('#playerTwoName');
const modalButton = document.querySelector('#modalButton');


const gameBoard = (() => {

	// const Cell = { 
	// 	value: "",
	// 	player: null,
	// 	position: null,
	// 	adjacentCells: []
	// };

	// board = ['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O'];
	board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
	// board = [ [' ', ' ', ' '], [' ', ' ', ' '] , [' ', ' ', ' '];


	var playerSide = ['X', 'O'];

	const getCellValue = (index) => board[index];

	const setCellValue = (index, value) => board[index] = value;

	const getGameBoard = () => board;

	return {getGameBoard, getCellValue, setCellValue};
})();


const gameController = (() => {

	var whoIsPlaying = null;

	var playerOne;

	var playerTwo;

	const renderBoardValues = () => {
		// mainBoard.innerHTML = '';

		mainBoard.classList.add('active');

		gameBoard.getGameBoard().forEach((item, index) => {
			// const cell = document.createElement('div')
			// cell.classList.add('cell');
			// cell.classList.add('flex');
			// cell.setAttribute('id', 'cellId'); 
			// cell.textContent = item;
			// mainBoard.appendChild(cell);
			cell[index].classList.add('active');
			cell[index].textContent = item;
		});
	}

	const getPLayers = () => [ playerOne, playerTwo ];

	const setPlayers = (p1, p2) => {
		playerOne = p1;
		playerTwo = p2;
	}

	const getWhoIsPlaying = () => whoIsPlaying;
	

	const setWhoIsPlaying = (player) => this.whoIsPlaying = player;

	const start = () => {
		renderBoardValues();
	};

	return {start, setPlayers, getPLayers, setWhoIsPlaying, getWhoIsPlaying};
})();

const openPlayersModalWindow = () => {
	modal.classList.add('active');
	modalContent.classList.add('active');
}

const closePlayersModalWindow = () => {
	modal.classList.remove('active');
	modalContent.classList.remove('active');
}

newGameBtn.addEventListener('click', function(){
	// gameController.start();
	openPlayersModalWindow();
});

mainBoard.addEventListener('click', function (e){
	if (e.target.classList.contains('cell')) {
		// e.target.innerHTML = 'X'
		// console.log(e.target.textContent);
		// gameController.setWhoIsPlaying(gameController.getPLayers()[0]);
		// e.target.innerHTML = gameController.getWhoIsPlaying().value;
    }
});

modalButton.addEventListener('click', () => {
	let p1 = inputPlayerOne.value;
	let p2 = inputPlayerTwo.value;
	if( (p1.length === 0 && p2.length === 0) || p1 === p2){
		alert('Each Player need a not blank and unique name.')
	} else{
		gameController.setPlayers(Player(p1, 'X'), Player(p2, 'O'));
		closePlayersModalWindow();
		newGameBtn.classList.add('disable');
		gameController.start();
	}
})


window.addEventListener('keydown', function (e){
	if (e.key === 'Escape') closePlayersModalWindow();
});

modal.addEventListener('click', (e) => {
	closePlayersModalWindow();
});








