import React from 'react';

import carstk from '../img/carstk.jpg'

const ParallaxB = () => {
  return (
    <section className="container">
    <div className="parallax-container container">
      <div className="parallax">
        <img src={carstk} alt="parallaxB" />
      </div>
    </div>
    </section>
  )
}

export default ParallaxB;