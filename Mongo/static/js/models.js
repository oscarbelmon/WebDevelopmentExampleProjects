/**
 * Created by oscar on 11/9/15.
 */
// This is to create a data model
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/people");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(callback) {
    console.log("Connection to the db established.");
});


var personSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String
});

var Person = mongoose.model("Person", personSchema);

// End of Person data model

module.exports = Person;