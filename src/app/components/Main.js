//React included
var React = require('react');

//Sub-components
var Search = require('./sub/Search');
// var Results = require('./components/sub/Results');
// var Saved = require('./components/sub/Saved');



class NytApp extends React.Component {
	render() {
		return (
		<div>
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="/">New York Times Search</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active"><a href="/">Home</a></li>
			      <li><a href="#">Saved</a></li>
			    </ul>
			  </div>
			</nav>
			<div className='container'>
				<Search />
			</div>
		</div>
		)
	}
}

module.exports = NytApp;