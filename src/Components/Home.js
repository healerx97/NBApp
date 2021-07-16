import { CardDeck,Row,Col} from 'react-bootstrap'
import LoadMyPlayer from './LoadMyPlayer'
import AddPlayer from './AddPlayer'
import { useEffect } from "react"


function Home({user, allTeams}) {
    // console.log(user)
    let myTeams = []
    
    
    return (
        <div>
            name
            <button>Get Teams</button>
            {allTeams}
        </div>
    )
}

export default Home