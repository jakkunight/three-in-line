const terminal = require("./terminal.js");

const printBorders = async () => {
	try{
		terminal.clear();
		for(let i = 1; i < terminal.width; i++){
			terminal.moveTo(i, 1);
			terminal("-");
			terminal.moveTo(i, terminal.height);
			terminal("-");
		}
		for(let i = 1; i < terminal.height; i++){
			terminal.moveTo(1, i);
			terminal("|");
			terminal.moveTo(terminal.width, i);
			terminal("|");
		}
		terminal.moveTo(1, 1);
		terminal("+");
		terminal.moveTo(terminal.width, 1);
		terminal("+");
		terminal.moveTo(1, terminal.height);
		terminal("+");
		terminal.moveTo(terminal.width, terminal.height);
		terminal("+");
		terminal.moveTo(terminal.width, terminal.height);
		terminal("+");
		// Prints the board:
			for(let i = 3; i < 3 + 11; i++){
				terminal.moveTo(i, 6);
				terminal("-");
				terminal.moveTo(i, 10);
				terminal("-");
			}
			for(let i = 3; i < 3 + 11; i++){
				terminal.moveTo(6, i);
				terminal("|");
				terminal.moveTo(10, i);
				terminal("|");
			}
			terminal.moveTo(6, 10);
			terminal("+");
			terminal.moveTo(10, 6);
			terminal("+");
			terminal.moveTo(6, 6);
			terminal("+");
			terminal.moveTo(10, 10);
			terminal("+");
			terminal.moveTo(10, 10);
			terminal("+");
	}catch(error){
		console.error(error);
		throw new Error(error);
	}
};

module.exports = printBorders;
