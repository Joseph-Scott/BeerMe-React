import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Results from './components/Results'
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Results" component={Results}/>
        </Switch>  
        <Footer/>
      </div>
    );
  }
}

export default App;
