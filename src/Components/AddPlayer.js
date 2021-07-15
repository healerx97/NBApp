import nba from 'nba'
import { Card, Button } from 'react-bootstrap'
function AddPlayer({ player, userTeamId, setMyTeam }) {

    // function handleError(){
    //     console.log("error")
    // }
    function handleAdd() {
        let obj = {player_id: player.id, user_team_id: userTeamId}
        fetch('http://127.0.0.1:9393/myteam', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setMyTeam(data)
        })
            
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" onError={(e) => {e.target.onerror = null; e.target.src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png'}} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image" />
            <Card.Body>
            <Card.Title>{player.player_name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Stats</Button>
            <Button variant="primary" onClick = {handleAdd}>Add to Team</Button>
            </Card.Body>
        </Card>
    )
}

export default AddPlayer
