//React included
var React = require('react');
var Axios = require('axios');

// sub-components
var Search = require('./Search');
var Results = require('./Results');

class Saved extends React.Component {
	constructor(props) {
    super(props);
}
  render() {
    return (
	<div className="row">
		<div className="col-md-12">
			<div className="panel-heading header">Saved Articles</div>
			<div className="panel-body border" id="TopArticles">
				<div className='panel-body border displayArts'>
					<i className='label label-primary divNum'>1</i>
					<h3>Test Saved Results</h3>
					<a href="#">Test Link</a>
					<p>Test Saved snippet</p>
					<form action="">
						<button type="submit" className="btn btn-default">Remove</button>
					</form>
				</div>
				<div className='panel-body border displayArts'>
					<i className='label label-primary divNum'>2</i>
					<h3>Test Saved Results 2</h3>
					<a href="#">Test Link 2</a>
					<p>Test Saved snippet 2</p>
					<form action="">
						<button type="submit" className="btn btn-default">Remove</button>
					</form>
				</div>
			</div>
		</div>
	</div>
    )
  }
}

module.exports = Saved;