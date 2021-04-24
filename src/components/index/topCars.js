import React from 'react';

import CarCharts from './carChart';

const TopCars = () => {
  return (
    <div className="" id="topCars">
      
      <h4 className="blue-grey lighten-5 indigo-text text-darken-3 z-depth-2 center-align"> Top Notch Cars </h4>
      <ul className="tabs row center-align">
        
        <li className="tab col s12 l3 m12">
          <a href="#tabA" className="indigo-text text-darken-4"> Electric </a>
        </li>

        <li className="tab col s12 l3 m12">
          <a href="#tabB" className="indigo-text text-darken-4"> Hybrid </a>
        </li>

        <li className="tab col s12 l3 m12">
          <a href="#tabC" className="indigo-text text-darken-4"> Gas </a>
        </li>

        <li className="tab col s12 l3 m12">
          <a href="#tabD" className="indigo-text text-darken-4"> Diesel </a>
        </li>

      </ul> 

      <div className="col s12 l12 m12" id="tabA">
        <CarCharts fuelType="Electric"/>
      </div>

      <div className="col s12 l12 m12" id="tabB">
        <CarCharts fuelType="Hybrid"/>
      </div>

      <div className="col s12 l12 m12" id="tabC">
        <CarCharts fuelType="Gas"/>
      </div>

      <div className="col s12 l12 m12" id="tabD">
        <CarCharts fuelType="Diesel"/> 
      </div>
    </div>
  )
}

export default TopCars;
