import React from 'react';

import Footer from './footer';
import Leg from './leg';

import tesblk from '../img/tesblck.jpg';
import carsld from '../img/carsld.jpg';

import profile from '../img/profile.jpg'

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
          <div className=" footpng col s6 l3 m3 grey lighten-1">
            <img src={tesblk} alt="car logos" className="brandlogos"/>
            <img src={carsld} alt="car logos" className="brandlogos"/>
          </div>
          <div className=" profile col l5 m5 brown darken-4 brown-text text-lighten-4 hide-on-small-only">
            <h4>AENG TECH</h4>
            <div className="profdets col grey darken-4 row">
              <div className="col l4 m4">
                <img src={profile} alt="" className="profile"/>
              </div>
              <div className="col l7 m7">
                <ul> 
                  <li> <h6>Name: Pouke Angus</h6></li>
                    <li> <h6>Email: anguspoukeone@gmail.com</h6> </li>
                    <li><h6> School: Mechanical Engr.</h6> </li>
                </ul>
              </div>
              
            </div>
              <div className="m12 l12">
                <ul className="specialties">
                  <li><img src={css} alt="css" className="profprops"/></li>
                  <li><img src={html} alt="css" className="profprops"/><sup>++</sup></li>
                  <li><img src={jvs} alt="css" className="profprops"/></li>
                  <li><img src={node} alt="css" className="profprops"/></li>
                  <li><img src={react} alt="css" className="profprops"/></li>
                </ul>
              </div>

          </div>
          <div className="col s12 l12 m12">
            <Leg />
          </div>
        </section>
      </div>
  )
}

export default Foot 
