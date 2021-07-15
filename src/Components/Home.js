
function Home({user}) {
    // console.log(user)
    function handleClick(){
        fetch("http://127.0.0.1:9393/teams")
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return (
        <div>
            name
            <button onClick={handleClick}>Get Teams</button>
        </div>
    )
}

export default Home