import React from 'react'
import { useSelector } from 'react-redux';

const All = ({setUpdateId}) => {

  const cars = useSelector(state => state.cars);

  return (
    <div>
      {
        cars.map((car) => {
          return (
            <li key={car._id} onClick={() => {
              setUpdateId(car._id);
              console.log(car._id);
            }}><h5> {car.brand} {car.model} {car.version} </h5> 
            </li>
          )
        })
      }
    </div>
  )
}

export default All 
