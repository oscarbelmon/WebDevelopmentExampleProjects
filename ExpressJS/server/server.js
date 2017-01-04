var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../node_modules"));
app.use(express.static(__dirname + '/public'));

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

app.get('/', function (req, res) {
    res.json(people);
});

var port = 3000;
var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port);
});
