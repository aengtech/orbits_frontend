import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Redirect} from 'react-router-dom';
import { getCars } from '../actions/car';

import Uploader from '../forms/uploader/uploader';
import All from './all';

const Admin = () => {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
  const history = useHistory();
  const dispatch = useDispatch();

  const [ updateId, setUpdateId ] = useState(0);
  useEffect(() => {
    dispatch(getCars());
  }, [updateId, dispatch]);

  console.log(updateId);
  console.log(user);

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [history]);

  if (!user) return <Redirect to='/auth' />

  return (
    <div className="row">
      <div className="col s5 m5 l5">
        <All setUpdateId={setUpdateId}/>
      </div>
      <div className="col s5 m5 l5">
        <Uploader setUpdateId={setUpdateId} updateId={updateId}/>
      </div> 
    </div>
  )
}

export default Admin; 
