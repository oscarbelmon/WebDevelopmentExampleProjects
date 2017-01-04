/**
 * Created by oscar on 10/9/15.
 */
var http = require('http');
var static = require('node-static');

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

var file = new static.Server(__dirname + '/../../public');
var port = 3000;

http.createServer(function(req, res) {
    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(people));
            break;
        default:
            file.serve(req, res);
            break;
    }
}).listen(port);


console.log('Server running at http://127.0.0.1:' + port);
