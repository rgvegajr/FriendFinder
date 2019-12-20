const express = require("express");
const fs = require("fs");

const app = express();

// Set the port of our application
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password1234",
    database: "movie_planner_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main index.html page with the movies in it.
app.get("/", function(req, res) {
    // connection.query("SELECT * FROM movies;", function(err, data) {
    //     if (err) {
    //         return res.status(500).end();
    //     }
    res.render("./index");
    // res.render("index", { movies: data });
});

app.get("/layouts/survey", function(req, res) {
    // connection.query("SELECT * FROM movies;", function(err, data) {
    //     if (err) {
    //         return res.status(500).end();
    //     }
    res.render("./layouts/survey");
    // res.render("index", { movies: data });
});
// Create a new movie
app.post("/layouts/survey", function(req, res) {
    // connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
    //     if (err) {
    //         return res.status(500).end();
    //     }

    // Send back the ID of the new movie
    // res.json({ id: result.insertId });
    // console.log({ id: result.insertId });
    res.render("./layouts/survey");
    console.log(response.data);

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});