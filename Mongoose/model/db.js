/**
 * Created by oscar on 3/01/16.
 */
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/catalog", function () {
    console.log("Mongodb connected");
});

module.exports = mongoose;