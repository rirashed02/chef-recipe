import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCard = ({ rec }) => {
    const { id, name, details, image, chef_id } = rec
    return (
        <div>
            <Card style={{ width: '350px', }} className='box'>
                <img style={{borderRadius:'10px', width:'400px', height:'300px'}}  src={image} alt="" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.length < 200 ? <>{details}</> : <>{details.slice(0, 200)}... <Link to={`/recipeDetails/${id}`}> Read More </Link> </>}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RecipeCard;