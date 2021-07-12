import { NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <header>
            <h2>NavBar</h2>
            <nav>
                <NavLink to="/" className="nav_button">
                Home
                </NavLink>
                <NavLink to="/teams" className="nav_button">
                Teams
                </NavLink>
                <NavLink to="/players" className="nav_button">
                Players
                </NavLink>
                <NavLink className="nav_button" to="/favorites" exact activeStyle={{color: "blue"}}>
                Favorites
                </NavLink>
                <NavLink className="nav_button" to="/myTeamPage" exact activeStyle={{color: "blue"}}>
                My Team
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar