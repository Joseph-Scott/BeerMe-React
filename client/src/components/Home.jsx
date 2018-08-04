import React, { Component } from 'react';
import beerBottle from '../img/beer-bottle.png';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Circle">
                    <img src={beerBottle} alt=""></img>
                    <h1><span>BeerMe</span></h1>
                </div>
            </div>    
        )    
    }
}

export default Home;