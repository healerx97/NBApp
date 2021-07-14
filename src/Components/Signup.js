import { Form, FormGroup, FormLabel, Button } from "react-bootstrap"

function Signup(){

    function handleSubmit(e) {
        e.preventDefault();
        let name = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
       
    }

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
    </Form>
    )
}

export default Signup