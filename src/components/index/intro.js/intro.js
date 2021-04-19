import React from 'react';

import lectra from '../../img/lectra.jpg';
import musty from '../../img/mustty.jpg';
import cybt from '../../img/cybt.jpg';

const Intro = () => {
  return (
    <>
      <section className="container">
        <div className="carousel">

          <div className="carousel-item" href="#one!">
            <div className="card indigo lighten-5">
              <div className="card-image">
                <img src={cybt} alt="electric"/>
              </div>
              <div className="card-content">
                <h4 className="card-title "> Electric</h4>
                <p className="teal-text text-darken-4"> Electric, zero emission engines are generally available in the sub-compact to mid-sized vehicle range, and typically go less than 100 miles per charge. </p>
              </div>
            </div>          
          </div>

          <div className="carousel-item" href="#two!">
            <div className="card grey lighten-4">
              <div className="card-image">
                <img src={lectra} alt="hybrids"/>
              </div>
              <div className="card-content">
                <h4 className="card-title  blue-grey-text text-darken-1"> Hybrids</h4>
                <p className=""> If you're looking for better fuel economy, lower emissions to boot, but need more flexibility (mileage), go for hybrids. You get the best of both worlds </p>
              </div>
            </div>
          </div>

          <div className="carousel-item deep-orange-text text-darken-4" href="#five!">
            <div className="card brown lighten-5 ">
              <div className="card-image">
                <img src={cybt} alt="phev"/>
              </div>
              <div className="card-content">
                <h5 className="card-title "> Plug-in Hybrid Electric</h5>
                <p className="grey-text text-darken-2">P.H.E Vehicles use a combination of gas and electric to increase fuel economy, just like a standard hybrid. PHEV gives you an all-electric option. </p>
              </div>
            </div>
          </div>

          <div className="carousel-item" href="#three!">
            <div className="card yellow lighten-5 brown-text text-darken-4">
              <div className="card-image">
                <img src={musty} alt="gas"/>
              </div>
              <div className="card-content">
                <h4 className="card-title"> Gas</h4>
                <p>In general, gas engines are inefficient, Only about 14% - 30% of the energy is used to move the car. (compared to the 25%-40% rating of hybrids) </p>
              </div>
            </div>
          </div>
          <div className="carousel-item deep-orange-text text-darken-4" href="#four!">
            <div className="card brown lighten-5 ">
              <div className="card-image">
                <img src={musty} alt="diesel"/>
              </div>
              <div className="card-content">
                <h4 className="card-title "> Diesel</h4>
                <p className="grey-text text-darken-2">They're 33% more fuel efficient than gas vehicles, And they're required to meet the same emission standards as a gas vehicle. </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Intro;
