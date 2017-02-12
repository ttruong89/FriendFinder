// Routing friends data.
var friendData = require('../data/friends.js');

// API GET Requests.
module.exports = function (app) {
	// GET
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});
	// POST request based on user input.
	app.post('/api/friends', function(req, res){
		var newFriend = req.body;
		// Loop through user selection index values. 
		for(var i = 0; i < newFriend.scores.length; i++) { 
			// If user selects 1, give a value of 1 to newFriend score index.
			if(newFriend.scores[i] == "1 (Strongly Disagree)") {
				newFriend.scores[i] = 1;
			// If user selects 5, give a value of 5 to newFriend score index.
			} else if(newFriend.scores[i] == "5 (Strongly Agree)") {
				newFriend.scores[i] = 5;
			} else {
			// Otherwise, parse the other scores besides 1 or 5.
				newFriend.scores[i] = parseInt(newFriend.scores[i]);
			};
		};
		// Set a variable of differences array.
		var differencesArray = [];
		// Loop through the friends array in data.
		for(var i = 0; i < friendData.length; i++) {

			var comparedFriend = friendData[i];
			var totalDifference = 0;
			// Loop through the compared friend's scores.
			for(var k = 0; k < comparedFriend.scores.length; k++) {
				var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
				totalDifference += differenceOneScore;
			};

			differencesArray[i] = totalDifference;
		};

		var bestFriendNum = differencesArray[0];
		var bestFriendIndex = 0;
		// Loop through the differences array.
		for(var i = 1; i < differencesArray.length; i++) {
			if(differencesArray[i] < bestFriendNum) {
				bestFriendNum = differencesArray[i];
				bestFriendIndex = i;
			};
		};

		friendData.push(newFriend);

		res.json(friendData[bestFriendIndex]);
	});
};