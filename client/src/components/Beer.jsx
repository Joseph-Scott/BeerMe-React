import React, { Component } from 'react';

class Beer extends Component {
    render() {
        return (
            <div className="Beer">
                {this.props.details.beer_name}
            </div>    
        )    
    }
}

export default Beer;