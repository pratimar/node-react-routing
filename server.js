/* Server side rendering with react */
/*
require('babel-register')({
	presets: ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

//Create route for '/'
app.get('/', function (req, res) {
	var html = ReactDOMServer.renderToString(
		React.createElement(Component)
	);
	res.send(html);
});

var PORT = 8080;
app.listen(PORT, function () {
	console.log('Server is running');
});
*/


/* Client side rendering with react */
/*require('babel-register')({
	presets: ['react']
});

var express = require('express');
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

//Use express.static middleware to serve all files in public directory
app.use(express.static('public'));

//Create route for '/'
app.get('/', function (req, res) {
	var html = ReactDOMServer.renderToString(
		React.createElement(Component)
	);
	res.send(html);
});

var PORT = 8080;
app.listen(PORT, function () {
	console.log('Server is running');
}); */


/* Server side routing */
require('babel-register')({
	presets: ['react']
});

var express = require('express');
var app = express();

//Use express.static middleware to serve all files in public directory
app.use(express.static('public'));
app.use(require('/routes/index.jsx'));

var PORT = 8080;
app.listen(PORT, function () {
	console.log('Server is running');
});