import React, { Component } from "react";
import Axios from "axios";
import LoadingBeer from "../img/LoadingBeer.png";
import BreweryBackgroundImg from "./BreweryBackground.jsx";
import './Search.css';

class Search extends Component {
    state = {
        loading: false
    };

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.search.value);
        this.props.setResults([]);
        this.setState({
            loading: true
        });
        //Axios.get('/api/search?q='+e.target.search.value)
        Axios.get("/api/demo").then(response => {
            this.props.setResults(response.data);
            this.setState({
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="searchWrapper">
                {this.state.loading ? (
                    <div className="loading">
                        <img
                            className="LoadingImg"
                            src={LoadingBeer}
                            alt="BeerMe! logo"
                        />
                    </div>
                ) : (
                    <div className="searchContainer">
                        <form
                            className="locationSearchBar"
                            onSubmit={this.handleSubmit.bind(this)}
                        >
                            <input
                                className="textbox"
                                name="search"
                                type="text"
                                placeholder="Location Search"
                            />
                            <input
                                className="searchBarButton"
                                type="submit"
                                value="Submit"
                            />

                            {/* <label className="searchBarLabel">
                                <input className="textbox" name="search" type="text" placeholder="Location Search"/>
                            </label>
                            <button className="searchBarButton"type="submit">Submit</button> */}
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default Search;
