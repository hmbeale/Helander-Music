import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Pricing from './components/Pricing.js';
import About from './components/About.js';
import Contact from './components/contact.js';
import NavSpacer from './components/navSpacer.js'
import Banner from './components/banner.js'
import HLineSpacer from './components/hLineSpacer.js'
import Menu from './components/menu.js'

import Testimonials from './components/testimonials.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner /> 
        <Menu /> 
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={About} />
            <Route path="/messages" component={Testimonials} />
            <Route path="/about" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
