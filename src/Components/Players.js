import LoadPlayer from "./LoadPlayer"
import { CardDeck,Row,Col} from 'react-bootstrap'
import { render } from "@testing-library/react"

function Players({playerData, user}) {
    // const renderPlayers = playerData.map(player => {
    //     let count = 4
    //     if (count == 4) {
    //     <LoadPlayer player = {player} key = {player.id}/>
    //     }
    // })
    const renderPlayers = (<Row xs={1} md={6} className="g-4">
    {Array.from(playerData).map((player, idx) => (
        <Col>
        <LoadPlayer player = {player} key = {player.id}/>
        </Col>
    ))}
    </Row>)

    // console.log(user)
    return (
        <div className="grid">
            <CardDeck>
            {renderPlayers}
            </CardDeck>
        </div>
    )
}

export default Players