import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'

function MyTeamPage({handleChange, setSearchTerm, searchTerm, myTeam, setMyTeam, userTeamId, user, searchedPlayerData }) {
    const renderMyTeam = myTeam.map(player => <LoadPlayer player = {player} key = {player.id}/>)
    let renderResults
    if (searchedPlayerData != []) {
        renderResults = searchedPlayerData.map(player => {
        if (player) {
        return <AddPlayer player = {player} key = {player.id}/>
        }
    })
    } else {
        return renderResults = (<h2>No players</h2>)
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