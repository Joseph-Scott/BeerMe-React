import React, { Component } from 'react';
import untappedImg from '../img/pbu_80_grey.png';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <footer>
                    <img className="UntappedImg" src={untappedImg} alt="BeerMe! logo"></img>
                </footer>
            </div>    
        )    
    }
}

export default Footer;