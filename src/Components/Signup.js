import { Form, FormGroup, FormLabel, Button } from "react-bootstrap"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"

function Signup({user, setUser, loggedIn, setLoggedIn}){
    const [signUp, setSignUp] = useState(true)
    const history = useHistory()


    function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
        if (e.nativeEvent.submitter.innerText === 'Sign up') {
            fetch('http://127.0.0.1:9393/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            })
            .then(resp => resp.json())
            .then(data => {
                if (data === false) {
                    setSignUp(false)
                }
                else {
                    setUser(data)
                    setLoggedIn(true)
                    history.push("/")
                }
            })
        }
    }

    let tryAgain = (<p>Email already exists</p>)


    return(
        <Form onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
            Sign up
        </Button>
       
        {signUp ? null : tryAgain}
    </Form>
    )
}

export default Signup