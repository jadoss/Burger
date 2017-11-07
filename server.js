var express = require("express");
var bodyParser = require("body-parser");

// Import the model (cat.js) to use its database functions.
var burger = require("./models/burger.js");

var burgerController = require("./controllers/burgersController.js");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

app.use("/api/burgers", burgerController);

app.listen(port);