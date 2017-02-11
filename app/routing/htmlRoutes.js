// Include path package to get the correct file path for our html.
var path = require("path");

// Routing...

module.exports = function(app) {
	// HTML GET Requests
	// GET survey.html page.
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});
	// If no matching route is found default to home.
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
}; // Close module exports.

