var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port);
});
