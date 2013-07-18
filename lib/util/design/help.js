module.exports = {
	display : function()
	{
		var out =
					"Setup      - This command is used to set the intial config file and a few pieces of meta information for the project." + "\n" +
					"             Setup must be run first." + "\n" +
					"Model      - This command is used to design new models for the project." + "\n" +
					"View       - This command is used to design new views for the project, based on the controllers created." + "\n" +
					"Controller - This command is used to design new controllers for the project, based on the models created." + "\n" +
					"Write      - This command is used to write the models, views, and controllers to the config file set in the setup phase." + "\n" +
					"Preview    - This command is used to preview the config file before it's written." + "\n";
		console.log(out);
	}
}