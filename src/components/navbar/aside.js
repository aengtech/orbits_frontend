import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
     <div className="container aside">
       <ul>
         <li><Link to="/buycar"><h6> <i className="material-icons amber-text text-darken-3">add_shopping_cart</i> Buy A Car</h6></Link></li>
         <li><Link to="#"><h6> <i className="material-icons teal-text text-darken-4">local_car_wash</i> Pimp Yo Ride </h6></Link></li>
         <li><Link to="/tradecar"><h6><i className="material-icons">rv_hookup</i> Trade A Car</h6></Link></li>
         <li><Link to="/admin"><h6><i className="material-icons red-text text-darken-2">verified_user</i> Car Insurance </h6></Link></li>
         <li><Link to="/upload"><h6><i className="material-icons grey-text text-lighten-1">flight</i> The Mars Project </h6></Link></li>
       </ul>
     </div>
  )
}

export default Aside