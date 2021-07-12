import LoadPlayer from "./LoadPlayer"

function Players({playerData}) {
    const renderPlayers = playerData.map(player => <LoadPlayer player = {player} key = {player.id}/>)
    return (
        <div>
            {renderPlayers}
        </div>
    )
}

export default Players