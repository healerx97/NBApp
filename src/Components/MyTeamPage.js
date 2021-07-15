import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'
import { CardDeck,Row,Col} from 'react-bootstrap'
import { Button } from "react-bootstrap"

function MyTeamPage({handleChange, setSearchTerm, searchTerm, myTeam, setMyTeam, userTeamId, user, searchedPlayerData }) {
    let renderMyTeam = []
    if (myTeam) {
    renderMyTeam = (<Row xs={1} md={6} className="g-4">
    {Array.from(myTeam).map((player, idx) => (
        <Col>
        <LoadPlayer player = {player} key = {player.id}/>
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
        renderResults = (<Row xs={1} md={6} className="g-4">
    {Array.from(searchedPlayerData).map((player, idx) => (
        <Col>
        <AddPlayer userTeamId={userTeamId} setMyTeam={setMyTeam} player = {player} key = {player.id}/>
        </Col>
    ))}
    </Row>)
    } else {
        return renderResults = (<h2>No players</h2>)
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
            <SearchBar handleChange = {handleChange} setSearchTerm = {setSearchTerm} searchTerm={searchTerm}/>
            {renderResults}
            <h2>My Team</h2>
            {renderMyTeam}
        </div>
    )
}

export default MyTeamPage