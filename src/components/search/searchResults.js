import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SearchResults = ({ items, isOpen }) => {

  //const cars = useSelector((cars) => state.cars);
  if (!isOpen) return null;
  return (
    <>
     { items &&
     items.map((item) => {
       return (
         <ul key={item._id}>
           <li>
            <Link to={`/cars/${item._id}`}> {item.brand} {item.model} {item.version}</Link>
           </li>
         </ul>
       )
     })}
    </>
  )
}

export default SearchResults;
