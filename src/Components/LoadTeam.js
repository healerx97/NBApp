import { Card } from 'react-bootstrap'
function LoadTeam({ team }) {
    let abb = team.tricode.toLowerCase()
    return (
        <Card style={{ width: '15rem' }} className="box">
            <Card.Img variant="top" src={`https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${abb}.png`} alt="image" />
            <Card.Title>{team.team_name}</Card.Title>
        </Card>
    )
}

export default LoadTeam