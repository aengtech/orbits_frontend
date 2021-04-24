import React, { useState, useEffect } from 'react';
import { useHistory, Redirect} from 'react-router-dom';

import TipUpload from './tips';
import CarUpload from './cars';

const Uploader = ({updateId}) => {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  
  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [history]);

  if (!user) return <Redirect to='/auth' />

  return (
    <section className="container section" id="topCars">
      <ul className="tabs">
        
        <li className="tab">
          <a href="#tabA" className="indigo-text text-darken-4"> Tips </a>
        </li>

        <li className="tab">
          <a href="#tabB" className="indigo-text text-darken-4"> Cars </a>
        </li>

      </ul>

      <div className="col s12" id="tabA">
        <TipUpload />
      </div>

      <div className="col s12" id="tabB">
        <CarUpload updateId={updateId}/>
      </div>
    </section>
  )
}

export default Uploader;