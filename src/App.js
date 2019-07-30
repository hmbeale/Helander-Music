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
import NavSpacer from './components/navSpacer.js'
import Banner from './components/banner.js'
import HLineSpacer from './components/hLineSpacer.js'
import Menu from './components/menu.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner /> 
        <Menu /> 
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
