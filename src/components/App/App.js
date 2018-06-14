import React from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };
    
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
    //Yelp.search is from Yelp.js
    //first .then() is update the state of our list of businesses once they are recieved from the api
    Yelp.search(term, location, sortBy).then(businesses => {
      //value of businesses is the reutrned array of businesses
      this.setState({businesses: businesses});
    });
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses = {this.state.businesses}/>
      </div>
    );
  }
}

export default App;
