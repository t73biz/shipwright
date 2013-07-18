#!/usr/bin/env node
var usageHelp = require('./lib/help/usage');
var builder   = require('./lib/util/builder');
var designer  = require('./lib/util/designer');
var parser    = require('./lib/util/parser');
var argv      = require('optimist')
	.usage(usageHelp.content)
	.options(
		'c',
		{
        	alias    : 'config',
	        describe : 'The configuration file to use for building'
    	}
    )
    .demand('c')
    .check(
    	function(argv)
    	{
    		var checkArc = argv._.indexOf('design');
    		var checkBld = argv._.indexOf('build');
    		if(checkArc == -1 && checkBld == -1)
    		{
   				return false;
    		}
			return true;
    	}
    )
	.argv;

switch(argv._[0])
{
	case "design":
		designer.design();
	break;

	case "build":
		configuration = parser.parse(argv.c);
		builder.build(configuration);
	break;
}