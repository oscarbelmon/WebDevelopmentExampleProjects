/**
 * Created by oscar on 10/09/15.
 */

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../bower_components"));
app.use(express.static(__dirname + '/static'));

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
    //res.writeHead(200, {'Content-Type': 'application/json'});
    //res.end(JSON.stringify(people));
    res.json(people);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
