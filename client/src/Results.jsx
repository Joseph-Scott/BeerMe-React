import React, { Component } from 'react';
import Brewery from './Brewery';

class Results extends Component {
    render() {
        return (
            <div className="results">
                {this.props.results.map((brewery, i) => {
                    return <Brewery details={brewery} key={i} />
                })}
            </div>    
        )    
    }
}

export default Results;