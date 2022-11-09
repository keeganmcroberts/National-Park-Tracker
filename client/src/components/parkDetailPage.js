import React, { useRef, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function ParkDetailPage({eachPark}){

    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    
    const ref = useRef(null);


    useEffect(()=>{
        fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=ucQKJncpa0SLn9kkLWxilWBYcHhCIsr2794F4fte`)
        .then(r => r.json())
        .then(park => console.log("individual park:", park))
    }, [])

    const {parkCode} = useParams();

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



    // console.log(eachPark.images)
    return(
        <div className="parkCard">
            <p>{eachPark.fullName}</p>
            <img className="parkImage" src={eachPark.images[0].url}></img>
            {/* <div ref={ref} className="map-container"> </div> */}
        </div>
    )
}

export default ParkDetailPage;