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
import LoadMyPlayer from './LoadMyPlayer'
import { CardDeck,Row,Col} from 'react-bootstrap'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [searchTerm, setSearchTerm] = useState("")
  const [myTeam, setMyTeam] = useState([])
  const [userTeamId, setUserTeamId] = useState("")
  const [teamName, setTeamName] = useState("")
  const [allTeams, setAllTeams] = useState([])
  //sets user team id whenever user changes
  useEffect(() => {
    fetch("http://127.0.0.1:9393/allteams")
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        let myTeams = data.map(team => {
            let userTeam = team.team
            let teamName = team.name
            let eachTeam = userTeam.map(player =>{
               return (
               <Col>
                    <LoadMyPlayer player = {player} key = {player.id}/>
                </Col>
               )
                
                // item.map(player => {
                //     // console.log(player)
                //     <Col>
                //     <LoadMyPlayer setMyTeam = {setMyTeam} userTeamId = {userTeamId} player = {player} key = {player.id}/>
                //     </Col>
                // })
            })
            // console.log(eachTeam)
            return (
                <div>
                    <div className= "fancy">{teamName}</div>
                    {eachTeam}
                </div>

            ) 
            // console.log(myTeams)
        })
        setAllTeams(myTeams)
    })
    
}, [user, myTeam])

  useEffect(()=> {
    fetch('http://127.0.0.1:9393/userteam')
    .then(resp=> resp.json())
    .then(data=> {
      data.forEach(team => {
        if (team.user_id === user.id) {
          setUserTeamId(team.id)
          setTeamName(team.team_name)
        }
        if (!user) {
          setUserTeamId("")
        }
      })
    })
  },[user])
  //sets searched player data whenever search term changes
  const [searchedPlayerData, setSearchedPlayerData] = useState([])
  useEffect(()=> {
    let searchResults = []
    playerData.forEach(player=> {
      let name = player['player_name'].toLowerCase()
      if (name.includes(searchTerm.toLowerCase())) {
        searchResults.push(player)
      }
    })
    setSearchedPlayerData(searchResults)
    // console.log(searchResults)
    // console.log(searchTerm)
  },[searchTerm])
  

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
  // fetching user team (get)
  useEffect(()=> {
    console.log("use effect retriggered")
    if (user.id) {
      fetch('http://127.0.0.1:9393/getuserteam', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: user.id
        })
      })
      .then(resp => resp.json())
      .then(data => setMyTeam(data))
    }
    else {
      setMyTeam([])
    }
    },[user])
    
    function handleChange(event) {
      event.preventDefault()
      setSearchTerm(event.target[0].value)
      event.target[0].value = ""
  }

  return (
    <div className="App">
      <NavBar setTeamName={setTeamName} setUserTeamId={setUserTeamId} loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser}/>

      <Switch>
        <Route path = "/teams" component = {()=> <Teams user = {user} teamData={teamData}/>} />
        <Route path = "/players" component = {()=> <Players user = {user} playerData = {playerData}/>} />
        <Route path = "/myTeamPage" component = {()=> <MyTeamPage setTeamName={setTeamName} teamName={teamName} setUserTeamId={setUserTeamId} handleChange = {handleChange} user = {user} searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} setMyTeam = {setMyTeam} myTeam = {myTeam} userTeamId = {userTeamId} searchedPlayerData = {searchedPlayerData}/>} />
        <Route path = "/favorites" component = {()=> <Favorites user = {user}/>} />
        <Route path="/login" component = {()=> <Login user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" component = {()=> <Signup user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path = "/" component = {()=> <Home allTeams={allTeams} user={user}/>} />
      </Switch>
    </div>
  );
}

export default App;
