import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'
import { Button } from "react-bootstrap"

function MyTeamPage({setSearchTerm, searchTerm, myTeam, setMyTeam, userTeamId, user, searchedPlayerData }) {
    let copyOfMyTeam = [...myTeam]
    console.log(myTeam)

    const renderMyTeam = copyOfMyTeam.map(player => <LoadPlayer player = {player} key = {player.id}/>)
    let renderResults
    
    if (searchedPlayerData != []) {
        renderResults = searchedPlayerData.map(player => {
        if (player) {
        return <AddPlayer userTeamId={userTeamId} setMyTeam={setMyTeam} player = {player} key = {player.id}/>
        }
    })
    } else {
        renderResults = (<h2>No players</h2>)
    }
    console.log(user)
    console.log(userTeamId)

    function handleSubmit(e) {
        e.preventDefault()
        let teamName = e.target[0].value
        fetch('http://127.0.0.1:9393/userteam', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                team_name: teamName,
                user_id: user.id
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

    }
    
    return (
        <div>
            <SearchBar setSearchTerm = {setSearchTerm} searchTerm={searchTerm}/>
            <form onSubmit={handleSubmit}>
                <input type="text"></input>
                <button type="submit">Create MyTeam</button>
            </form>
            {renderResults}
            <h2>My Team</h2>
            {renderMyTeam}
        </div>
    )
}

export default MyTeamPage