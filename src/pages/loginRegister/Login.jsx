import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('login')
    const {signIn} = useContext(AuthContext)
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result => {
            const userSignIn = result.user;
            console.log(userSignIn) 
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Container className="w-25 mx-auto">
                <h3>Login </h3>
                <Form onSubmit={handleSignIn}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="Register">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-muted text-secondary">
                        Already have an Account? <Link to='/register'>Register</Link>
                    </Form.Text>

                    <Form.Text className="text-muted text-success">
                    </Form.Text>
                    <Form.Text className="text-muted text-danger">
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;