const path = require("path");
const peopleArray = require("../data/friends.js");

module.exports = function(app, fs) {
    //display JSON of all possible friends
    app.get("/api/friends", (req, res) => {
        res.sendFile(path.join(__dirname + "/../data/friends.js"));
    });
    //handle incoming survey results and compute friend match logic/the compatibility logic.
    app.post('/api/friends', (req, res) => {
        const postBody = req.body;
        console.log(postBody);
        console.log("-------------");
        let user = {
            "name": "",
            "photo": "",
            "scores": []
        };
        user.name = postBody.name;
        user.photo = postBody.photo;
        user.scores[0] = parseInt(postBody.q1);
        user.scores[1] = parseInt(postBody.q2);
        user.scores[2] = parseInt(postBody.q3);
        user.scores[3] = parseInt(postBody.q4);
        user.scores[4] = parseInt(postBody.q5);
        user.scores[5] = parseInt(postBody.q6);
        user.scores[6] = parseInt(postBody.q7);
        user.scores[7] = parseInt(postBody.q8);
        user.scores[8] = parseInt(postBody.q9);
        user.scores[9] = parseInt(postBody.q10);
        console.log(user);
        peopleArray.push(user); //0. append input to friends array, 1.convert users input to array of numbers
        console.log(peopleArray);
        //enter friend calulation here
        //0. append input to friends array
        //1.convert users input to array of numbers
        let compatArray = [];
        let compatScore = 0; //array to hold compat scores
        //populate compatArray with compat scores
        //need a nested loop here - a for within this for IOT compare score of all 10 questions PER array person
        for (let i = 0; i < peopleArray.length; i++) {
            for (let j = 0; j < peopleArray.length; j++) {
                compatScore = Math.abs(user.scores[j] - peopleArray[i].scores[j]);
                compatArray[i] = compatArray[i] + compatScore;
            }
        };
        let bestCompat = 40;
        let index = 0;
        for (let i = 0; i < compatArray.length; i++) {
            if (compatArray[i] < bestCompat) {
                bestCompat = compatArray[i]
                index = i;
            }
        };
        let match = peopleArray[index];
        //send index name and photo to modal for display

        //2.compare question by question to all other users
        //3.calculate total difference.  Lowest difference = most compatible match
        //4. display via modal pop-up name and picture of most compatible match
    });



}
