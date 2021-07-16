import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'
import LoadMyPlayer from './LoadMyPlayer'

import { CardDeck,Row,Col} from 'react-bootstrap'
import { Button } from "react-bootstrap"
import { useState } from "react"

{<link rel="stylesheet" href="fontawesome-free-5.15.1/css/all.css"></link>}
{<script src="https://kit.fontawesome.com/afd6aa68df.js" crossorigin="anonymous"></script>}


function MyTeamPage({handleChange, setTeamName, setSearchTerm, searchTerm, myTeam, setMyTeam, userTeamId, user, searchedPlayerData, setUserTeamId, teamName, loggedIn }) {
    const [addPlayerError, setAddPlayerError] = useState(false)


    let renderMyTeam = []
    if (myTeam) {
    renderMyTeam = (<Row xs={1} md={6} className="g-6">
    {Array.from(myTeam).map((player, idx) => (
        <Col>
        <LoadMyPlayer setMyTeam = {setMyTeam} userTeamId = {userTeamId} player = {player} key = {player.id}/>
        </Col>
    ))}
    </Row>) }
    let renderResults
    
    
    if (searchedPlayerData != []) {
    //     renderResults = searchedPlayerData.map(player => {
    //     if (player) {
    //     return <AddPlayer userTeamId={userTeamId} setMyTeam={setMyTeam} player = {player} key = {player.id}/>
    //     }
    // })
    if (searchTerm == "") {
        renderResults = (<h2></h2>)
    } else {
        renderResults = (<Row xs={1} md={6} className="g-6">
    {Array.from(searchedPlayerData).map((player, idx) => (
        <Col>
        <AddPlayer userTeamId={userTeamId} setSearchTerm={setSearchTerm} setMyTeam={setMyTeam} player = {player} key = {player.id}/>
        </Col>
    ))}
    </Row>) }
    } else {
        return renderResults = (<h2>No players</h2>)
    }
    console.log(user)
    console.log(userTeamId)

    function handleSubmit(e) {
        e.preventDefault()
        let teamName1 = e.target[0].value
        fetch('http://127.0.0.1:9393/userteam', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team_name: teamName1,
                user_id: user.id
            })
        })
        .then(resp => resp.json())
        .then(data => {
            setUserTeamId(data.id)
            setTeamName(data.team_name)
        })

    }
    let createTeamForm 
    createTeamForm = (
        <div>
            <br></br>
        <div className="fancy">Create your own team now!</div>
        <br></br>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="insert your team name"></input>
            <button type="submit">Create My Team</button>
        </form>
        </div>
    )
    const error = (<alert>Please create a team</alert>)
    
    return (
        <div>
            {userTeamId ? <SearchBar handleChange = {handleChange} setSearchTerm = {setSearchTerm} searchTerm={searchTerm}/> : createTeamForm}
            
            {renderResults}
            {addPlayerError ? error : null}
            <br></br>
            <div className= "fancy">{teamName}</div>
            {renderMyTeam}
        </div>
    )
}

export default MyTeamPage