// Last character is not printed.
const terminal = require("./terminal.js");
const printBorders = require("./borders.js");

var turn = 0;
var winner = 0;

const cells = [
	{
		x: 4,
		y: 4
	},
	{
		x: 8,
		y: 4
	},
	{
		x: 12,
		y: 4
	},
	{
		x: 4,
		y: 8
	},
	{
		x: 8,
		y: 8
	},
	{
		x: 12,
		y: 8
	},
	{
		x: 4,
		y: 12
	},
	{
		x: 8,
		y: 12
	},
	{
		x: 12,
		y: 12
	}
];

var board = [
	0, 0, 0,
	0, 0, 0,
	0, 0, 0
];

const cleanup = () => {
	terminal.grabInput(false);
	terminal.hideCursor(false);
	terminal.clear();
	terminal.processExit(0);
};

const win = () => {
	for(let i = 0; i < 3; i++){
		if(board[i] + board[i + 1] + board[i + 2] == 3 || board[i] + board[i + 3] + board[i + 6] == 3){
			winner = 1;
		}
		if(board[i] + board[i + 1] + board[i + 2] == -3 || board[i] + board[i + 3] + board[i + 6] == -3){
			winner = -1;
		}
	}
	if(board[2] + board[4] + board[6] == 3 || board[0] + board[4] + board[8] == 3){
		winner = 1;
	}
	if(board[2] + board[4] + board[6] == -3 || board[0] + board[4] + board[8] == -3){
		winner = -1;
	}
	if(winner == 1){
		terminal.moveTo(20, 7);
		terminal("Player 'X' won! Press CTRL-C to exit.");
	}
	if(winner == -1){
		terminal.moveTo(20, 7);
		terminal("Player 'X' won! Press CTRL-C to exit.");
	}
};

const loop = () => {
	// Loop body:
	/*
		0, 1, 2,
		3, 4, 5,
		6, 7, 8
	*/
	// Display turn:
	terminal.moveTo(20, 5);
	terminal("Turn: " + turn);
	win();
	// Loop:
	setTimeout(loop, 0);
};

const inputHandler = (key) => {
	let cell = Number(key);
	if(isNaN(cell)){
		if(key == "CTRL_C"){
			cleanup();
		}
	}else{
		if(cell != 0 && board[cell - 1] == 0 && winner == 0){
			if(turn % 2 == 0){
				board[cell - 1] = 1;
				terminal.moveTo(cells[cell - 1].x, cells[cell - 1].y);
				terminal("X");
			}else{
				board[cell - 1] = -1;
				terminal.moveTo(cells[cell - 1].x, cells[cell - 1].y);
				terminal("O");
			}
			turn++;
		}
	}
};

const setup = () => {
	terminal.hideCursor();
	printBorders();
	// Prints game board:
	//terminal.moveTo(3,3);
	//terminal("Tres en Raya!");
	terminal.grabInput(true);
	terminal.on("key", inputHandler);
};

// Main code:
const main = async () => {
	try{
		// Setup:
		setup();
		loop();
	}catch(error){
		console.error(error);
		if(terminal){
			terminal.processExit(-1);
		}else{
			process.exit(-1);
		}
	}
};

main();
