const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
// Set the port of our application
const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//middleware to server static files from public directory
app.use(express.static('public'));

//require routing files and pass in app and fs so they are in scope for these files
require('./app/routing/apiRoutes.js')(app, fs);
require('./app/routing/htmlRoutes.js')(app, fs);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});
