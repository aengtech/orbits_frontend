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
            <div className="col l2 hide-on-med-and-down">
              <Categories />
              <ParallaxA />
            </div>

            <div className="col s12 m12 l8">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/cars/:id" component={Specs} />
                <Route exact path="/tips/:id" component={Tipper} />
                <Route path="/compare" component={Comparer} />
                <Route path="/upload" component={Uploader} />
                <Route path="/auth" component={Auth} />
              </Switch>
            </div>

            <div className="col l2 hide-on-med-and-down">
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