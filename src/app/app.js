// src/app-client.js
var React = require ('react');
var ReactDOM = require('react-dom');
var NytApp = require('./components/Main.js');

ReactDOM.render(
	<NytApp />, 
	document.getElementById('app')
);

