'use strict';

import React from 'react'
import {Switch,Route,HashRouter,NavLink} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import BlogContainer from './BlogContainer';
import {NotFoundPage, NoDataFoundPage}  from './NotFoundPage';
export const routes = (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/Contact" component={Contact}/>
    <Route path="/About" component={About}/>
    <Route path="/Home" component={Home}/>
    <Route path="/Blog" component={BlogContainer}/>
    <Route component={NotFoundPage}/>
  </Switch>
);


