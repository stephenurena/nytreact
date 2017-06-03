//React included
var React = require('react');
var Axios = require('axios');

// sub-components
var Search = require('./Search');
var Saved = require('./Saved');

class Results extends React.Component {
	constructor(props) {
    super(props);
}
  render() {
    return (
	<div className="row">
		<div className="col-md-12">
			<div className="panel-heading header">Results</div>
			<div className="panel-body border" id="TopArticles">
				<div className='panel-body border displayArts'>
					<i className='label label-primary divNum'>1</i>
					<h3>Test Results</h3>
					<a href="#">Test Link</a>
					<p>Test snippet</p>
					<form action="">
						<button type="submit" className="btn btn-default">Save</button>
					</form>
				</div>
				<div className='panel-body border displayArts'>
					<i className='label label-primary divNum'>2</i>
					<h3>Test Results 2</h3>
					<a href="#">Test Link 2</a>
					<p>Test snippet 2</p>
					<form action="">
						<button type="submit" className="btn btn-default">Save</button>
					</form>
				</div>
			</div>
		</div>
	</div>
    )
  }
}

module.exports = Results