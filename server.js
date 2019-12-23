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


require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});