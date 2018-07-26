import React, { Component } from 'react';
import logo from './logo.svg';
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
        
          <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand p-0 text-warning" href="#"><img className="AppNavImg"src="img/beerpint.png" alt="BeerMe! logo"></img><span className="p-3" style="font-size: 1.5rem;">BeerMe!</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                  <li>
                      <a className="nav-link" href="/">HOME</a>
                  </li>
                  <li>
                      <a className="nav-link" href="/favorites">FAVORITES</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">LOGOUT</a>
                  </li>
              </ul>
          </div>
        </nav>
        <div className="container-fluid full-height">
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
        </div>

      </div>
    );
  }
}

export default App;
