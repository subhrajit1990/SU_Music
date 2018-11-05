'use strict';

import React from 'react';
import {Route,HashRouter,NavLink,BrowserRouter} from 'react-router-dom';

export default class Home extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="text-center row">
	  			
	  				<div className="col-lg-8">
						<div className="home_content">
							<h2>Lorem Ipsum</h2>
							<p>Lorem Ipsum</p>
							<a className="banner_btn" href="#">Get Started</a>
						</div>
					</div>
					<HashRouter>   
						<div className="col-lg-4">
							<div className="home_right_box">
								<div className="menus">
									<NavLink to="/Home">Home</NavLink>
								</div>
								<div className="menus">
									<NavLink to="/Blog">Blog</NavLink>
								</div>
								<div className="menus">
									<NavLink to="/About">About Us</NavLink>
								</div>
								<div className="menus">
									<NavLink to="/Contact">Contact</NavLink>
								</div>
							</div>
					<	/div>
					</HashRouter>
				</div>
			</div>
		);
	}
}