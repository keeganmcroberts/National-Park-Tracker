import {useNavigate} from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars'
import { GiMountains } from 'react-icons/gi';
import { GiMountainClimbing } from 'react-icons/gi';
import { HiOutlineHome } from 'react-icons/hi';



function Header({parkData, showList, setShowList, user, setUser}){

    

    const [parksButtonHovering, setParksButtonHovering] = useState(false);
    const [homeButtonHovering, setHomeButtonHovering] = useState(false);
    const [profileButtonHovering, setProfileButtonHovering] = useState(false);
    

    const handleMouseOver = () => {
      setParksButtonHovering(true);
    };
  
    const handleMouseOut = () => {
      setParksButtonHovering(false);
    };


    const handleHomeMouseOver = () => {
        setHomeButtonHovering(true);
      };
    
    const handleHomeMouseOut = () => {
    setHomeButtonHovering(false);
    };

    const handleProfileMouseOver = () => {
    setProfileButtonHovering(true);
    };

    const handleProfileMouseOut = () => {
    setProfileButtonHovering(false);
    };

    let navigate = useNavigate();
    function viewPark(parkCode){
        navigate(`/park/${parkCode}`)
        setShowList(!showList)
    }

    function returnHome(){
        navigate('/')
    }

    function login(){
        navigate('/login')
    }

    function logout(){
        navigate('/login')
    }

    function viewDropdown(){
        setShowList(!showList)
    }

    function viewProfile(){
        navigate(`/user/${user.id}`)
    }

    function logout(){
        fetch ("/logout",{
            method: "DELETE"
        })
        .then( res => {
            if (res.ok){
                setUser(null)
                navigate('/login')
        }})
        alert("You've been Logged out")
    }

    // fetch (`/login`,{
    //     method: 'POST',
    //     headers:{'Content-Type': 'application/json'},
    //     body:JSON.stringify(user)
    // })
    // .then(res=>{
    //     if(res.ok){
    //         res.json().then(user=>{
    //             navigate(`/user/${user.id}`)
    //         })




    return(
        <div className="header">
            <div className="page-banner">
                {user ? 
                <h5 onClick={logout} className='banner-login'>Logout</h5>
                :
                <h5 onClick={login} className='banner-login'>Login</h5>
                }
                <div className='banner-buttons'>
                <div className="dropdown">
                    <a  class="dropdown-link" height='3rem'> <GiMountains onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={viewDropdown} size='3rem' color='green'/> 
                     </a>
                        {parksButtonHovering && <h5 className='hover-elements'>View Parks</h5>}
                    <div className='park-list'>
                        {parkData.map(eachPark=>{
                            if(eachPark.designation === "National Park" && showList)
                            return(
                                <div className="dropdown-content">
                                <a onClick={() => viewPark(eachPark.parkCode)} className="links">{eachPark.fullName}</a>        
                            </div>
                            )
                        })}
                    </div>
                </div>
                <a onClick={returnHome} onMouseOver={handleHomeMouseOver} onMouseOut={handleHomeMouseOut} href="javascript:void(0)" class="link"> <HiOutlineHome size = '3rem' color='green'/> 
                {homeButtonHovering && <h5 className='hover-elements'>Home</h5>}
                </a>
                <a onClick={viewProfile} onMouseOver={handleProfileMouseOver} onMouseOut={handleProfileMouseOut} href="javascript:void(0)" class="link"> <GiMountainClimbing size='3rem' color='green'/> <div className='link-text'></div>
                {profileButtonHovering && <h5 className='hover-elements'>Profile</h5>}
                </a>
            </div>
            </div>

        </div>
    )
}
export default Header;