import React from 'react';
import Footer from './footer.js'

const Message = ({ match }) => (
  <div className="messageComp">
    <h3>Message with ID {match.params.id}</h3> 
    <Footer /> 
  </div>
  
);

export default Message;