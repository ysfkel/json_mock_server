var jsonServer = require('json-server');

var server = jsonServer.create(); // Returns an Express server
var router = jsonServer.router('./mock/data/db.json'); // Returns an Express router
//var router2 = jsonServer.router('db.users.json'); // Returns an Express router
var middlewares = jsonServer.defaults();

server.use(middlewares); // logger, static and cors middlewares
server.use(router); // Mount router on '/'
//server.use(router2); // Mount router on '/'

var env = process.env.NODE_ENV;


server.listen(5000, function() {
    console.log('started..')
});


process.on('exit', function() {
    console.log('about to exit code..')
})