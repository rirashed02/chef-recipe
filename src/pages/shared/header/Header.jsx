import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(() => {})
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="">
            <Container>
                <Navbar.Brand href="#home">ChEEF</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-dark me-4 fw-semibold' to='/'>Home page</Link>
                        <Link className='text-decoration-none text-dark me-4 fw-semibold' to='/blog'>Blog</Link>
                        <Link className='text-decoration-none text-dark me-4 fw-semibold' to='/chef'>Our Chef</Link>
                        {/* <Link className='text-decoration-none text-dark me-4 fw-semibold' to='/recipeDetails'>Recipe</Link> */}
                        <Link className='text-decoration-none text-dark me-4 fw-semibold' to='/about'>About</Link>
                    </Nav>
                    <Nav>
                        {/* <FaUserCircle style={{ fontSize: '40px', marginRight: '10px', cursor: 'pointer', }}></FaUserCircle> */}
                        {/* {user?.displayName} */}    
                        {user ? <Button onClick={handleLogOut}>Logout</Button> : <Link to='/login'><Button>Login</Button></Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;