import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'

function MyTeamPage({setSearchTerm, searchTerm, myTeam, setMyTeam, userTeamId, user, searchedPlayerData }) {
    console.log(user)
    const renderMyTeam = myTeam.map(player => <LoadPlayer player = {player} key = {player.id}/>)
    let renderResults
    if (searchedPlayerData != []) {
        renderResults = searchedPlayerData.map(player => <AddPlayer player = {player}/>)
    } else {
        renderResults = (<h2>No players</h2>)
    }
    return (
        <div>
            <SearchBar setSearchTerm = {setSearchTerm} searchTerm={searchTerm}/>
            {renderResults}
            <h2>My Team</h2>
            {renderMyTeam}
        </div>
    )
}

export default MyTeamPage