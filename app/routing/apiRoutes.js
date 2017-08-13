// get route with the url /api/friends which displays JSON data of 
// possible friends
var friendAnswers = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendAnswers);
});
 // post route /api/friends handle incoming survey results also 
// used for compatibility logic

app.post("/api/friends", function(req, res) {
       friendAnswers.push(req.body);
       
        
    });
};