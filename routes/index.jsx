
var React = require('react');
var router = require('express').Router();
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');
var ReactRouter = require('react-router');

//Create route for '/'
router.get('*', function (req, res) {
	var props = {title : 'Universal React'};
	ReactRouter.match({
		routes : (
		)
	});
	var html = ReactDOMServer.renderToString(
		React.createElement(Component)
	);
	res.send(html);
});
