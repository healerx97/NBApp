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
    fetch('https://data.nba.net//data/10s/prod/v1/2020/players.json')
    .then(resp => resp.json())
    .then(data => setPlayerData(data.league.standard))
    },[])
    
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path = "/teams" component = {()=> <Teams/>} />
        <Route path = "/players" component = {()=> <Players playerData = {playerData}/>} />
        <Route path = "/myTeamPage" component = {()=> <MyTeamPage/>} />
        <Route path = "/favorites" component = {()=> <Favorites/>} />
        <Route path = "/" component = {()=> <Home/>} />
      </Switch>
    </div>
  );
}

export default App;
