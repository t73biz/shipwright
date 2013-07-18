var readline = require('readline'),
    rl = readline.createInterface({
		input    : process.stdin,
		output   : process.stdout,
		terminal : true
	});
var color = require('bash-color');
var help  = require('./design/help');
rl.setPrompt("hqs>");

var intro = function()
{
	var out =   "               "  + color.yellow("+---------------------------+")                         + "\n" +
	color.cyan(	"       .       ") + color.yellow("|") + "Shipwright CLI for Designer" + color.yellow("|") + "\n" +
	color.cyan(	"      /|       ") + color.yellow("|") + "(m)odel           (h)elp   " + color.yellow("|") + "\n" +
	color.cyan(	"     /_|       ") + color.yellow("|") + "(v)iew            (w)rite  " + color.yellow("|") + "\n" +
	color.red(  "   ____|____   ") + color.yellow("|") + "(c)ontroller      (p)review" + color.yellow("|") + "\n" +
	color.green("   |_o_o_o_/   ") + color.yellow("|") + "(s)etup           (q)uit   " + color.yellow("|") + "\n" +
	color.blue( "~~~~~~~~~~~~~~~") + color.yellow("+---------------------------+");

	console.log(out);
}

var isWritten = false;

var checkWritten = function()
{
	if(!isWritten && setup.isSetup)
	{
		rl.question(
			color.red('\nThe setup has not been written. Are you sure? (y/n)'),
			function(answer)
			{
				switch(answer)
				{
					case 'n':
						rl.prompt();
					break;
					default:
						rl.close();
					break;
				}
			}
		);
	}
	else
	{
		rl.close();
	}
}


var isSetup = false;
var setup = {};
var checkSetup = function()
{
	if(!isSetup || setup.length == 0)
	{
		console.log(color.yellow('\nSetup has not been completed. Please setup the project first.\n'));
	}
}


module.exports = {
	design:  function()
	{
		intro();
		checkSetup();
		rl.prompt();
		rl.on(
			'line',
			function(line)
			{
				switch(line.trim()) {
					case 'm':
						checkSetup();
					break;
					case 'v':
						checkSetup();
					break;
					case 'c':
						checkSetup();
					break;
					case 's':
						rl.question(
							'What is the project name?',
							function(answer)
							{
								 setup.projectName = answer;
								 rl.prompt();
							}
						);
					break;
					case 'h':
						help.display();
					break;
					case 'w':
						checkSetup();
					break;
					case 'p':
						checkSetup();
						setup.preview();
					break;
					case 'q':
						checkWritten();
					break;
					default:
						console.log('I do not understand `' + color.red(line.trim()) + '`');
					break;
				}
				rl.prompt();
			}
		).on(
			'close',
			function() {
				console.log('\nHave a great day!\n');
				process.exit(0);
			}
		);
	}
}

