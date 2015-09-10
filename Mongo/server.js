/**
 * Created by oscar on 10/09/15.
 */

var express = require("express");
var app = express();

// This is to manage the DB connection
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/people");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(callback) {
    console.log("Connection to the db established.");
});

var personSchema = mongoose.Schema({
    name: String,
    surname: String
});

var Person = mongoose.model("Person", personSchema);

// End of DB management

app.use(express.static("bower_components"));
app.use(express.static("Mongo/static"));

//var people = [
//    {
//        name:"Oscar",
//        surname:"Belmonte"
//    },
//    {
//        name:"María del Carmen",
//        surname:"Erdozain"
//    },
//    {
//        name:"Martín",
//        surname:"Belmonte"
//    },
//    {
//        name:"Gonzalo",
//        surname:"Belmonte"
//    }
//];

var people = {};
Person.find(function(error, _people) {
    if(error) return console.error(error);
    console.log(_people);
    people = _people;
});

app.get('/', function (req, res) {
    res.json(people);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
