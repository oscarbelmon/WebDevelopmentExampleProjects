/**
 * Created by oscar on 3/01/16.
 */
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/catalog");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error."));
db.on("open", function () {
    console.log("Mongodb connected");
});

//mongoose.connect("mongodb://localhost/catalog", function () {
//    console.log("Mongodb connected");
//});

module.exports = mongoose;