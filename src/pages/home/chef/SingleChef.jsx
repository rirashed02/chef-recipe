import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const SingleChef = () => {
    const chefInfo = useLoaderData()
    const {image, name, details} = chefInfo;
    return (
        <div>
            <Card style={{  }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleChef;