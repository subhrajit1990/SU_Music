'use strict';

import React,{Fragment} from 'react';
import NewRegistration from './NewRegistration';


export default class Events extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      registration: false
    };
    this.eventRegistration = this.eventRegistration.bind(this);
  }


	eventRegistration(){
		console.log("Yes Registration");
		 this.setState( prevState => ({
		 	
        registration: !prevState.registration
    }));
	}

	render(){
		return(
		<Fragment>
			<div>Hello</div>
			<button onClick={this.eventRegistration}>Registration</button>
			{(this.state.registration) ? <NewRegistration/> : null}
		</Fragment>
		);
	}

}