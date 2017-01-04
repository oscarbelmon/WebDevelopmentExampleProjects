var express = require("express");
var app = express();

var Person = require("./static/js/models.js");

app.use(express.static("bower_components"));
app.use(express.static("Mongo/static"));

var people = {};

function getPeople() {
    Person.find(function(error, _people) {
        if(error) return console.error(error);
        people = _people;
    });
}

app.get('/', function (req, res) {
    getPeople();
    res.json(people);
});

app.delete("/remove/:id", function(req, res) {
    Person.remove({ id:req.params.id}, function(err, removed) {

    });
    getPeople();
    res.json(people);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
