import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/header/Header';
import { Outlet } from 'react-router-dom';

const RecipeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecipeLayout;