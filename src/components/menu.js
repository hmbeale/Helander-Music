import React from 'react';

import NavSpacer from './navSpacer.js'
import { Link } from 'react-router-dom';

const Menu = () => (
    <div className="menu">                   
              <NavSpacer />
              <button className="mainLink"> <Link to="/">foofoo</Link> </button>
              <NavSpacer />
              <button className="mainLink"> <Link to="/messages">foobar</Link> </button>
              <NavSpacer />
              <button className="mainLink"> <Link to="/about">foobaz</Link> </button>
              <NavSpacer />
              
        </div>
);

export default Menu;