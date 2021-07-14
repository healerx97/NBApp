import SearchBar from './SearchBar'
import LoadPlayer from './LoadPlayer'
import AddPlayer from './AddPlayer'

function MyTeamPage({setSearchTerm, myTeam, userTeamId }) {
    const renderMyTeam = myTeam.map(player => <LoadPlayer player = {player} key = {player.id}/>)
    // const renderResults = 
    return (
        <div>
            <SearchBar setSearchTerm = {setSearchTerm}/>
            {/* render search results */}
            <h2>My Team</h2>
            {renderMyTeam}
        </div>
    )
}

export default MyTeamPage