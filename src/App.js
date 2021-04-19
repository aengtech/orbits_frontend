import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCars } from './components/actions/car';
import { getTips } from './components/actions/tip';

import './App.css';
import ParallaxA from './components/parallax/parallaxA';
import ParallaxB from './components/parallax/parallaxB';
import Categories from './components/navbar/categories';
import Aside from './components/navbar/aside';


import NavBar from './components/navbar/nav';
import Index from './components/index/index';
import Comparer from './components/forms/comparer/comparer';
import Uploader from './components/forms/uploader/uploader';
import Specs from './components/index/details/specs';
import Foot from './components/footer/footIndex';
import Auth from './components/forms/Auth/Auth';
import CarTips from'./components/index/carTips';
import Tipper from './components/index/details/tipper';
import Models from './components/navbar/models';

import BuyCar from './components/navbar/navlinks/buycar';
import TradeCar from './components/navbar/navlinks/tradecar';
import Admin from './components/admin/admin';

const App = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCars());
      dispatch(getTips());
    }, [dispatch]);
  
    return (
      <BrowserRouter>
        <div className="app ">
          <NavBar />

          <div className="row">
            <div className="col l2 hide-on-med-and-down yellow lighten-5">
              <Categories />
              <ParallaxA />
            </div>

            <div className="col s12 m12 l8">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/cars/:id" component={Specs} />
                <Route exact path="/brands/:modes" component={Models} />
                <Route exact path="/tips/:id" component={Tipper} />
                <Route path="/compare" component={Comparer} />
                <Route path="/upload" component={Uploader} />
                <Route path="/auth" component={Auth} />
                <Route path="/buycar" component={BuyCar} />
                <Route path="/tradecar" component={TradeCar} />
                <Route path="/admin" component={Admin} />

              </Switch>
            </div>

            <div className="col l2 hide-on-med-and-down grey lighten-4">
              <Aside />
              <ParallaxB />
            </div>
          </div>
          <CarTips />
          <Foot />
        </div>
      </BrowserRouter>
    );
  };
  
  export default App;