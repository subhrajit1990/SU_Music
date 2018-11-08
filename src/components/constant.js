'use strict';

import React from 'react'
import {Switch,Route,HashRouter,NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Artists from './Artists';
import Events from './Events';
import {NotFoundPage, NoDataFoundPage}  from './NotFoundPage';
export const routes = (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/About" component={About}/>
    <Route path="/Home" component={Home}/>
    <Route path="/Artists" component={Artists}/>
    <Route path="/Events" component={Events}/>
    <Route component={NotFoundPage}/>
  </Switch>
);


