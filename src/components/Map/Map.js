import React, { useContext, useState, useEffect } from 'react';
import {render} from 'react-dom';
import MapGL, {GeolocateControl } from 'react-map-gl';
import Pins from './Pins';

import css from './Map.scss';

function  Map({points}) {
  const [viewport, setViewport] = useState({
    latitude:51,
    longitude: -0.093145,
    zoom: 6,
    bearing: 0,
    pitch: 0
  });

  const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px',
    color: 'green'
  };


  const [ location, setLocation] = useState(false);

  useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              setLocation(`${position.coords.latitude},${position.coords.longitude}`)

              setViewport({
                latitude:position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 11,
                bearing: 0,
                pitch: 0
              })
          });

         
      } else { 
          setLocation(none, none)
      }
      
  },[]);

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
    >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
      />
      <Pins data={points} />
    </MapGL>
  );
}

export default Map;