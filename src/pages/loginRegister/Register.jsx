import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    useTitle('Register')
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => console.log(error))
    }
    const [accept, setAccept] = useState(false)
    const handleAccepted = event => {
        setAccept(event.target.checked)
    }

    return (
        <Container className="w-25 mx-auto">
            <h3>Register here</h3>
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter Photo_URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'>Terms and Conditions</Link> </>} />
                </Form.Group>

                <Button disabled={!accept} variant="primary" type="Register">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted text-secondary">
                    Already have an Account? <Link to='/login'>Register</Link>
                </Form.Text>

                <Form.Text className="text-muted text-success">
                </Form.Text>
                <Form.Text className="text-muted text-danger">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;