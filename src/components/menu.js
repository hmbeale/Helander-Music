import React from 'react';

import NavSpacer from './navSpacer.js'
import { Link } from 'react-router-dom';

const Menu = () => (
    <div className="menu">                   
              
              <button className="mainLink"> <Link to="/">About</Link> </button>
              <NavSpacer />
              <button className="mainLink"> <Link to="/messages">Testimonials</Link> </button>
              <NavSpacer />
              <button className="mainLink"> <Link to="/about">Contact</Link> </button>
           
        </div>
);

export default Menu;