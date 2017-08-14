// get route with the url /api/friends which displays JSON data of 
// possible friends
var friendData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
});
 // post route /api/friends handle incoming survey results also 
// used for compatibility logic

app.post("/api/friends", function(req, res) {
       var newFriendScore = req.body.Scores;
       var match = 0;

    //    loop through the friends that have already been created
       for (var i = 0; i < friendData.length; i++) {
        //    loop through the new friend scores data
            for (var j = 0; j < newFriendScore.length; j++) {
        //  find the absolute difference between the two scores data
                var totalDifference = Math.abs(parseInt(friendData.Scores[i]) - parseInt(newFriendScore[j]));
            } 
        // if match of totalDifference is the most similiar then matching friendData's info goes to the modal
              
       }


       friendData.push(newFriendScore); 
    });
};

// var newFriend = req.body.Scores;
// var oldFriend = friendData.Scores[i];

// var compare = Math.max(newFriend.length, oldFriend.length);
// for (var i = 0; i< compare; i++){
//    var difference = Math.abs(newFriend[i] - oldFriend[i]);
//    if(difference <=)
// }

