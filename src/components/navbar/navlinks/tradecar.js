import React from 'react';

import carscom from '../../img/carscom.png';
import autotrader from '../../img/autotrader.jpg';
import ebay from '../../img/ebay.jpg';
import hems from '../../img/hems.png';
import cargr from '../../img/cargr.png';

const TradeCar = () => {
  return (
    <section className="section">
      <h3>Find The Best Online Car Exchange Websites....</h3>
      <div>
        <ul>
          <li>
            <div className="z-depth-2 cyan-lighten-5">
              <a to="https://cars.com/">
                <img src={carscom} alt="cars"/>
                <h4> Cars.com </h4>
              </a>
                <p className="flow-text"> 
                  This site is still the gold standard for auto sales because they syndicate their listings so widely, and they have a huge inventory. When you sell a car on Cars.com — whether you choose the free listing option or one of the paid options — your listing may be syndicated on their other properties (Auto.com, PickupTrucks.com, and NewCars.com) and on the sites of Cars.com affiliates. They also offer sellers the option of making quick sales to dealers, so if you need to move your vehicle fast, you can.   
                  Why do some people opt to make quicker dealer sales when it usually means selling for less? While the site’s huge inventory is an obvious pro for buyers, it can be a drawback for sellers. Unless you have amazing photos of your car or truck or you’re selling a model that’s in high demand, you may find it tough to make your listing stand out from the crowd.  
                </p>
            </div>
          </li>

          <hr/>

          <li>
            <div className="z-depth-2 cyan-lighten-5">
              <a to="https://autotrader.com/" className="col s4 m4 l4">
                <img src={autotrader} alt="cars"/>
                <h4> Autotrader </h4>
              </a>
                <p className="flow-text">
                Buyers like AutoTrader because the advanced search tools make it easy to find very specific models and option packages. Sellers like the fact that some listing packages come with a money back guarantee (no sale, no charge) and listings are syndicated on Kelley Blue Book. There’s also the option to sell to a dealership for a faster sale or even to get an instant cash offer on the site. Again, if a speedy sale is more important to you than getting top dollar, AutoTrader is one of the sites that make it easy to unload a vehicle fast.  
                </p>
            </div>
          </li>

          <hr/>

          <li>
            <div className="z-depth-2 cyan-lighten-5">
              <a to="https://cargurus.com/" className="col s4 m4 l4">
                <img src={cargr} alt="cars"/>
                <h4> CarGurus </h4>
              </a>
                <p className="flow-text">
                  This is another site that lets sellers create listings for free, though be aware that if you sell your vehicle via the listing, you’ll be charged $99 regardless of the purchase price. There are lots of buyers on the site — 20 million per month — because of a feature unique to CarGurus (that not all sellers like). Every listing is assigned a deal rating that can range from great to overpriced, so if you’re trying to get top dollar for your ride and you’re not willing to adjust your price, this might not be the best place to post your listing. 
                </p>
            </div>
          </li>

          
          <li>
            <div className="z-depth-2 cyan-lighten-5">
              <a to="https://ebay.com/" className="col s4 m4 l4">
                <img src={ebay} alt="cars"/>
                <h4> ebay Motors </h4>
              </a>
                <p className="flow-text"> Once upon a time, most people would have found the idea of buying a car on eBay pretty shocking, but nowadays it happens all the time. If you’re already familiar with how selling on eBay works and/or you want to sell your car locally (which some people do because they don’t have to help a faraway buyer coordinate car transport), then selling your vehicle on eBay Motors might be a great option for you.  

Setting up listings is simple. Local listings are free and national listings are just $60-$125 and, according to eBay, most cars and trucks sell relatively quickly. Are there downsides to listing on eBay? The biggest downside may be that bids are non-binding, so a buyer can back out for any reason at any point in the process. </p>
            </div>
          </li>

          
          <li>
            <div className="z-depth-2 cyan-lighten-5">
              <a to="https://hemmings.com/" className="col s4 m4 l4">
                <img src={hems} alt="cars"/>
                <h4> Hemmings </h4>
              </a>
                <p className="flow-text"> 
                  Hemmings is where buyers who are looking specifically for classic and collector cars go to buy. So if that’s what you’re selling, this site is where you want to be. Hemmings is super popular with classic car enthusiasts, and they’re not kidding when they say a listing (which will be published online and in print in Hemmings Motor News) can reach millions of buyers. The best part is that these buyers love cars and usually know exactly what they want. If you’re selling, say, a 1963 Chevy Impala, you’ll attract buyers who love that car as much as you do and understand how classic car transport works.
                </p>
            </div>
          </li>


        </ul>
      </div>
    </section>
  )
}

export default TradeCar;