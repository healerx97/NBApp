import nba from 'nba'

function LoadPlayer({ player }) {
    const details = nba.searchPlayers(player.fullName)
    return (
        <div>
            <h3>Name: {player.fullName}</h3>
            {/* <h4>Name: {details}</h4> */}
        </div>
    )
}

export default LoadPlayer