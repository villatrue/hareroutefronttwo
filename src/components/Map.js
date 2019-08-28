
    import React from "react";
    // import ReactDOM from "react-dom";
    import sortBy from 'lodash/sortBy'
    import { compose, withProps, lifecycle } from "recompose";
    import {
      withScriptjs,
      withGoogleMap,
      DirectionsRenderer,
      GoogleMap,
      // Marker
    } from "react-google-maps";

    
    
    const MyMapComponent = compose(
      withProps({ 
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyC7ERWRYIf_1wu7R02ZBnwCsG_48gpDNg4&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
      }),
      withScriptjs,
      withGoogleMap
      ,
      lifecycle({
        componentDidMount(props) {
          const DirectionsService = new window.google.maps.DirectionsService();

            const arr=[...this.props.waypoints]
            let varr= sortBy(arr, ['ar', 'optimal_index'])

            console.log(varr)
            debugger
            const first= varr.shift()
            const last= varr.pop()
            const waypts=[]
            varr.map(address=>{
              console.log(address)
               let obj = {location: new window.google.maps.LatLng(address.latitude, address.longitude)}
              return waypts.push(obj)
            })
            
            
          DirectionsService.route({
            origin: new window.google.maps.LatLng(first.latitude, first.longitude),
            destination: new window.google.maps.LatLng(last.latitude, last.longitude),
            waypoints: waypts,
            optimizeWaypoints: false,
            travelMode: window.google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props => (
      <div>
        {props.waypoints!==undefined?<GoogleMap defaultZoom={14} defaultCenter={{ lat: props.waypoints[0].latitude, lng: props.waypoints[0].longitude }}>
        {props.directions && <DirectionsRenderer waypoints={props.waypoints} directions={props.directions} />}
        </GoogleMap>: null}
      </div>
    ));

    export default MyMapComponent
    
    // ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));
    