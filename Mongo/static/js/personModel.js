/**
 * Created by oscar on 11/9/15.
 */
// This is to create a data model
var mongoose = require("mongoose");

var personSchema = mongoose.Schema({
    id: Number,
    name: String,
    surname: String
});

var Person = mongoose.model("Person", personSchema);

// End of Person data model

module.exports = Person;