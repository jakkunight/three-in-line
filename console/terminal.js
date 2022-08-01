const termkit = require("terminal-kit");

// Detects the used terminal and configures the interface properly. Returns a new terminal hinstance.
var terminal = {};
termkit.getDetectedTerminal((error, detectedTerminal) => {
	if(error){
		throw new Error(error);
		process.exit(-1);
	}else{
		terminal = detectedTerminal;
	}
});

module.exports = terminal;
