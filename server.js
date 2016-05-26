var hapi = require('hapi');
var inert = require('inert');

var server = new hapi.Server();
server.connection({
    port: 'mongodb://admin:admin@ds051848.mlab.com:51848/rgdbb'
});

server.register(inert, function(err){

	server.route(
      [{method: 'GET',
      path: '/{param*}',
      config: {
      handler: {
				directory: {
					path: ['app', 'bower_components']
				}
		   }
    }}]);

	server.start(function () {
	    console.log('Server running at:', server.info.uri);
	});
});
