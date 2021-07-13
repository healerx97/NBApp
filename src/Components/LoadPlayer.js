import nba from 'nba'

function LoadPlayer({ player }) {

    // function handleError(){
    //     console.log("error")
    // }

    return (
        <div>
            <h3>Name: {player.player_name}</h3>
            <img onError={(e) => {e.target.onerror = null; e.target.src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png'}} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image"/>
        </div>
    )
}

export default LoadPlayer
