import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Results from './components/Results'
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Results" component={Results}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
