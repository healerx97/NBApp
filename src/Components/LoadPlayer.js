import nba from 'nba'

function LoadPlayer({ player }) {
    return (
        <div>
            <h3>Name: {player.firstName} {player.lastName}</h3>
            <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`} alt="image"/>
        </div>
    )
}

export default LoadPlayer