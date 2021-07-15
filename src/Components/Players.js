import LoadPlayer from "./LoadPlayer"

function Players({playerData, user}) {
    const renderPlayers = playerData.map(player => 
    <LoadPlayer player = {player} key = {player.id}/>
    // console.log(player.id)
    )
    // console.log(user)
    return (
        <div>
            {renderPlayers}
        </div>
    )
}

export default Players