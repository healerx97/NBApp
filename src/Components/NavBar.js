import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap"
import { useHistory } from 'react-router-dom'


function NavBar({loggedIn, setLoggedIn, user, setUser, setUserTeamId}) {
    const history = useHistory()

    function handleClick(e) {
        e.preventDefault()
        if (e.target.innerText === 'Log out') {
            setLoggedIn(false)
            setUser({})
            setUserTeamId("")
            history.push('/login')
        }
        else {
            history.push('/login')
        }
        

    }

    return (
        <header>
            <h2>NavBar</h2>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container id="navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                        Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/teams">
                        Teams
                        </Nav.Link>
                        <Nav.Link as={Link} to="/players">
                        Players
                        </Nav.Link>
                        <Nav.Link as={Link} to="/favorites" >
                        Favorites
                        </Nav.Link>
                        <Nav.Link as={Link} to="/myTeamPage" >
                        My Team
                        </Nav.Link>
                        <Nav.Link as={Link} onClick={handleClick} to={loggedIn ? "/logout" : "/login"}>{loggedIn ? "Log out" : "Log in"}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar