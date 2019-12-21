const path = require("path");

//routing for data - what data the user sees and well as the route to store data entered by user
// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {

    app.get("/api/friends", function(res,req) {
        rest.json(peopleArray);
    });

    app.post("/api/friends", function(res,req){
                

    })







}