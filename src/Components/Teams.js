import LoadTeam from "./LoadTeam"
import { CardDeck,Row,Col} from 'react-bootstrap'

function Teams({teamData}) {
    const renderTeams = (<Row xs={1} md={5} className="g-4">
    {Array.from(teamData).map((team, idx) => (
        <Col>
        <LoadTeam team = {team} key = {team.id}/>
        </Col>
    ))}
    </Row>)
    
    return (
        <div>
            {renderTeams}
        </div>
    )
}

export default Teams