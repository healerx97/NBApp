import nba from 'nba'
import { Card, Button } from 'react-bootstrap'
function LoadPlayer({ player }) {

    // function handleError(){
    //     console.log("error")
    // }

    return (
        <Card style={{ width: '12rem' }} className="box">
            <Card.Img variant="top" onError={(e) => {e.target.onerror = null; e.target.src='https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201144.png'}} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.id}.png`} alt="image" />
            <Card.Body>
            <Card.Title>{player.player_name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">Stats</Button>
            </Card.Body>
        </Card>
    )
}

export default LoadPlayer
