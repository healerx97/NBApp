import '../App.css';
import nba from 'nba'

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import Favorites from './Favorites';
import MyTeamPage from './MyTeamPage';
import Teams from './Teams';
import Players from './Players';
import NavBar from './NavBar';

function App() {
  //fetching playerInfo
  const [playerData, setPlayerData] = useState([])
    useEffect(()=> {
    fetch('http://127.0.0.1:9393/players')
    .then(resp => resp.json())
    .then(data => setPlayerData(data))
    },[]) 
  //fetching teamInfo
  const [teamData, setTeamData] = useState([])
  useEffect(()=> {
  fetch('http://127.0.0.1:9393/teams')
  .then(resp => resp.json())
  .then(data => setTeamData(data))
  },[])
    
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path = "/teams" component = {()=> <Teams teamData={teamData}/>} />
        <Route path = "/players" component = {()=> <Players playerData = {playerData}/>} />
        <Route path = "/myTeamPage" component = {()=> <MyTeamPage/>} />
        <Route path = "/favorites" component = {()=> <Favorites/>} />
        <Route path = "/" component = {()=> <Home/>} />
      </Switch>
    </div>
  );
}

export default App;
