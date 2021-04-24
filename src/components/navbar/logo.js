import React,  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Aside from './aside'

const Logo = () => {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  
  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT'});

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [history]);



  return (
    <div className="headlogo  blue-grey lighten-5 z-depth-2  row">
      <span className="col s4 l4 m4 row">
      <Link to="/" className="brand-logo indigo-text text-darken-3 center-align "> 
        <h3 className="carsiosmall left-align blue-grey-text text-lighten-4 hide-on-med-and-up"> cars.io </h3>   
        <h3 className="carsiobig hide-on-small-only center-align"> cars.io </h3> 
      </Link>
      <Link to="/compare" className=" comparer waves-effect waves-light btn transparent grey-text text-darken-3">compare cars</Link>
      </span>

      { user ? (
            <div className="profile container right col s3 m3 l3">
              <h6 className="btn-small red lighten-5" onClick={logout}>{ user.result.name }</h6>
            </div>
          ):(
            <Link to="/auth" className="container right col s3 m3 l3">
              <h6 className="btn-small waves-light indigo lighten-3 z-depth-0"> Sign In </h6>
            </Link>
          )}

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