import nba from 'nba'
import { Card, Button } from 'react-bootstrap'
import Popup from 'reactjs-popup'
function LoadMyPlayer({ player, setMyTeam, userTeamId }) {

    function handleDelete() {
        let obj = {player_id: player.id, user_team_id: userTeamId}
        fetch('http://127.0.0.1:9393/deletemyteam', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data === false) {

            }
            else {
                setMyTeam(data)
            }
        })
    }

    return (
        <Card style={{ width: '15rem', padding: '0.2rem', margin: '3%', "margin-right": '0.5rem'}} className="loadCard">
            <Card.Img variant="top" onError={(e) => {e.target.onerror = null; e.target.src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png'}} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image" />
            <Card.Body>
            <Card.Title style={{"fontSize": "100%"}}>{player.player_name}</Card.Title>
            <Card.Text style={{"fontSize": "0.7rem"}}>{player.teamName}</Card.Text>
            <Popup  mouseEnterDelay={300}
                mouseLeaveDelay={100} on='hover' trigger={<Button variant = 'danger' style = {{"marginRight": "5%"}}> Info </Button>} position= "center center">
                <Card style={{ width: '20rem', lineHeight: '0.2rem' }}>
                <Card.Img variant="top" onError={(e) => {e.target.onerror = null; e.target.src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png'}} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image" />
                <Card.Body>
                <Card.Title>{player.player_name}</Card.Title>
                <Card.Text>Team: {player.teamName}</Card.Text>
                <Card.Text>Position: {player.position}</Card.Text>
                <Card.Text>Height: {player.height}</Card.Text>
                <Card.Text>Weight: {player.weight}lb</Card.Text>
                <Card.Text>College: {player.college}</Card.Text>
                <Card.Text>Country: {player.country}</Card.Text>
                <Card.Text>Experience: {player.pro} years</Card.Text>
                </Card.Body>
                </Card>
            </Popup>
            <Button variant = "secondary" onClick = {handleDelete}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default LoadMyPlayer
