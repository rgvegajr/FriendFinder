const path = require("path");

//to help direct user, when user clicks link, takes to the appropriate page
// Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.


module.exports = function(app) {
    // Move this to htmlRoutes.js file
    app.get("/", function(req, res) {
        // connection.query("SELECT * FROM movies;", function(err, data) {
        //     if (err) {
        //         return res.status(500).end();
        //     }
        res.sendFile(path.join(__dirname + "/../public/home.html"));
        // res.render("/../public/home.html");
        // res.render("index", { movies: data });
    });

    app.get("/survey", function(req, res) {
        // connection.query("SELECT * FROM movies;", function(err, data) {
        //     if (err) {
        //         return res.status(500).end();
        //     }
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
        // res.render("/../public/survey.html");
        // res.render("index", { movies: data });
    });

    app.post('/survey', (req, res) => {
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
        res.writeFile(path.join(__dirname + "/../data/user.js"));
    });

    app.get("/friends", function(req, res) {
        // connection.query("SELECT * FROM movies;", function(err, data) {
        //     if (err) {
        //         return res.status(500).end();
        //     }
        res.sendFile(path.join(__dirname + "/../data/friends.js"));
        // res.render("/../public/survey.html");
        // res.render("index", { movies: data });
    });

    app.use(function(req, res) {
        // connection.query("SELECT * FROM movies;", function(err, data) {
        //     if (err) {
        //         return res.status(500).end();
        //     }
        res.sendFile(path.join(__dirname + "/../public/home.html"));
        // res.render("/home.html");
        // res.render("index", { movies: data });
    });

}