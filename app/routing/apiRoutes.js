// Routing to friends data.
var friendData = require("../data/friends.js");
var path = require("path");


// API GET Requests - when user visits a page.

var totalDifference = 0;

module.exports = function(app) {
	app.get("api/friends," function(req, res) {
		res.json(friends);
	});

// API Post Request handler.	
	app.post("/api/friends", function(req, res) {

		// Set object variable for friends match.
		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData = req.body;
		var usrName = usrData.name;
		var usrImage = usrData.images;
		var usrScores = usrData.scores;

		var totalDifference = 0; 
		// var friendDifference = 0;

		// Loop through the friends data array of objects to get each friend's scores.
		for(var i = 0; i < [friends].length-1; i++) {
			console.log(friends[i].name);
			totalDifference = 0;
		}
			// Loop through that friend's score and the user's score and calculate the absolute difference between the two and push that to the total difference variable.
			for(var j = 0; j < 10; j++) {
				// Calculate the difference between the scores and sum them into the totalDifference.
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(friends[i].scores[j]));
				// If the sum of the differences is less than the differences of the current best match.
				if (totalDifference <= greatMatch.friendDifference) {
					// Reset the bestMatch to be the new friend.
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;

				}
			}
		}

		friends.push(usrData);

		res.json(greatMatch);
	});
};