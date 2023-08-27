import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ChefInfo = ({ info }) => {
    const { name, image, id, skills } = info
    return (
        <div className='box'>
            <Link className="text-decoration-none" to={`/chefinfo/${id}`}>
                <Card style={{ width: '400px' }} className='box'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {skills}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default ChefInfo;