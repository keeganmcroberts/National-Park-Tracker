import {useNavigate} from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars'
import { GiMountains } from 'react-icons/gi';
import { GiMountainClimbing } from 'react-icons/gi';
import { HiOutlineHome } from 'react-icons/hi';



function Header({parkData, showList, setShowList, user, setUser}){

    


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
        navigate('/user')
    }

    console.log(showList)



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
                    <a  class="dropdown-link" height='3rem'> <GiMountains onClick={viewDropdown} size='3rem' color='green'/>  </a>
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
                <a onClick={returnHome} href="javascript:void(0)" class="link"> <HiOutlineHome size = '3rem' color='green'/> </a>
                <a onClick={viewProfile} href="javascript:void(0)" class="link"> <GiMountainClimbing size='3rem' color='green'/> <div className='link-text'></div></a>
            </div>
            </div>

        </div>
    )
}
export default Header;