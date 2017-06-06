// 'use strict';
// dependencies
const mongoose = require('mongoose');
const request = require('request');


// ------------------- MongoDB ------------------------------------------------------------------------------
//models
const Article = require('../models/Article.js');

// Mongoose mpromise deprecated - using bluebird promises
var Promise = require('bluebird');
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

// Database configuration with mongoose
//---development DB
let URI = "mongodb://localhost/nytreact";

//---production DB
// let URI = "mongodb://heroku_2m0dspmz:i1p1v8m0u68gmn3v7s2e8ej32d@ds153501.mlab.com:53501/heroku_2m0dspmz";å
mongoose.connect(URI);
let db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});
//===================== MongoDB end ==========================================================================

//---------------------- Controllers -------------------------------------------------------------------------

//*********** SPA route ************************
const index = function(req, res) {
	res.sendFile("index.html");
}

//************ API routes **********************
//query saved articles
const querySaved = function(req, res) {
	Article.find({}).exec(function(err, data){
		res.json(data);
	})
}

// post/save article
const articleSaved = function(req, res) {
	var saveArticle = new Article(req.body);
	saveArticle.save( (err, doc) => err ? res.send(err): res.json(doc) );
};

//delete saved article
const deleteSaved = function(req, res) {
	Article.remove({_id: req.params.id}, function(err){
		err ? res.send(err): null;
	});
}

// ================== Controllers end ========================================================================



module.exports = {
	index,
	querySaved,
	articleSaved,
	deleteSaved
};