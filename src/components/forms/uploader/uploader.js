import React from 'react';

import TipUpload from './tips';
import CarUpload from './cars';

const Uploader = () => {
  return (
    <section className="container section" id="topCars">
      <ul className="tabs">
        
        <li className="tab">
          <a href="#tabA" className="indigo-text text-darken-4"> Tips </a>
        </li>

        <li className="tab">
          <a href="#tabB" className="indigo-text text-darken-4"> Cars </a>
        </li>

      </ul>

      <div className="col s12" id="tabA">
        <TipUpload />
      </div>

      <div className="col s12" id="tabB">
        <CarUpload />
      </div>
    </section>
  )
}

export default Uploader;