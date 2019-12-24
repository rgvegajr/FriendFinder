// const express = require("express");
// const router = express.Router();
const path = require("path");
const peopleArray = require("../data/friends.js");

module.exports = function(app, fs) {
    //display JSON of all possible friends
    // router.get("/api/friends", (req, res) => {

    app.get("/api/friends", (req, res) => {
        res.sendFile(path.join(__dirname + "/../data/friends.js"));
    });
    //handle incoming survey results and compute friend match logic/the compatibility logic.
    app.post('/survey', (req, res) => {
        // router.post('/survey', (req, res) => {


        // app.post('/api/friends', (req, res) => {
        const postBody = req.body;
        // console.log(postBody);
        // console.log("-------------");
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
        // peopleArray.push(user); //0. append input to friends array, 1.convert users input to array of numbers
        console.log(peopleArray);
        //enter friend calulation here
        //0. append input to friends array
        //1.convert users input to array of numbers
        //2.compare question by question to all other users
        //3.calculate total difference.  Lowest difference = most compatible match
        let compatArray = [];
        let runningScore = 0;
        let compatScore = 0; //array to hold compat scores
        //populate compatArray with compat scores
        //need a nested loop here - a for within this for IOT compare score of all 10 questions PER array person
        for (let i = 0; i < peopleArray.length; i++) {
            runningScore = 0;
            for (let j = 0; j < 10; j++) {
                compatScore = Math.abs(user.scores[j] - peopleArray[i].scores[j]);
                console.log("compatScore[" + i + "][" + j + "] :" + compatScore);
                runningScore = runningScore + compatScore;
            }
            compatArray[i] = runningScore;
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
        console.log("peopleArray length = " + peopleArray.length);
        console.log("compatArray length =" + compatArray.length);
        console.log("compatArray = ");
        console.log(compatArray);
        console.log("bestCompat = " + bestCompat);
        console.log("index = " + index);
        console.log("match= " + JSON.stringify(match));
        //send index name and photo to modal for display
        // res.send("/survey", JSON.stringify(match));
        let html = "<h1><em>Here's a compatible Friend for You!</em></h1>";

        html += "<p> Name: " + match.name + "</p>";
        html += "<p> Photo:</p>";
        html += "<img src='" + match.photo + "' alt='" + match.name + "' height='200px' width='200px'>";
        html += "<p><a href='/'>Return to home</a></p>";

        res.send(html);
        //4. display via modal pop-up name and picture of most compatible match
    });
}