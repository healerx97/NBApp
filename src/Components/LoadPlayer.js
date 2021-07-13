import nba from 'nba'

function LoadPlayer({ player }) {
    return (
        <div>
            <h3>Name: {player.player_name}</h3>
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image"/>
        </div>
    )
}

export default LoadPlayer