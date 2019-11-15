import React from 'react';
import {GoogleMap, Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props){
    super()
    this.state = {
      selectedPlace:{
        name: "My Place",

      },
      center: {
        lat:0 ,
        lng: 0
      }
    }
  }
  render() {

    const mapStyle = {
      width: "70%",
      height: "500px",
      position: "inherit"

    }

    const center1 = {lat : 31.768318,lng: 35.213711}
      return (
        <div  >
        <h1>Todo - organize documentation. I just touch it here</h1>
        <pre>I have do in the other file here some maps, but it's hide each other <br/>
        Anyway - the center is just good for state. He didin't did example so I wasn't sure.
      <br/>
      Maybe u can fork to that.
        </pre>

        <h2>centrer = {
          this.state.center.lat+""
        }</h2>
        <button onClick = {()=>{this.setState({center : center1})}}>test1</button>

        <h1>Another map, with center prop </h1>


        <Map
          google={this.props.google}
          style={mapStyle}
          initialCenter = {{lat: 40.724043, lng : -74.008931}}
          center={
            this.state.center
          }
          zoom={5}
          onClick={this.onMapClicked}
        ></Map>
        </div>
      );
    }
  }
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBuvVXZUkXAxUZCfhCApoFF2uEcyR7r430")
})(MapContainer)
