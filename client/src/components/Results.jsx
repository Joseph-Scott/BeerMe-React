import React, { Component } from 'react';
import '../App.css';
import Brewery from './Brewery';
import Search from './Search';
import './Brewery.css';
import './Results.css';
import BreweryBackgroundImg from './BreweryBackground.jsx';

class Results extends Component {
    state = {
        results: []
    }
    
    setResults(results) {
        this.setState({
            results
        })
    }

    render() {
        return (
            <div className="results-wrapper" style={BreweryBackgroundImg}>
                <div className="results">
                    <Search setResults={this.setResults.bind(this)}/>
                    {this.state.results.map((brewery, i) => {
                        return <Brewery details={brewery} key={i} />
                    })}
                </div>
            </div>
        )    
    }
}

export default Results;