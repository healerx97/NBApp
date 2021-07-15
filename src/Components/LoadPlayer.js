import nba from 'nba'
import { Card, Button } from 'react-bootstrap'
import Popup from 'reactjs-popup'
function LoadPlayer({ player }) {

    // function handleError(){
    //     console.log("error")
    // }

    return (
        <Card style={{ width: '15rem' }} className="box">
            <Card.Img variant="top" onError={(e) => {e.target.onerror = null; e.target.src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png'}} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image" />
            <Card.Body>
            <Card.Title>{player.player_name}</Card.Title>
            <Card.Text>{player.teamName}</Card.Text>
            <Popup  mouseEnterDelay={300}
                mouseLeaveDelay={100} on='hover' trigger={<Button> Info </Button>} position= "center center" >
                <Card style={{ width: '20rem' }}>
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
            </Card.Body>
        </Card>
    )
}

export default LoadPlayer
