import React, { useRef, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function ParkDetailPage({eachPark, showList, setShowList}){

    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom, setZoom] = useState(8);
    const [park, setParkState] = useState([])
    
    const ref = useRef(null);

    const {parkCode} = useParams();
    console.log(parkCode)
    
    useEffect(()=>{
        fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=ucQKJncpa0SLn9kkLWxilWBYcHhCIsr2794F4fte`)
        .then(r => r.json())
        .then(park =>   setParkState(park.data))
    }, [parkCode])

    console.log("park", park)
    // console.log("long", lng)
    // console.log("lat", lat)



    useEffect(()=>{
      if (ref.current) {
        const map = new mapboxgl.Map({
          container: ref.current,
          style: "mapbox://styles/mapbox/streets-v11",
          center: [park.map(parkData=>{
              return parkData.longitude
          }), park.map(parkData=>{
           return parkData.latitude
        })],
          zoom: zoom
        });
        setMap(map);
        setShowList(!showList)
      }
    },[park])


    return(
        // <div></div>
        park.map(parkData=>{
            return(
                <div className="parkCard">
                    <p className='parkTitle'>{parkData.fullName}</p>
                    <div className='parkHeader'>
                        <img className="parkImage" src={parkData.images[0].url}></img>
                        <div ref={ref} className="map-container"> </div>
                    </div>
                    <h2 className='parkDescription'>{parkData.description}</h2>
                    <div className='parkInfo'>
                        <div className='weather'>
                            Weather
                            <h5>{parkData.weatherInfo}</h5>
                        </div>
                        <div className='directions'>
                            Directions
                            <h5>{parkData.directionsInfo}</h5>
                        </div>
                    </div>
                </div>
            ) 
        })
    )
}

export default ParkDetailPage;