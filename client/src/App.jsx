import React, { Component } from 'react';
import Results from './Results'
import Nav from './Nav';
import Search from './Search'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: []
    }
  }

  setResults(results) {
    this.setState({
      results
    })
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Search setResults={this.setResults.bind(this)}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
