import React from 'react';
import ReactDOM from 'react-dom';


//make start marker green flag, end checkered
class EditMap extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.handleToggleTravel = this.handleToggleTravel.bind(this);
//     this.listenforClick = this.listenforClick.bind(this);
//     this.calcAndDisplayRoute = this.calcAndDisplayRoute.bind(this);
//     this.displayDuration = this.displayDuration.bind(this);
//     this.displayElevation = this.displayElevation.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.toggleBikeOk = this.toggleBikeOk.bind(this);
//     this.toggleRunOk = this.toggleRunOk.bind(this);
//     this.generateWaypointsText = this.generateWaypointsText.bind(this);
//     this.generateWaypoints = this.generateWaypoints.bind(this);
//   }
//
//   componentDidMount() {/*
//      * ReactDOM.findDOMNode gets us a pointer to the actual html DOM
//      * element, not its React component class instance, this is what
//      * Google maps wants to render the map into this.refs is an object
//      * populated by giving children a 'ref' prop when we render
//      */
//    this.props.fetchRoute(this.props.routeId).then(() => {
//      this.setState({
//        travel_mode: this.props.routes.travel_mode,
//        markers: [],
//        waypoints: [],
//        waypoints_text: "",
//        distance: 0,
//        duration: 0,
//        elevation: "",
//        name: "",
//        notes: "",
//        bike_ok: true,
//        run_ok: true
//      }, () => {
//        console.log(this.props);
//        console.log(store.getState());
//      })});
//     const map = ReactDOM.findDOMNode(this.refs.map);
//     const options = {
//       center: this.props.center,
//       zoom: 13,
//       mapTypeControl: true,
//       mapTypeControlOptions: {
//           style: google.maps.MapTypeControlStyle.DEFAULT
//           }
//     };
//     // this line actually creates the map and renders it into the DOM
//     this.map = new google.maps.Map(map, options);
//     this.directionsDisplay = new google.maps.DirectionsRenderer({
//       draggable: true,
//       map: this.map
//     });
//     this.directionsService = new google.maps.DirectionsService;
//     this.distanceMatrixService = new google.maps.DistanceMatrixService();
//     this.directionsDisplay.setMap(this.map);
//     this.generateWaypoints();
//
//     let input = document.getElementById('pac-input');
//     let searchBox = new google.maps.places.SearchBox(input);
//     this.registerListeners(searchBox, this.map);
//     // this.listenForMove();
//     this.listenforClick();
//     this.calcAndDisplayRoute();
//     console.log(this.props);
//     console.log(store.getState());
//   }
//
//   errors() {
//     if (this.props.errors) {
//       return (
//         this.props.errors.map(error => {
//           return (<li className="error" key={error}>{error}</li>);
//         })
//       );
//     }
//   }
//
//   generateWaypoints() {
//     this.state.waypoints_text.split("|").forEach(point => {
//       let latt = point.split(",")[0];
//       let long = point.split(",")[1];
//       this.state.waypoints.push(new google.maps.LatLng(latt, long));
//     })
//   }
//
//   generateWaypointsText() {
//     let text = "";
//     this.state.waypoints.forEach(waypoint => {
//       text += `${waypoint.location.lat()},${waypoint.location.lng()}|`
//     });
//     this.state.waypoints_text = text.substring(0, text.length - 1);
//
//   }
//
//   handleSubmit(e) {
//     this.generateWaypointsText();
//     // alert("David, calm down, I'm working on saving routes.");
//     e.preventDefault();
//     console.log(this.props);
//     //
//     let prop = {
//       travel_mode: this.state.travel_mode,
//       waypoints_text: this.state.waypoints_text,
//       distance: this.state.distance,
//       duration: this.state.duration,
//       // elevation: this.state,
//       name: this.state.name,
//       notes: this.state.notes,
//       bike_ok: this.state.bike_ok,
//       run_ok: this.state.run_ok
//     };
//     this.props.createRoute(prop);
//     console.log("we got here");
//       // .then(data => this.props.history.push(`/home/routes/${data.route.id}`)); implement after making show
//   }
//
//   registerListeners(searchBox, map){
//     let self = this;
//
//     searchBox.addListener('places_changed', function() {
//       var place = searchBox.getPlaces()[0];
//       const latt = place.geometry.location.lat();
//       const long = place.geometry.location.lng();
//       map.panTo(new google.maps.LatLng(latt, long));
//     });
//   }
//
//   toggleRunOk() {this.setState({ run_ok : !this.state.run_ok})}
//   toggleBikeOk() {this.setState({ bike_ok : !this.state.bike_ok})}
//
//   handleToggleTravel(e) {
//     this.setState({ travel_mode: e.target.value},() => {
//     if (this.state.markers.length > 1) {
//       this.calcAndDisplayRoute();
//     }});
//   }
//
//   update(property) {
//     return e => this.setState({ [property]: e.target.value })
//   }
//
//   listenforClick() {
//     const {markers} = this.state;
//     const {waypoints} = this.state;
//     this.map.addListener('click', (e) => {
//       placeMarker(e.latLng, this.map);});
//
//     const placeMarker = (position, map) => {
//       let marker = new google.maps.Marker({
//           position: position,
//           map: map
//         });
//       let loc = new google.maps.LatLng(
//         position.lat(),
//         position.lng()
//       )
//       waypoints.push({location: loc });
//       markers.push(marker);
//
//       if (markers.length > 1) {
//
//         this.calcAndDisplayRoute();
//         this.displayElevation();
//       }
//     }
//   }
//
//   calcAndDisplayRoute() {
//     const {markers} = this.state;
//     const {waypoints} = this.state;
//
//     this.directionsService.route({
//       origin: waypoints[0],
//       destination: waypoints[waypoints.length - 1],
//       travelMode: this.state.travel_mode,
//       waypoints: waypoints.slice(1,-1),
//       // unitSystem: google.maps.UnitSystem.IMPERIAL,
//       provideRouteAlternatives: true
//     },
//     (response, status) => {
//       if (status == 'OK') {
//         this.directionsDisplay.setDirections(response);
//       }
//     });
//     this.calcAndDisplayInfo();
//   }
//
//   calcAndDisplayInfo(){
//     const {markers} = this.state;
//     const {waypoints} = this.state;
//     let dist = 0;
//     let dur = 0;
//     for (let i = 0; i < waypoints.length - 1; i++) {
//       this.distanceMatrixService.getDistanceMatrix({
//         origins: [waypoints[i]],
//         destinations: [waypoints[i + 1]],
//         travelMode: this.state.travel_mode,
//       },
//       (response, status) => {
//         if (status == 'OK') {
//           const info = response.rows[0].elements[0];
//           dist = dist + info.distance.value;
//           dur = dur + info.duration.value;
//           if ( i === waypoints.length - 2) {
//             this.setState({
//               distance: dist,
//               duration: dur
//             });
//           }
//         }
//       })
//     }
//   }
//
//   displayElevation() {
//     // Create an ElevationService.
//     let elevator = new google.maps.ElevationService;
//     let path = this.state.waypoints.map((waypoint) => waypoint.location)
//   }
//
//   displayDuration() {
//     let hsep = "";
//     let msep = "";
//     let ssep = "";
//     let sec = this.state.duration;
//     let hours = Math.floor(sec / 3600);
//     sec -= hours * 3600;
//     let minutes = Math.floor(sec / 60);
//     sec -= minutes * 60;
//     if (hours < 10) {hsep = "0" };
//     if (minutes < 10) {msep = "0" };
//     if (sec < 10) {ssep = "0" };
//     return `${hsep}${hours}:${msep}${minutes}:${ssep}${sec}`;
//   }
//
//   render() {
//     if (!this.state) {return null};
//     const { travel_mode, distance, duration, name, notes } = this.state;
//   /*
//    * the div that will become the map is just an empty div
//    * we give it a 'ref' so we can easily get a pointer to the
//    * actual dom node up in componentDidMount
//    */
    render(){return()}}
