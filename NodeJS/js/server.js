/**
 * Created by oscar on 10/9/15.
 */
var http = require('http');
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


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(people));
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');
