// dependencies
const express = require('express');
let router = express.Router();
var mongoose = require("mongoose");
let controller = require('../controller/html.controller');

//endpoints
router.get('/api/saved', controller.querySaved);
router.post('/api/saved', controller.articleSaved);
router.delete('/api/saved/:id', controller.deleteSaved);

router.get('*', controller.index);



//exporting file
module.exports = router;