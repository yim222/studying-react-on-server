import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends React.Component {
  constructor(props){
    super()
    this.state = {
      selectedPlace:{
        name: "My Place"
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

        <div>
          <Map google={this.props.google} zoom={3} style = {mapStyle}
          onClick={(mapProps, map, ev)=> {
          alert(ev.latLng.lat());
        }}
          >

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: 3.778519, lng: -122.405640}} />
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>
        </div>
        <div>
          <Map google={this.props.google} zoom={3} style = {mapStyle}
          onClick={(mapProps, map, ev)=> {
          alert(ev.latLng.lat());
        }}
          >

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={{lat: 3.778519, lng: -122.405640}} />
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
          </Map>

        </div>
        <h1>Another map, with center prop </h1>
        <div>
          <Map google={this.props.google} initialCenter = {center1}


        />
        </div>
        <Map
          google={this.props.google}
          style={mapStyle}
          center={{
            lat: 31.768318,
            lng: 35.213711
          }}
          zoom={15}
          onClick={this.onMapClicked}
        ></Map>
        </div>
      );
    }
  }
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBuvVXZUkXAxUZCfhCApoFF2uEcyR7r430")
})(MapContainer)
