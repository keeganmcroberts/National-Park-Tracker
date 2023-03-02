import React, { useRef, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Rate from './Rating';
import Review from './review';
import { AiOutlineCheckCircle } from "react-icons/ai";
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function ParkDetailPage({eachPark, user}){

    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const [zoom, setZoom] = useState(9);
    const [park, setParkState] = useState([])
    const [visitedPark, setVisitedPark] = useState(false)
    
    const ref = useRef(null);

    const {parkCode} = useParams();
    // console.log(parkCode)
    
    useEffect(()=>{
        fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=ucQKJncpa0SLn9kkLWxilWBYcHhCIsr2794F4fte`)
        .then(r => r.json())
        .then(park =>   setParkState(park.data))
    }, [parkCode])


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
      }
    },[park])


    function likePark(){
        setVisitedPark(!visitedPark)
    }


    return(
        // <div></div>
        park.map(parkData=>{
            return(
                <div className="parkCard">
                    <div className="card-background">
                    <h1 className='parkTitle'>{parkData.fullName} <AiOutlineCheckCircle onClick={likePark} color={visitedPark? "rgb(0,0,225)" : "rgb(0,0,0)" }/></h1>
                    <div className='parkHeader'>
                        <img className="parkImage" src={parkData.images[0].url}></img>
                    </div>
                    <h2 className='parkDescription'>{parkData.description}</h2>
                    <div className='parkInfo'>
                        <div className='weather'>
                            <h3>Weather</h3>
                            <h5>{parkData.weatherInfo}</h5>
                        </div>
                        <div className='directions'>
                            <h3>Directions</h3>
                            <h5>{parkData.directionsInfo}</h5>
                        </div>
                    </div>
                    <div ref={ref} className="map-container"> </div>
                    <div className='activities'>
                        <h3>Activities</h3>
                        {parkData.activities.map(activity=>{
                            return(
                            <div className='activities-list'>
                                <h5 className='activities-list'>{activity.name}</h5>
                            </div>
                            )
                        })}
                     </div>
                     </div>
                     <Rate/>
                     <Review user={user}/>
                </div>
            ) 
        })
    )
}

export default ParkDetailPage;