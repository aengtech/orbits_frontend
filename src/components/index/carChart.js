import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CarCharts = ({fuelType}) => {

  const cars = useSelector(state => state.cars);
  
  const filteredCars = cars.filter((car) => car.fuelType.toLowerCase() === fuelType.toLowerCase())
  console.log(filteredCars);

  const displayCars = filteredCars
    .slice(0, 5)
    .map(filteredCar => {
      return (
        <div className="row" key={filteredCar._id}>
          <Link to={`/cars/${filteredCar._id}`}>
          <hr className="container grey-text text-lighten-3"/>
          <div ><br/></div>
          <div className="col s4 m4 l4">
            <br/>
            <h5 className="indigo-text text-darken-4"> {filteredCar.brand} </h5>
            <img src={ filteredCar.selectedFileA} alt="carImg" className="responsive-img materialboxed"/>
          </div>
          <div className="col s8 m8 l8 blue-grey lighten-5 brown-text text-darken-4 z-depth-1">
            <h6> {filteredCar.model }  {filteredCar.version }</h6>
            <h6> Max Power: {filteredCar.maxPower } </h6>
            <h6> Max Torque: { filteredCar.maxTorque } </h6>
            <h6> Acceleration: { filteredCar.acceleration } </h6>
            <h6> Price: { filteredCar.price } </h6>
          </div>
          </Link>
        </div>
      )
    })
  return (
    <section className="section container">
      { displayCars }
    </section>
  )
}

export default CarCharts
