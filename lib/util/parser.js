
var fs = require('fs')
module.exports = {
	parse: function(configPath)
	{
		try{
			fs.readFile(
				configPath,
				function (err, data)
				{
					if (err)
					{
						throw err;
					}
					return JSON.parse(data.toString());
				}
			);
		}
		catch(err)
		{
			console.log(err);
		}
	}
}