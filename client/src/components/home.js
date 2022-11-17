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

    
    // const marker = new mapboxgl.Marker()
    //     .setLngLat([-94, 39])
    //     .addTo(map)
        // .setPopup(new mapboxgl.Popup().setHTML("<h3>City</h3>"))


    let navigate = useNavigate();
    
    function viewPark(parkCode){
        navigate(`/park/${parkCode}`)
    }
    
    return(
        <div className='homepage'>
            <div ref={ref} className="home-map-container"> </div>
            <div className="homePageGrid">   
            {parkData.map(eachPark=>{
                if(eachPark.designation === "National Park")
                return (
                    <div className="home--park-card">
                        <h5 className='card-title'>{eachPark.fullName}</h5>
                        <img onClick={() => viewPark(eachPark.parkCode)}  className="homepage-images" src={eachPark.images[0].url}></img>
                        <button className="info-button" onClick={() => viewPark(eachPark.parkCode)}>More info {'>>'} </button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default Home;