//       <div>
//         <ul>{this.errors()}</ul>
//         <span>MAP DEMO</span>
//         <input className="name-route-input" onChange={this.update('name')} value={name} placeholder="Route name"/>
//         <button className={this.state.bike_ok ? 'active' : 'inactive'} onClick={this.toggleBikeOk}>Bike Friendly Route</button>
//         <button className={this.state.run_ok ? 'active' : 'inactive'} onClick={this.toggleRunOk}>Run Friendly Route</button>
//         <textarea className="notes-route-input" onChange={this.update('notes')} value={notes} placeholder="Route notes"/>
//         <button onClick={this.handleSubmit}>Update Route</button>
//         <input id="pac-input" className="controls" type="text" placeholder="Search Box"/>
//         <ul className="route-info-list">
//           <li>Distance: {Math.round(100 * distance / 1609.34) / 100} miles</li>
//           <li>Duration: {this.displayDuration()}</li>
//           <li>Elevation change:</li>
//         </ul>
//         <div className="route-type-btns">
//           <button value="BICYCLING" onClick={this.handleToggleTravel}>Bike</button>
//           <button value="WALKING" onClick={this.handleToggleTravel}>Run</button>
//         </div>
//         <div id='map' ref='map'/>
//         <div id="elevation_chart"></div>
//       </div>
//     );
//   }
// }

export default EditMap;
