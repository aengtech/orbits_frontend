import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import Categories from './categories';
import Logo from './logo';
import Aside from './aside'

const NavBar = () => {

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
    <section className="nav">
      <Logo />
      <nav className="nav-wrapper indigo lighten-4 z-depth-2 row">
        <Link to="#" className="sidenav-trigger col s3 m3 l3" data-target="mobile-links"> 
          <div className="btn-small blue lighten-2 indigo-text text-darken-3">Carz</div>
        </Link>
        <Link to="/compare" className="col s3 m3 l3 "> 
          <div className="btn-small indigo darken-3 ">Compare</div>
        </Link>

        <Link to="#" className="sidenav-trigger col s3 m3 l3 right" data-target="mobile-links-two"> 
          <i className="material-icons large  indigo-text text-darken-2 left">reorder</i>
        </Link>

        
          { user ? (
            <div className="profile container right col s3 m3 l3">
              { user.name }
              <button className="btn-small red lighten-5" onClick={logout}>Log Out</button>
            </div>
          ):(
            <Link to="/auth" className="container right col s3 m3 l3">
              <div className="btn-small waves-light indigo lighten-3 z-depth-0"> Sign In </div>
            </Link>
          )}
        

        
      </nav>

      <ul className="nav hide-on-med-and-down">
        <Categories />
      </ul>

      <ul className="sidenav blue lighten-4" id="mobile-links">
        <Categories />
      </ul>
      <ul className="sidenav grey lighten-4" id="mobile-links-two">
        <Aside />
      </ul>
    </section>
  )
}

export default NavBar;
