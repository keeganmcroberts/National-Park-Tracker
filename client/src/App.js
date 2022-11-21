// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home';
import Players from './components/players';
import Teams from './components/teams';
import ParkDetailPage from './components/parkDetailPage';
import LeagueLeaders from './components/leagueLeaders';
import Header from './components/header';
import React, {useState, useEffect} from 'react';
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 



function App() {
  
  const [parkData, setParkData] = useState([])
  const [nationalParks, setNationalParks] = useState([])
  const [showList, setShowList] = useState(false)

useEffect(()=>{
  fetch('https://developer.nps.gov/api/v1/parks?limit=468&api_key=iT95c3FtY8GgMJecfLupDHzfbezucejRgKnDMPu5')
  .then(r => r.json())
  .then(parkData => {
    setParkData(parkData.data)
    const  parkArray = []
    parkData.data.map(eachPark=>{
      if (eachPark.designation === "National Park"){
        parkArray.push(eachPark)
      }
    })
    setNationalParks(parkArray)
  })
  }, [])

  // useEffect(()=>{
    // parkData.map(eachPark=>{
    //   if (eachPark.designation === "National Park"){
    //     setNationalParks([...nationalParks, eachPark])
    //   }
    // })
  // }, [])

  console.log("National parks:", nationalParks)


  return (
    <div className="App">
      <Header showList={showList} setShowList={setShowList} parkData={parkData}/>
      <Routes>
        <Route path="/" element={<Home parkData={parkData}/>}></Route>
        <Route path="/park/:parkCode" element={<ParkDetailPage setShowList={setShowList} showList={showList} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
