import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function Home(){
    
    
    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-94.5);
    const [lat, setLat] = useState(39.1);
    const [zoom, setZoom] = useState(9);
    
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current && !map) {
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [lng, lat],
          zoom: zoom
        });
        setMap(map);
      }
    });
    
    
    return (
    <div>
        <h1>Map</h1>
        <div className="map-container" ref={ref} ></div>
    </div>
    )
}

export default Home;