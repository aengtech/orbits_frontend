import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Categories = () => {

  const cars = useSelector(state => state.cars);

  console.log(cars);

  const uniqueBrands = [...new Set(cars.map(data => data.brand))]
  console.log(uniqueBrands);

  return (
    <>
      <section className="container aside">
      <ul className="categories">
        { uniqueBrands.map((uniqueBrand) => {
          return (
            <li key={uniqueBrand}><Link to={`/brands/${uniqueBrand}`}><h6> {uniqueBrand} </h6></Link></li>)
        })}
        </ul>
      </section>
    </>
    )
}

export default Categories;