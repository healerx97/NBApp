
function LoadTeam({ team }) {
    let abb = team.tricode.toLowerCase()
    return (
        <div>
            <h3>Team Name: {team.team_name}</h3>
            <img src={`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${abb}.png`} alt="image"/>
        </div>
    )
}

export default LoadTeam