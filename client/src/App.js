import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home';
import Players from './components/players';
import Teams from './components/teams';
import LeagueLeaders from './components/leagueLeaders';
import Header from './components/header';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 



function App() {
  
  fetch('developer.nps.gov/api/v1/parks')
  .then(r => r.json())
  .then(data => console.log(data))

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/teams" element={<Teams/>}></Route>
        <Route path="/players" element={<Players/>}></Route>
        <Route path="/leagueLeaders" element={<LeagueLeaders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
