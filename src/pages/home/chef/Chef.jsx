import React, { useEffect, useState } from 'react';
import ChefInfo from './ChefInfo';
import { Container } from 'react-bootstrap';

const Chef = () => {
    const [chef, setChef] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <Container>
            <div>
                <h4>Our Chefs</h4>
            </div>
            <div style={{}} className='grid grid-cols-3 gap-3'>
                {
                    chef.map(info => <ChefInfo className='grid grid-cols-3 gap-2' key={info.id} info={info} ></ChefInfo>)
                }
            </div>

        </Container>
    );
};

export default Chef;