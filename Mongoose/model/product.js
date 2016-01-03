/**
 * Created by oscar on 3/01/16.
 */
var db = require("./db");

var Product = db.model('Product', {
    id: {type: String, required: true},
    name: {type: String, require: true},
    price: {type: Number, require: true}
});

module.exports = Product;