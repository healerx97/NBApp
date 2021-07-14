import { Form, FormGroup, FormLabel, Button } from "react-bootstrap"

function Login(){

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
            .then(data => console.log(data))
        }
    }


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
        </Form>
    )
}

export default Login