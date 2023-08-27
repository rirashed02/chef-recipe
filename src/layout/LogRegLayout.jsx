import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';
import HomePage from '../pages/home/homePages/HomePage';

const LogRegLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col>P
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LogRegLayout;