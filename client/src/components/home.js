import ParkDetailPage from './parkDetailPage';
import React, { useRef, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function Home({parkData}){
    
    //api key = iT95c3FtY8GgMJecfLupDHzfbezucejRgKnDMPu5


    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-94.578331);
    const [lat, setLat] = useState(39.099724);
    const [zoom, setZoom] = useState(2);
    
    const ref = useRef(null);


    // console.log("Home Data", parkData)
    // parkData.map(eachPark=>{
    //     if(eachPark.designation === "National Park")
    //     console.log(eachPark)
    // })
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
    }, []);

    let navigate = useNavigate();
    
    function viewPark(parkCode){
        navigate(`/park/${parkCode}`)
    }
    
    return(
        <div className='homepage'>
            <div ref={ref} className="home-map-container"> </div>
            <div className="parkPage">   
            {parkData.map(eachPark=>{
                if(eachPark.designation === "National Park")
                return (
                    <div>
                        <h5>{eachPark.fullName}</h5>
                        <img onClick={() => viewPark(eachPark.parkCode)}  className="homepage-images" src={eachPark.images[0].url}></img>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default Home;