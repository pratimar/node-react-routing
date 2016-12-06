/* Server side rendering with react */
var React = require('react');

module.exports = React.createClass({
	_handleClick : function () {
        alert();
	},
	render : function () {
		return (
			<html>
				<head>
					<title> {this.props.title} </title>
					<link rel="stylesheet" href = "/style.css" />
				</head>
				<body>
					<div>
					    <h1> Hello world ! </h1>
					    <p> Server side rendering </p>
					    <button onClick = {this._handleClick}> Click Me </button>
					</div>
					<script src="/bundle.js" />
				</body>
			</html>
		);
	}
});	

/* Client side rendering with react is similar, but add <Script tag to include the bundle.js > */

