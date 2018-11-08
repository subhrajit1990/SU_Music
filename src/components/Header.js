'use strict';

import React from 'react';
import {routes} from './constant';


export default class Header extends React.Component{
	render(){
		return(
			<header>
				
				    <nav className="navbar navbar-default navbar-fixed">
	                    <div className="container">
	                        <div className="navbar-header">
	                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	                                <span className="icon-bar"></span>
	                                <span className="icon-bar"></span>
	                                <span className="icon-bar"></span>                        
	                            </button>
	                            <a className="navbar-brand" href="#Home">Logo</a>
	                        </div>
	                    </div>
                	</nav>
				
			</header>
		);
	}

}