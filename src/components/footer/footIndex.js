import React from 'react';

import Leg from './leg';



const Foot = () => {
  return (
      <div className="foot">
        <section className="row">
          <div className="foot profile col s12 l12 m12 brown lighten-3 brown-text text-lighten-4">
          </div>
          <div className="col s12 l12 m12">
            <Leg />
          </div>
        </section>
      </div>
  )
}

export default Foot 
