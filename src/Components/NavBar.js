import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap"


function NavBar({loggedIn, setLoggedIn}) {

    return (
        <header>
            <h2>NavBar</h2>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Container id="navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                        Home
                        </Nav.Link>
                        <Nav.Link href="/teams">
                        Teams
                        </Nav.Link>
                        <Nav.Link href="/players">
                        Players
                        </Nav.Link>
                        <Nav.Link href="/favorites" exact activeStyle={{color: "blue"}}>
                        Favorites
                        </Nav.Link>
                        <Nav.Link href="/myTeamPage" exact activeStyle={{color: "blue"}}>
                        My Team
                        </Nav.Link>
                        <Nav.Link href={loggedIn ? "/logout" : "/login"}>{loggedIn ? "Log out" : "Log in"}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar