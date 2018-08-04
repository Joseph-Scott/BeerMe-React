import React, { Component } from 'react';
import beerBottle from '../img/beer-bottle.png';
import HomeBackgroundImg from './HomeBackground.jsx';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home" style={HomeBackgroundImg}>
                <div className="Circle">
                    <img src={beerBottle} alt=""></img>
                    <h1><span>BeerMe</span></h1>
                </div>
            </div>    
        )    
    }
}

export default Home;