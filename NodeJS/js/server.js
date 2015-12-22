/**
 * Created by oscar on 10/9/15.
 */
var http = require('http');
var static = require('node-static');

var files = new(static.Server)();

var people = [
    {
        name:"Oscar",
        surname:"Belmonte"
    },
    {
        name:"María del Carmen",
        surname:"Erdozain"
    },
    {
        name:"Martín",
        surname:"Belmonte"
    },
    {
        name:"Gonzalo",
        surname:"Belmonte"
    }
];

//app.all('/', function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next();
//});

//http.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "X-Requested-With");
//    next();
//});

http.createServer(function (req, res) {
    res.writeHead("Access-Control-Allow-Origin", "*");
    //res.writeHead("Access-Control-Allow-Headers", "X-Requested-With");
    res.writeHead('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.writeHead("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Cache-Control");
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(people));
    //files.serve(req, res);
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');
