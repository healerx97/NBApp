import '../App.css';
import nba from 'nba'

import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Favorites from './Favorites';
import MyTeamPage from './MyTeamPage';
import Teams from './Teams';
import Players from './Players';
import NavBar from './NavBar';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
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
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>

      <Switch>
        <Route path = "/teams" component = {()=> <Teams user={user} teamData={teamData}/>} />
        <Route path = "/players" component = {()=> <Players user={user} playerData = {playerData}/>} />
        <Route path = "/myTeamPage" component = {()=> <MyTeamPage user={user}/>} />
        <Route path = "/favorites" component = {()=> <Favorites user={user}/>} />
        <Route path="/login" component = {()=> <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" component = {()=> <Signup user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path = "/" component = {()=> <Home user={user}/>} />
      </Switch>
    </div>
  );
}

export default App;
