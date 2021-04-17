import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
     <div className="container aside">
       <ul>
         <li><Link to="#"> <i className="material-icons amber-text text-darken-3">add_shopping_cart</i> Buy A Car</Link></li>
         <li><Link to="#"><i className="material-icons teal-text text-darken-4">local_car_wash</i> Pimp Yo Ride</Link></li>
         <li><Link to="#"><i className="material-icons">rv_hookup</i> Trade A Car</Link></li>
         <li><Link to="#"><i className="material-icons red-text text-darken-2">verified_user</i> Car Insurance </Link></li>
         <li><Link to="/upload"><i className="material-icons grey-text text-lighten-1">flight</i> The Mars Project </Link></li>
       </ul>
     </div>
  )
}

export default Aside