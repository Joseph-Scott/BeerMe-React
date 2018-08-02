import React, { Component } from 'react';
import Beer from './Beer';
import threeBeers from '../img/threebeers.png';
import './Brewery.css';


class Brewery extends Component {
    render() {
        return (
            <div className="BreweryCard">
                <div className="beer-details">
                    <h1>{this.props.details.name}</h1>
                    {this.props.details.beers.map((beer, i) => {
                        return <Beer details={beer} key={i} />
                    })}
                </div>
                <div className="card-image">
                    <img src={threeBeers} alt=""></img>
                </div>
            </div>    
        )    
    }
}

export default Brewery;