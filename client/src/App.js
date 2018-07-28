import React, { Component } from 'react';
import beerMeLogo from './img/beerpint.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */} 
        
        <nav className="navbar">
            <div className="header-main">

                <div className="logo">
                    <a className="" href=""><img className="AppNavImg" src={beerMeLogo} alt="BeerMe! logo"></img>
                    <span className="p-3 NavBeerMeLogo">BeerMe!</span></a>                    
                </div>

                <div className="navigation">
                    <ul className="">
                            <a className="" href="/">HOME</a>
                            <a className="" href="/favorites">FAVORITES</a>
                            <a className="" href="">LOGOUT</a>
                    </ul>
                </div>

            </div>                
        </nav>
        {/* <div className="container-fluid full-height">
            <div className="row h-100">
                <div className="col-lg-9 p-0">
                    <div id="map"></div>
                </div>
                <div className="col-lg-3 mt-3">
                    <form>
                        <input id="myInput" onkeyup="search()" className="form-control" type="search" name="beermesearch" placeholder="Find a brew..."></input>
                    </form>
                    <div id="mySidebar" className="search-results"></div>
                </div>
            </div>
        </div> */}

      </div>
    );
  }
}

export default App;
