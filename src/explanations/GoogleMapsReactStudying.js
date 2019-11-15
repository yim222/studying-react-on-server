import React from 'react';
import MapContainer from './MainMapContainer';



//Little example app for learning related things.
 export class GoogleMapsReactStudying extends React.Component{//need to be able to export

  constructor(props){
    super();
    //uuid reminder
    this.idGenerator =  require('uuid/v1');



  }

  //If stateful u must those ?:

  componentDidMount(){
  }

  componentWillUnmount(){


  }

  render(){
    return(
      <div >
        <h1>Studying Google Maps With React </h1>
        <p><a href = "https://github.com/fullstackreact/google-maps-react">Work with this library</a></p>
        <p>See at the container , how I put a simple onClick with the props. It's very easy U just know the prencible of Google maps</p>
        <MapContainer/>

      </div>
    );

  }
}
