const path = require("path");

module.exports = function(app, fs) {
    // display home page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    //display survey page
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    //display home page as default for any url/route other than /survey
    app.get("/?", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}
