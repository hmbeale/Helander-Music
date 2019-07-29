import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Messages from './components/Messages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> lorem ipsum dolor sit amet</p>
        <div className="menu">
          
            
              <button className="mainLink"> <Link to="/">foo</Link> </button>
              <button className="mainLink"> <Link to="/messages">bar</Link> </button>
              <button className="mainLink"> <Link to="/about">baz</Link> </button>
            
            
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
