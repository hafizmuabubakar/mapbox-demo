import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './App.css';
 
mapboxgl.accessToken = 'Your_KEY';





  function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(54.0550);
    const [lat, setLat] = useState(25.2027);
    const [zoom, setZoom] = useState(1.20);
     
    useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [lng, lat],
    zoom: zoom,
    projection: 'globe'
    });
     
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });






    return (
      <div className="background">

            <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className="map-container" />
       
      </div>
    );
  }

  export default App;
