var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + '/public'));


var catalog = new Object();
catalog[0] = {id:0, name: "USB drive", price: 10};

app.get("/catalog/:id", function(req, res, next) {
    var id = req.params.id;
    if(id in catalog) {
        res.json(catalog[id]);
    } else {
        res.status(404); // Not found.
        next("No product with code " + id + " found.");
    }
});

app.post("/catalog", function(req, res, next) {
    var idProduct = req.body.id;
    if(idProduct in catalog) {
        res.status(400); // Bad request.
        next("A product with code " + idProduct + " already exists.");
    } else {
        var name = req.body.name;
        var price = req.body.price;
        catalog[idProduct] = {"id":idProduct, "name": name, "price": price};
        res.status(201); // Created.
        res.end();
    }
});

app.put("/catalog/:id", function(req, res, next) {
    var idURI = req.params.id;
    var idProduct = req.body.id;
    if(idURI != idProduct) {
        res.status(400);
        next("The code of the product ("+ idProduct + ") and the code in the URI (" + idURI + ") do not match.")
    } else if(idURI in catalog) {
        var name = req.body.name;
        var price = req.body.price;
        catalog[idURI] = {"id":idURI, "name": name, "price": price};
        res.status(204); // No content.
        res.end();
    } else {
        res.status(400);
        next("There is no product with code " + idURI);
    }
});

app.delete("/catalog/:id", function(req, res, next) {
    var id = req.params.id;
    if(id in catalog) {
        delete catalog[id];
        res.send();
    } else {
        res.status(400); // Not found.
        next("No product with code " + id + " found.");
    }
});

app.get("/catalog", function(req, res) {
   res.json(catalog);
});

var port = 3000;
var server = app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:' + port);
});
