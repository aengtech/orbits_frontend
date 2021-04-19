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
    </section>
  )
}

export default NavBar;
