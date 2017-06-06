//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require("morgan");
const path = require("path");


//const for application, initialize express
const app = express();
const PORT = process.env.PORT || '3000';
app.listen(PORT, function(err, res) {
	if(err) throw err;
	console.log("App running on Port:" + PORT);
})

// let db = require('./app/models');

//body-parser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//public- static files (if any)
app.use(express.static("./src/public"));


//routes
let routes = require('./server/routes/html');
app.use('/', routes);

// module.exports = app;