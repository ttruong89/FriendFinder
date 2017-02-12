// DEPENDENCIES
// NPM Packages needed for this assignment.
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
var app = express();

var PORT = process.env.PORT || 3000;

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// Mapping out routes.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// Message to show app listening on PORT...
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});