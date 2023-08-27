import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';
import HomePage from '../pages/home/homePages/HomePage';
import Footer from '../pages/shared/footer/Footer';



const Main = () => {
    return (
        <Container>
            <Header></Header>
            <Row>
                <Col>
                    <HomePage></HomePage>
                </Col>
                <Outlet></Outlet>
            </Row>
            <Footer></Footer>
        </Container>
    );
};

export default Main;