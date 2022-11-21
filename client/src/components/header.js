import {useNavigate} from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars'
import { GiMountains } from 'react-icons/gi';
import { GiMountainClimbing } from 'react-icons/gi';
import { HiOutlineHome } from 'react-icons/hi';



function Header({parkData, showList, setShowList}){

    


    let navigate = useNavigate();
    function viewPark(parkCode){
        navigate(`/park/${parkCode}`)
        setShowList(!showList)
    }

    function returnHome(){
        navigate('/')
    }

    function viewDropdown(){
        setShowList(!showList)
    }

    console.log(showList)



    return(
        <div className="header">
            <div className="page-banner">
                <div className="dropdown">
                    <a  class="dropdown-link"> <GiMountains onClick={viewDropdown} size='3rem' color='green'/>  </a>
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
                <a onClick={returnHome} href="javascript:void(0)" class="link"> <GiMountainClimbing size='3rem' color='green'/> <div className='link-text'></div></a>
            </div>

        </div>
    )
}
export default Header;