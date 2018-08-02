import React, { Component } from 'react';
import '../App.css';
import Brewery from './Brewery';
import Search from './Search';
import './Brewery.css';

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
            <div className="results">
                <Search setResults={this.setResults.bind(this)}/>
                {this.state.results.map((brewery, i) => {
                    return <Brewery details={brewery} key={i} />
                })}
            </div>
        )    
    }
}

export default Results;