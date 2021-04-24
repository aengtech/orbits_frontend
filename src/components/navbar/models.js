import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Models = () => {
  const { modes } = useParams();

  const cars = useSelector((state) => state.cars);
  const singleCars = cars.filter((car) => car.brand.toLowerCase() === modes.toLowerCase());
  const uniqueBrands = [...new Set(singleCars.map(data => data.model))]

  console.log(uniqueBrands);

  return (
    <div className="container">
        all models of ...
    </div>
  )
}

export default Models 
