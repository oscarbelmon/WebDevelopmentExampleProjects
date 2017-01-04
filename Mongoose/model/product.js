var db = require("./db");

var Product = db.model('Product', {
    id: {type: String, required: true},
    name: {type: String, require: true},
    price: {type: Number, require: true}
});

module.exports = Product;
