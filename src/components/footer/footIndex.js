import React from 'react';

import Footer from './footer';
import Leg from './leg';

import tesblk from '../img/tesblck.jpg';
import carsld from '../img/carsld.jpg';

import profile from '../img/profile.jpg';
import orbitsA from '../img/orbitsA.png';

import css from '../img/css.svg'
import html from '../img/html.svg'
import jvs from '../img/jvs.svg'
import node from '../img/node.svg'
import react from '../img/react.svg'


const Foot = () => {
  return (
      <div className="foot">
        <section className="row">
          <div className="col s6 l4 m4 grey lighten-3">
            <Footer />
          </div>
          <div className=" footpng col s6 l3 m3 grey lighten-1  hide-on-small-only">
            <img src={tesblk} alt="car logos" className="brandlogos"/>
            <img src={carsld} alt="car logos" className="brandlogos"/>
          </div>
          <div className=" profile col s6 l5 m5 brown lighten-3 brown-text text-lighten-4">
            <img src={orbitsA} alt="" className="orbF left"/>

          </div>
          <div className="col s12 l12 m12">
            <Leg />
          </div>
        </section>
      </div>
  )
}

export default Foot 
