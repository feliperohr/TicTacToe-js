
const Player = (name, playerValue) => {

	return {name, playerValue};
}


//hmtl components
const mainBoard = document.querySelector('#mainBoard');
const cell = document.querySelectorAll('#cellId');

//default buttons
const newGameBtn = document.querySelector('#newGameBtn');
const endGameBtn = document.querySelector('#endGameBtn');

//modals
const modal = document.querySelector('#mainModal');
const modalContent = document.querySelector('#modalContent');
const saveNewPlayers = document.querySelector('#modalButton');

//players
const inputPlayerOne = document.querySelector('#playerOneName');
const inputPlayerTwo = document.querySelector('#playerTwoName');
const playersBoardDisplay = document.querySelector('#playersBoardDisplay');
const playerOneNameDisplay = document.querySelector('#playerOneNameDisplay');
const playerTwoNameDisplay = document.querySelector('#playerTwoNameDisplay');




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

	const endBoard = () => {
		mainBoard.classList.remove('active');

		gameBoard.getGameBoard().forEach((item, index) => {
			
			cell[index].classList.remove('active');
			cell[index].textContent = "";
		});
		
	};

	const renderPlayerBoardValues = () => {
		playerOneNameDisplay.innerHTML = playerOne.name;
		playerTwoNameDisplay.innerHTML = playerTwo.name;

	};

	const getPLayers = () => [ playerOne, playerTwo ];

	const setPlayers = (p1, p2) => {
		playerOne = p1;
		playerTwo = p2;
	}

	const getWhoIsPlaying = () => whoIsPlaying;
	

	const setWhoIsPlaying = (player) => whoIsPlaying = player;

	const startGame = () => {
		renderPlayerBoardValues();
		renderBoardValues();
	};

	const endGame = () => {
		endBoard();
	};

	return {startGame, endGame, setPlayers, getPLayers, setWhoIsPlaying, getWhoIsPlaying};
})();


newGameBtn.addEventListener('click', function(){
	openPlayersModalWindow();
});

endGameBtn.addEventListener('click',(e) => {
	gameController.endGame();
	newGameBtn.classList.remove('disable');
	endGameBtn.classList.add('disable');
	playersBoardDisplay.classList.add('disable');
});

mainBoard.addEventListener('click', function (e){
	if (e.target.classList.contains('cell')) {
		gameController.setWhoIsPlaying(gameController.getPLayers()[0]);
		e.target.innerHTML = gameController.getWhoIsPlaying().playerValue;
    }
});

saveNewPlayers.addEventListener('click', () => {
	let p1 = inputPlayerOne.value;
	let p2 = inputPlayerTwo.value;
	if( (p1.length === 0) || (p2.length === 0) || p1 === p2){
		alert('Each Player need a not blank and unique name.')
	} else{

		gameController.setPlayers(Player(p1, 'X'), Player(p2, 'O'));
		
		closePlayersModalWindow();
		inputPlayerOne.value = "";
		inputPlayerTwo.value = "";

		
		//start game
		gameController.startGame();

		//disable button
		newGameBtn.classList.add('disable');
		//enable button
		endGameBtn.classList.remove('disable');
		//enable players gameboard
		playersBoardDisplay.classList.remove('disable');

	}
})

//modals
const openPlayersModalWindow = () => {
	modal.classList.add('active');
	modalContent.classList.add('active');
}

const closePlayersModalWindow = () => {
	modal.classList.remove('active');
	modalContent.classList.remove('active');
}

window.addEventListener('keydown', function (e){
	if (e.key === 'Escape') closePlayersModalWindow();
});

modal.addEventListener('click', (e) => {
	closePlayersModalWindow();
});










