// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './components/home';
import ParkDetailPage from './components/parkDetailPage';
import Header from './components/header';
import React, {useState, useEffect} from 'react';
import Login from './components/login';
import Signup from './components/signup';
import Review from './components/review';
import ProfilePage from './components/profilePage';
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 



function App() {
  
  const [parkData, setParkData] = useState([])
  const [nationalParks, setNationalParks] = useState([])
  const [showList, setShowList] = useState(false)
  const [user, setUser] = useState("")
  
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

  return (
    <div className="App">
      <Header user={user} setUser={setUser} showList={showList} setShowList={setShowList} parkData={parkData}/>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} parkData={parkData} nationalParks={nationalParks}/>}></Route>
        <Route path="/login" element={<Login user={user} setUser={setUser}/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/user/:id" element={<ProfilePage user={user} setUser={setUser} parkData={parkData}/>}></Route>
        <Route path="/park/:parkCode" element={<ParkDetailPage user={user} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
