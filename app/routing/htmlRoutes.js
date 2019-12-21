const path = require("path");

//to help direct user, when user clicks link, takes to the appropriate page
// Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.


module.exports = function (app) {
// Move this to htmlRoutes.js file
app.get("/", function(req, res) {
    // connection.query("SELECT * FROM movies;", function(err, data) {
    //     if (err) {
    //         return res.status(500).end();
    //     }
    res.sendFile(path.join(`__dirname ${/../public/home.html}`));
    res.render("/../public/home.html");
    // res.render("index", { movies: data });
});

app.get("/survey", function(req, res) {
    // connection.query("SELECT * FROM movies;", function(err, data) {
    //     if (err) {
    //         return res.status(500).end();
    //     }
    res.sendFile(path.join(`__dirname ${/../public/survey.html}`));    
    res.render("/../public/survey.html");
    // res.render("index", { movies: data });
});

app.use( function(req, res) {
    // connection.query("SELECT * FROM movies;", function(err, data) {
    //     if (err) {
    //         return res.status(500).end();
    //     }
    res.sendFile(path.join(`__dirname ${/home.html}`));
    res.render("/home.html");
    // res.render("index", { movies: data });
});

}