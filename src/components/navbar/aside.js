import React from 'react';
import { Link } from 'react-router-dom';

import fbk from '../img/fbk.svg';
import insta from '../img/insta.svg';
import twit from '../img/twit.svg';
import ws from '../img/ws.svg';

const Aside = () => {


  return (
     <div className="aside">
        <ul>
          <li className="listed z-depth-1"><Link to="/buycar"><h6> <i className="material-icons amber-text text-darken-3">add_shopping_cart</i> Buy A Car</h6></Link></li>
          <li className="listed z-depth-1"><Link to="#"><h6> <i className="material-icons teal-text text-darken-4">local_car_wash</i> Pimp Yo Ride </h6></Link></li>
          <li className="listed z-depth-1"><Link to="/tradecar"><h6><i className="material-icons">rv_hookup</i> Trade A Car</h6></Link></li>
          <li className="listed z-depth-1"><Link to="/admin"><h6><i className="material-icons red-text text-darken-2">verified_user</i> Car Insurance </h6></Link></li>
          <li className="listed z-depth-1"><Link to="/upload"><h6><i className="material-icons grey-text text-lighten-1">flight</i> The Mars Project </h6></Link></li>     
          <div className="preSocials"></div>  
          <li className="listed z-depth-1" id="dropdown"><h6>Socials</h6>
            <section id="hide">
              <p className="z-depth-1"><a href="https://instagram.com/orbits.iot/" className="grey-text text-darken-3"><img src={insta} alt="facebook" className="socials"/> <sup>@orbits.iot</sup> </a></p>
              <p className="z-depth-1"><a href="https://facebook.com/orbits.iot/" className="grey-text text-darken-4"><img src={fbk} alt="facebook" className="socials"/> <sup>orbits.iot</sup> </a></p>
              <p className="z-depth-1"><Link to="#" className="grey-text text-darken-3"><img src={twit} alt="facebook" className="socials"/></Link></p>
              <p className="z-depth-1"><Link to="#" className="grey-text text-darken-3"><img src={ws} alt="facebook" className="socials"/></Link></p>
              <br/>
            </section>
          </li>       
        </ul>
     </div>
  )
}

export default Aside;