import LoadTeam from "./LoadTeam"
function Teams({teamData}) {
    const renderTeams = teamData.map(team => <LoadTeam team = {team} key = {team.id}/>)
    return (
        <div>
            {renderTeams}
        </div>
    )
}

export default Teams