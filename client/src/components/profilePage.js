
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

console.log("user parks:", parksArray)
console.log("all parks:", parkData)



    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1> welcome</h1>
            <h1>      
            {user?.email}
            </h1>
            <br></br>
            <br></br>
            <h1>Liked Parks:</h1>
            {parksArray.map(myParks=>{
            if (user.id === myParks.user_id)
                return(
                    <h4>{myParks.parkCode}</h4>
                )

            })}
            
        </div>
    )
}

export default ProfilePage;