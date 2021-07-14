import { Form, FormGroup, FormLabel, Button } from "react-bootstrap"
import { useState } from "react"

function Login(){
    const [loginStatus, setLoginStatus] = useState(true)

    function handleSubmit(e) {
        e.preventDefault();
        let email = e.target[0].value
        let password = e.target[1].value
        if (e.nativeEvent.submitter.innerText === 'Login') {
            fetch('http://127.0.0.1:9393/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.status === false) {
                    setLoginStatus(false)
                }
                else {
                    setLoginStatus(true)
                    console.log(data)
                }
            })
        }
    }

    let error = (<p>Invalid email or password</p>)

    return (
        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Button variant="primary" href="/signup">
                Sign up
            </Button>
            {loginStatus ? null : error}
        </Form>
    )
}

export default Login