import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer grey darken-3">
      <h5 className="amber lighten-1"> Keep In Touch</h5>
      <ul>
        <li><Link to="#" className="grey-text text-lighten-2"><h5>FaceBook</h5></Link></li>
        <li><Link to="#" className="grey-text text-lighten-2"><h5>Instagram</h5></Link></li>
        <li><Link to="#" className="grey-text text-lighten-2"><h5>Twitter</h5></Link></li>
        <li><Link to="#" className="grey-text text-lighten-2"><h5>Contact Us</h5></Link></li>
        <br/>
      </ul>
    </div>    
  )
}

export default Footer 
