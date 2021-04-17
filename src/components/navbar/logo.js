import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="container">
      <Link to="/" className="brand-logo indigo-text text-darken-3 center-align"> <h3>ORBITS.CARZ </h3> </Link>
    </div>
  )
}

export default Logo;