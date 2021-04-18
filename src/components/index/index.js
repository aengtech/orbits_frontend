import React from 'react';
import { useSelector } from 'react-redux';

import Intro from './intro.js/intro';
import Search from '../search/search';
import ParallaxA from '../parallax/parallaxA';
import ParallaxB from '../parallax/parallaxB';
import NewRelease from './newRelease';
import TopCars from './topCars';

const Index = () => {

  const cars = useSelector(state => state.cars);

  console.log(cars);

  const uniqueArray = [...new Set(cars.map(data => data.brand))]
  console.log(uniqueArray);

  return (
    <section className="section">
        <div className="container">
          <Search />
        </div>
        <Intro />
        <div className="hide-on-large-only">
          <ParallaxA />
        </div>
        <br/>
        
        <NewRelease />
        <div className="hide-on-small-only">
          <ParallaxB />
        </div>
        <TopCars />
    </section>
  )
}

export default Index;