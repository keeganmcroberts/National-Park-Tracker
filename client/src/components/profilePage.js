
import {useNavigate, useParams} from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';


function ProfilePage({user, setUser, parkData}){

    const [errors, setErrors] = useState(false)
    const [parksArray, setParksArray] = useState([])

    const params = useParams()
    const {id} = params

    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res=>{
            if (res.ok){
                res.json().then(user=>{
                    setUser(user)
                    
                })
            } else{
                res.json().then(data=>console.log(data.errors))
            }
        })
    },[])


    useEffect(()=>{
        fetch("/userParks")
        .then(res => res.json())
        .then(parks =>
            
            setParksArray(parks)
        
        )
}, [])


    let navigate = useNavigate();
    
    function viewPark(parkCode){
         navigate(`/park/${parkCode}`)
    }


    function deletePark(id, user_id){
        fetch(`/deletePark/${id}`,{
            method:'DELETE'
        })

      .then(()=>{
        fetch("/userParks")
        .then(res => res.json())
        .then(data => setParksArray(data))    
      })
}


return (
    <div>
        <div className='profile-page'>
        {user ? 
        <h2 className='profile-page-title'>{user.email}</h2>
        : null}
        <h1 className='profile-page-title'>My Visited Parks:</h1>
        </div>
        <div className='personalProfileGrid'>
        {parkData.map(eachPark=>{
           if (user)
            return(
                parksArray.map(myParks=>{
                if (user.id === myParks.user_id && eachPark.parkCode === myParks.parkCode)
                    return(
                    <div className='home--park-card'>
                        <h4 className='card-title'>{eachPark.fullName}</h4>
                        <img className='homepage-images' src={eachPark.images[0].url}></img>
                        <button className="info-button" onClick={() => viewPark(eachPark.parkCode)}>More info</button>
                        <button onClick={()=>deletePark(myParks.id)}  className='info-button'>Unfollow</button>
                    </div>
                    )

                })
            )
        })}
        </div>
    </div>
    )
}

export default ProfilePage;


                // <div className="home--park-card">
                //         <div className='homepage-card-background'>
                //             <h5 className='card-title'>{eachPark.fullName}</h5>
                //             <img className="homepage-images" src={eachPark.images[0].url}></img>
                //             <button className="info-button" onClick={() => viewPark(eachPark.parkCode)}>More info</button>
                //         </div>
                //     </div>

                // onClick={()=>deletePark(myParks.id)}