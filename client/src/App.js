// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home';
import Players from './components/players';
import Teams from './components/teams';
import LeagueLeaders from './components/leagueLeaders';
import Header from './components/header';
import React, {useState, useEffect} from 'react';
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 



function App() {
  
  const [parkData, setParkData] = useState([])

useEffect(()=>{
  fetch('https://developer.nps.gov/api/v1/parks?api_key=iT95c3FtY8GgMJecfLupDHzfbezucejRgKnDMPu5')
  .then(r => r.json())
  .then(parkData => setParkData(parkData.data))
  }, [])


  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home parkData={parkData}/>}></Route>
        <Route path="/teams" element={<Teams/>}></Route>
        <Route path="/players" element={<Players/>}></Route>
        <Route path="/leagueLeaders" element={<LeagueLeaders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
