
import {useNavigate, useParams} from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';


function ProfilePage({user, setUser}){

    const [errors, setErrors] = useState(false)

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




    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <h1> email:</h1>
            <h1>      
            {user?.email}
            </h1>
        </div>
    )
}

export default ProfilePage;