import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const SearchResults = ({ items, isOpen, setCurrentId, setIsOpen }) => {

  //const cars = useSelector((cars) => state.cars);
  if (!isOpen) return null;
  return (
    <>
     { items &&
     items.map((item) => {
       return (
         <ul key={item._id}>
           <li onClick={() => {
             setCurrentId(item._id);
             setIsOpen(false);
           }}>
             {item.brand} {item.model} {item.version}
           </li>
         </ul>
       )
     })}
    </>
  )
}

export default SearchResults;
