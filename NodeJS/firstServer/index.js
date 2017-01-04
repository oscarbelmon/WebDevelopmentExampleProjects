/**
 * Created by oscar on 9/09/15.
 */
var http = require('http');
var port = 3000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:' + port);
