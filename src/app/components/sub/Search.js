//React included
var React = require('react');
var Axios = require('axios');

// sub-components
var Results = require('./Results');
var Saved = require('./Saved');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //method to handle input, distinguishes them by name  
  handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  })
}

  // on submit query the NYT api database, using npm package Axios
  handleSubmit(event) {
    alert('A query was submitted: ' + this.state.querySearch);
    event.preventDefault();

    //------ NYT api ----------------------------------------------------
    var apiKey = "268d5eaf0f254de4834746f68a97fd79";
    var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
        URL += "api-key=" + apiKey;
        URL += "&q=" + this.state.querySearch;
        URL += "&begin_date=" + this.state.startYear + "0101";
        URL += "&end_date=" +this.state.endYear + "1230";
    // var formattedArticles = [];
    //--Axious to fire GET request for NYT api
    Axios.get(URL).then(response=>{
      // console.log("response received");

      var QueryResults = response.data.response.docs;

      for(let i=0; i<this.state.numberResults; i++){
       console.log(QueryResults[i]);
        var resultHeadlines = {
            headline: QueryResults[i].headline.main,
            link: QueryResults[i].web_url,
            snippit: QueryResults[i].lead_paragraph

        }
        this.props.resultsArr(resultHeadlines);
        // formattedArticles.push(resultHeadlines);
      }
      
    })
    console.log(resultHeadlines);
  }

  //Saving an article
  saveArticle(article){
    axios.post('/saveNew', article)
  }

    render() {
    return (
	<div className="row">
		<div className="col-sm-12">
			<div className="panel-heading header">Search Parameters</div>
		      <form className="form-group panel-body border" onSubmit={this.handleSubmit}>
		        <label>Search Term</label>
		          <input 
                name="querySearch" 
                className="form-control" 
                type="text" 
                placeholder="Trump, Hillary, Paris Agreement..." 
                value={this.state.querySearch} 
                onChange={this.handleInputChange} />
		        <br/>
            <label>Start Year</label>
              <input 
                name="startYear" 
                className="form-control" 
                type="text" 
                placeholder="2016..." 
                value={this.state.startYear} 
                onChange={this.handleInputChange} />
            <br/>
            <label>End Year</label>
              <input 
                name="endYear"
                className="form-control" 
                type="text" placeholder="2017" 
                value={this.state.endYear} 
                onChange={this.handleInputChange} />
            <br/>
            <label>Number of Results</label>
                <select name="numberResults" className="form-control" value={this.state.numberResults} onChange={this.handleInputChange}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">15</option>
                </select>
            <br/>
		        <input className="btn btn-primary" type="submit" value="Submit" />
		      </form>
     	 </div>
    </div>
    );
  }
}

  module.exports = Search;