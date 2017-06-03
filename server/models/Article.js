// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	headline:{
		type: String,
		required: true,
		unique: true
	},
	summary:{
		type: String,
		required: true
	},
	link: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
})

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;