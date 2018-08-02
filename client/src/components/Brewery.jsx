import React, { Component } from 'react';
import Beer from './Beer';

class Brewery extends Component {
    render() {
        return (
            <div className="brewery">
                <h1>{this.props.details.name}</h1>
                {this.props.details.beers.map((beer, i) => {
                    return <Beer details={beer} key={i} />
                })}
            </div>    
        )    
    }
}

export default Brewery;