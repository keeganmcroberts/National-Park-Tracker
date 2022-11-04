import ParkDetailPage from './parkDetailPage';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function Home({parkData}){
    
    //api key = iT95c3FtY8GgMJecfLupDHzfbezucejRgKnDMPu5


    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
    const ref = useRef(null);


    console.log("Home Data", parkData)
    // console.log(parkData.data)
    
    
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
    
    return(
        parkData.map(eachPark=>{
            if(eachPark.designation === "National Park")
            return (
                <ParkDetailPage key={eachPark.id} eachPark={eachPark}/>
            )
        })
    )
}


export default Home;