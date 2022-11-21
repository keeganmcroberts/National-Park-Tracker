import {useNavigate} from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import {Scrollbars} from 'react-custom-scrollbars'



function Header({parkData, showList, setShowList}){

    


    let navigate = useNavigate();
    function viewPark(parkCode){
        navigate(`/park/${parkCode}`)
        setShowList(!showList)
    }

    function returnHome(){
        navigate('/')
    }






    return(
        <div className="header">
            <div className="page-banner">
                <a onClick={returnHome} href="javascript:void(0)" class="dropbtn">Home</a>
                <li className="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Parks</a>
                {parkData.map(eachPark=>{
                if(eachPark.designation === "National Park" && showList)
                return(
                <div className="dropdown-content">
                    <a onClick={() => viewPark(eachPark.parkCode)} className="links">{eachPark.fullName}</a>        
                </div>
                )})}
                </li>
            </div>

        </div>
    )
}
export default Header;