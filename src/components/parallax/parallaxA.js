import React from 'react'

import mustang from '../img/mustang.jpg'

const ParallaxA = () => {
  return (
    <section className="parallax-container">
      <div className="parallax">
        <img src={mustang} alt="parallaxA"/>
      </div>
    </section>
  )
}

export default ParallaxA
