import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'
import { Button } from "react-bootstrap"
import { useState } from "react"

function MyTeamPage({handleChange, setSearchTerm, searchTerm, myTeam, setMyTeam, userTeamId, user, searchedPlayerData, setUserTeamId, teamName }) {
    const [addPlayerError, setAddPlayerError] = useState(false)


    let renderMyTeam = []
    if (myTeam) {
    renderMyTeam = myTeam.map(player => <LoadPlayer player = {player} key = {player.id}/>) }
    let renderResults
    
    if (searchedPlayerData != []) {
        renderResults = searchedPlayerData.map(player => {
        if (player) {
        return <AddPlayer userTeamId={userTeamId} setMyTeam={setMyTeam} player = {player} key = {player.id}/>
        }
    })
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
        .then(data => setUserTeamId(data.id))

    }

    const error = (<alert>Please create a team</alert>)
    
    return (
        <div>
            <SearchBar handleChange = {handleChange} setSearchTerm = {setSearchTerm} searchTerm={searchTerm}/>
            <form onSubmit={handleSubmit}>
                <input type="text"></input>
                <button type="submit">Create MyTeam</button>
            </form>
            {renderResults}
            {addPlayerError ? error : null}
            <h2>{teamName}</h2>
            {renderMyTeam}
        </div>
    )
}

export default MyTeamPage