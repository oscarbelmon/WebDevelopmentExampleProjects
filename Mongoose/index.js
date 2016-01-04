var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var Product = require("./model/product")

app.use(bodyParser.json());
app.use(express.static(__dirname + "/bower_components"));
app.use(express.static(__dirname + '/public'));


var catalog = new Object();
catalog[0] = {id:0, name: "USB drive", price: 10};

app.get("/catalog/:id", function(req, res, next) {
    var idProduct = req.params.id;

    Product.findOne({id: idProduct}, function(err, product) {
        if(err) {
            res.status(500);
            next("Internal server error.");
        } else if(product == null) {
            res.status(404); // Not found
            next("No product with code " + idProduct + " found.");
        } else {
            res.status(200);
            res.json(product);
        }
    });
});

app.post("/catalog", function(req, res, next) {
    var idProduct = req.body.id;

    Product.find({id: idProduct}, function(err, product) {
        if(err) {
            next(err);
        }
        if(product.length > 0) {
            res.status(400); // Bad request.
            next("A product with code " + idProduct + " already exists.");
        } else {
            var product = new Product({
                id: idProduct,
                name: req.body.name,
                price: req.body.price
            });
            product.save(function(err, product) {
                if(err) {
                    return next(err);
                }
                res.status(201);
                res.json(product);
            });
        }
    });
});

app.put("/catalog/:id", function(req, res, next) {
    var idURI = req.params.id;
    var idProduct = req.body.id;
    if(idURI != idProduct) {
        res.status(400);
        next("The code of the product ("+ idProduct + ") and the code in the URI (" + idURI + ") do not match.")
    } else {
        var name = req.body.name;
        var price = req.body.price;
        Product.update({"id": idProduct, "name":name, "price":price}, function(err, result) {
            if(err) {
                next(err);
            } else if(result.nModified == 0) {
                res.status(404); // Not found.
                next("There is no product with code " + idProduct);
            } else {
                res.status(204); // No content.
                res.end();
            }
        });
    }
});

app.delete("/catalog/:id", function(req, res, next) {
    var idProduct = req.params.id;

    Product.remove({"id": idProduct}, function(err, result) {
        if(err) {
            res.status(500);
            next(err);
        } else if(result.result.n == 0) {
            res.status(404); // Not found.
            res.end();
        } else {
            res.status(204); // No content;
            res.end();
        }
    });
});

app.get("/catalog", function(req, res) {
    var stream = Product.find().stream();
    var results = {};
    stream.on('data', function(doc) {
        results[doc.id] = doc;
    }).on("error", function(err) {
        res.status(500);
        next(err);
    }).on('close', function() {
        res.status(200);
        res.json(results);
    });
});

var port = 3000;
var server = app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port);
});