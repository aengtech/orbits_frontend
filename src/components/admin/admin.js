import React, {useState} from 'react';
import { useSelector } from 'react-redux';


import Uploader from '../forms/uploader/uploader';
import All from './all';

const Admin = () => {

  const [ updateID, setUpdateId ] = useState(null);
  const cars = useSelector(state => state.cars);

  return (
    <div className="row">
      <div className="col s5 m5 l5">
        <All setUpdateId={setUpdateId}/>
      </div>
      <div className="col s5 m5 l5">
        <Uploader setUpdateId={setUpdateId} updateID={updateID}/>
      </div> 
    </div>
  )
}

export default Admin; 
