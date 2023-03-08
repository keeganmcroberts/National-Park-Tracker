import ParkDetailPage from './parkDetailPage';
import React, { useRef, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VlZ2FuLW1jcm9iZXJ0cyIsImEiOiJjbGExZmVwdnEwMnF3M3BranY2eG51bmdvIn0.ZZtanHWCPYfhDObnypq7VA';

function Home({parkData, nationalParks, user, setUser}){
    
    //api key = iT95c3FtY8GgMJecfLupDHzfbezucejRgKnDMPu5

    const [errors, setErrors] = useState('')
    const [map, setMap] = useState(null);
    const [lng, setLng] = useState(-94.578331);
    const [lat, setLat] = useState(39.099724);
    const [zoom, setZoom] = useState(3);
    
    const ref = useRef(null);
    const params = useParams()
    const {id} = params

    // console.log("Home Data", parkData)
    // parkData.map(eachPark=>{
    //     if(eachPark.designation === "National Park")
    //     console.log(eachPark)
    // })
    // console.log(parkData.data)
    
    // useEffect(()=>{
    //     fetch(`/users/${id}`)
    //     .then(res =>{
    //         if(res.ok){
    //             res.json()
    //             .then(user=>{
    //                 setUser(user)
    //             })
    //         } else{
    //             res.json().then(errors => setErrors(errors.errors))
    //         }
    //     })
    // }, [user])




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

    // console.log(nationalParks)

    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }))

    const Popup = ({nationalParks})=>{
        nationalParks.map(park=>{
            return(
            <div className='popup'>
            <h3 className='popup-name'>{park.fullName}</h3>
            <button className='popup-button'>Info</button>
            </div>
            )
        })
    }



    if (map){
    parkData.map(eachPark=>{
        if(eachPark.designation === "National Park"){

        const marker = new mapboxgl.Marker({color : 'green'})
        .setLngLat([eachPark.longitude, eachPark.latitude])
        .addTo(map)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${eachPark.fullName} </h3>` + `<button> Park Info </button>`))

        const markerDiv = marker.getElement();

        markerDiv.addEventListener('mouseenter', () => marker.togglePopup());
        markerDiv.addEventListener('mouseleave', () => marker.togglePopup());
       
        marker.getElement().addEventListener("click", ()=> viewPark(eachPark.parkCode))
    }
    })
    }

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
                        <div className='homepage-card-background'>
                        <h5 className='card-title'>{eachPark.fullName}</h5>
                        <img className="homepage-images" src={eachPark.images[0].url}></img>
                        <button className="info-button" onClick={() => viewPark(eachPark.parkCode)}>More info</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}


export default Home;