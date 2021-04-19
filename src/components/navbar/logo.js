import React from 'react';
import { Link } from 'react-router-dom';

import Aside from './aside'

import orbitsBB from '../img/orbitsBB.png';
import menu from '../img/menu.svg'

const Logo = () => {
  return (
    <div className="headlogo  blue-grey lighten-5 z-depth-2  row">
      <span className="col s4 l4 m4 row">
      <Link to="/" className="brand-logo indigo-text text-darken-3 center-align "> 
        <h3 className="carsiosmall left-align blue-grey-text text-lighten-4 hide-on-med-and-up"> cars.io </h3>   
        <h3 className="carsiobig hide-on-small-only center-align"> cars.io </h3> 
      </Link>
      <Link to="/compare" className=" comparer waves-effect waves-light btn transparent grey-text text-darken-3">compare cars</Link>
      </span>


      <Link to="#" className="sidenav-trigger col s4 l4 m4 push-3 right hide-on-large-only left" data-target="mobile-links-two"> 
          <i className="material-icons large menu blue-grey-text text-darken-2 left">reorder</i>
      </Link>

      <ul className="sidenav grey lighten-4" id="mobile-links-two">
        <Aside />
      </ul>

    </div>
  )
}

export default Logo;