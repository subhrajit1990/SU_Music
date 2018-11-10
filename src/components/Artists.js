'use strict';

import React,{Component} from 'react';
import requestService from '../api/api';


const MyContext = React.createContext();

class MyProvider extends Component {
  render() {
    return (
      <MyContext.Provider value={{
        state: this.props.apiresponse
      }} >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = (props) => (
  <div className='row'>
   <ArtistName />
    <ArtistDetails />
  </div>
);

class ArtistName extends Component {

  render() {
    return (

      <div className="box">
        <MyContext.Consumer >
          {(context) => (
            <React.Fragment>
              <h1>Person</h1>
              {(context.state).map((id, val) => {
                return (
                  <div key={val}>{id["id"]}</div>
                );
              })}

            </React.Fragment>
          )}
        </MyContext.Consumer >
      </div>
    );
  }
}

class ArtistDetails extends Component {
  render() {
    return (
      <div className="box">
        <MyContext.Consumer >
          {(context) => (
            <React.Fragment>
              <h1>Description</h1>

             {(context.state).map((id, val) => {
                return (
                  <div key={val}>{id["title"]}</div>
                );
              })}
            </React.Fragment>
          )}
        </MyContext.Consumer >
      </div>
    );
  }
  }

// Main App Component
export default class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
    this.movieListResponse = this.movieListResponse.bind(this);
  }

  componentDidMount() {
    requestService("/staticData/artist.json")
    .then(response => response.json())
    .then(this.movieListResponse);
  }

  movieListResponse(res) {
    this.setState({
      movieList: res.movies
    })
  }

  render() {
    const apiRes = this.state.movieList;
    return (
      <div>
        <MyProvider apiresponse={apiRes}>
          <div>
            <p>I am app</p>
            <Family />
          </div>
        </MyProvider>
      </div>

    );
  }
}
