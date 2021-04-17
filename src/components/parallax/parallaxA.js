import React from 'react'

import mustang from '../img/mustang.jpg'

const ParallaxA = () => {
  return (
    <section className="parallax-container hide-on-large-only">
      <div className="parallax">
        <img src={mustang} alt="parallaxA"/>
      </div>
    </section>
  )
}

export default ParallaxA
