import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';
import Pins from './Pins';

import css from './Map.scss';

const MAPBOX_TOKEN = "pk.eyJ1IjoiYXJpc21hcmtvIiwiYSI6ImNrOGNidW13eTAwdXgzbm1sYXRicnI4NHQifQ.IMOWmDcDojDN2bUVdSO5AA"; // Set your mapbox token here

function  Map({points}) {
  const [viewport, setViewport] = useState({
    latitude:51,
    longitude: -0.093145,
    zoom: 6,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
       <Pins data={points} />
    </MapGL>
  );
}

export default Map;