
const Player = (name) => {name};


//hmtl components
const mainBoard = document.querySelector('#mainBoard');
const newGameBtn = document.querySelector('#newGameBtn');
const cell = document.querySelectorAll('#cellId');
const modal = document.querySelector('#mainModal');
const modalContent = document.querySelector('#modalContent');



const gameBoard = (() => {
	// board = ['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O'];
	board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

	var playerSide = ['X', 'O'];

	const getCellValue = (index) => board[index];

	const setCellValue = (index, value) => board[index] = value;

	const getGameBoard = () => board;

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


	const renderBoardValues = () => {
		mainBoard.innerHTML = '';

		gameBoard.getGameBoard().forEach((item, index) => {
			const cell = document.createElement('div')
			cell.classList.add('cell');
			cell.classList.add('flex');
			cell.setAttribute('id', 'cellId'); 
			cell.textContent = item;
			mainBoard.appendChild(cell);
		});
	}

	const getPLayers = () => [ playerOne, playerTwo ];

	const setPlayers = (p1, p2) => {
		playerOne.player = p1;
		playerTwo.player = p2;
	}

	const getWhoIsPlaying = () => whoIsPlaying;
	

	const setWhoIsPlaying = (player) => whoIsPlaying = player;

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
		gameController.setPlayers(Player('felipe'),Player('gabi'));
		gameController.setWhoIsPlaying(gameController.getPLayers()[0]);
		e.target.innerHTML = gameController.getWhoIsPlaying().value;
    }
});


window.addEventListener('keydown', function (e){
	if (e.key === 'Escape') closePlayersModalWindow();
});

modal.addEventListener('click', (e) => {
	closePlayersModalWindow();
});








