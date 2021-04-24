import React from 'react';
import { Link } from 'react-router-dom';

import fbk from '../img/fbk.svg';
import insta from '../img/insta.svg';
import twit from '../img/twit.svg';
import ws from '../img/ws.svg';

const Footer = () => {
  return (
    <div className="footer grey lighten-3 grey-text text-darken-3">
      <h6 className="grey darken-4 grey-text text-lighten-4"> Keep In Touch with our socials</h6>
      <ul>
        <li><a href="https://instagram.com/orbits.iot/" className="grey-text text-darken-3"><img src={insta} alt="facebook" className="socials"/><sup>@orbits.iot</sup></a></li>
        <li><a href="https://facebook.com/orbits.iot/" className="grey-text text-darken-4"><img src={fbk} alt="facebook" className="socials"/><sup>HOBBITS369</sup></a></li>
        <li><Link to="#" className="grey-text text-darken-3"><img src={twit} alt="facebook" className="socials"/></Link></li>
        <li><Link to="#" className="grey-text text-darken-3"><img src={ws} alt="facebook" className="socials"/></Link></li>
        <br/>
      </ul>
    </div>    
  )
}

export default Footer 
