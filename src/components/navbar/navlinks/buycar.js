import React from 'react';

import carvana from '../../img/carvana.png';
import carmax from '../../img/carmax.jpg';
import autotrader from '../../img/autotrader.jpg';
import tred from '../../img/tred.png';
import tcar from '../../img/tcar.png';

const BuyCar = () => {
  return (
    <section className="section">
      <h4 className="indigo-text text-darken-5 ">Find The Best Online Car Buyying Websites....</h4>
      <div>
        <ul>
          <li className="cards teal lighten-5">
            <div className="inCards deep-purple lighten-5 z-depth-2 cyan-lighten-5 row container">
              <h4 className="blue-text text-darken-4"> CARVANA </h4>
              <ul className="noted col s8 m8 l8">
                <li> 100-day/4,189-mile limited warranty </li>
                <li> 7-day return policy </li>
                <li> Fixed prices </li>
                <li> No minimum credit score for financing </li>
              </ul>
              <a to="https://carvana.com/" className="col s4 m4 l4">
                <img src={carvana} alt="cars" className="buycars"/>
              </a>
            </div>
            <p className="flow-text">
              Offers dynamic search filters and 360-degree photos. Prequalify for financing in two minutes. Vehicle pickup and delivery options. Purchases include a 100-day/4,189-mile limited warranty and a seven-day money-back guarantee.
            </p>

          </li>

          <hr/>

          <li className="cards teal lighten-5">
            <div className="inCards deep-purple lighten-5 z-depth-2 cyan-lighten-5 row container">
              <h4 className="blue-text text-darken-4"> CarMax </h4>
              <ul className="brown-text text-darken-2 col s8 m8 l8">
                <li> 90-day/4,000-mile limited warranty </li>
                <li> 7-day return policy </li>
                <li> Fixed prices </li>
                <li> Financing available for most credit profile </li>
              </ul>
              <a to="https://carmax.com/" className="col s4 m4 l4">
                <img src={carmax} alt="cars" className="buycars"/>
              </a>
            </div>
            <p className="flow-text"> 
              Performs 125-point inspections. Buy with no haggling or pressure. Seven-day trial period with the option to return a vehicle for a full refund. Covers major systems for 90 days or 4,000 miles. No fee for home delivery. 
            </p>

          </li>

          <hr/>

          <li className="cards teal lighten-5">
          <div className="inCards deep-purple lighten-5 z-depth-2 cyan-lighten-5 row container">
            <h4 className="blue-text text-darken-4"> Autotrader.com </h4>
            <ul className=" col s8 m8 l8">
              <li> Warranties vary by car </li>
              <li> No return policy </li>
              <li> Negotiable pricing </li>
              <li> Financing available through LendingTree </li>
            </ul>
            <a to="https://autotrader.com/" className="col s4 m4 l4 push-1">
              <img src={autotrader} alt="cars" className="buycars"/>
            </a>
          </div>
          <p className="flow-text">
            Lets you search a large selection of new, used and certified cars from dealers and private sellers. Includes photos, videos and reviews. Offers financing, insurance and warranty help. Used by over 14 million shoppers each month.
          </p>

          </li>

          <hr/>
          
          <li className="cards teal lighten-5">
          <div className="inCards deep-purple lighten-5 z-depth-2 cyan-lighten-5 row container">
            <h4 className="blue-text text-darken-4"> Tred </h4>
            <ul className=" col s8 m8 l8">
              <li> Offers add-on warranties </li>
              <li> No return policy </li>
              <li> Verifies vehicle histories </li>
              <li> Offers financing for most cars on its site </li>
            </ul>
            <a to="https://tred.com/" className="col s3 m3 l3 push-1">
              <img src={tred} alt="cars" className="buycars"/>
            </a>
          </div>
            <p className="flow-text">
            Person-to-person marketplace for used cars. Verifies buyer identity, checks vehicle history and guarantees title. Handles all paperwork. Works with multiple lenders, including some with same-day approval. Offers protection plans.
            </p>

          </li>

          <hr/>
          
          <li className="cards teal lighten-5">
          <div className="inCards deep-purple lighten-5 z-depth-2 cyan-lighten-5 row container">
            <h4 className="blue-text text-darken-4"> TrueCar </h4>
            <ul className=" col s8 m8 l8">
              <li> No warranties </li>
              <li> 7-day, 250-mile return policy </li>
              <li> Nonnegotiable pricing </li>
              <li> Offers Financing through OpenRoad Lending </li>
            </ul>
            <a to="https://carvana.com/" className="col s3 m3 l3 push-1">
              <img src={tcar} alt="cars" className="buycars"/>
            </a>
          </div>
          <p className="flow-text">
            Offers pricing data from new and used vehicle sales in your area. Requires certified dealerships to honor its price reports. Allows customers to complete paperwork remotely and get home delivery with select dealerships.
          </p>

          </li>
        </ul>
      </div>
    </section>
  )
}

export default BuyCar;