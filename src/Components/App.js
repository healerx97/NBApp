import '../App.css';
import nba from 'nba'

import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import Favorites from './Favorites';
import MyTeamPage from './MyTeamPage';
import Teams from './Teams';
import Players from './Players';
import NavBar from './NavBar';

function App() {
  console.log(nba)
  const playerData = nba.players
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
