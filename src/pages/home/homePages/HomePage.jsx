import React from 'react';
import { Container, Carousel, Button } from 'react-bootstrap';
import cookies1 from '../../../assets/images/coffee1.jpg'
import cookies2 from '../../../assets/images/gos2.jpg'
import cookies3 from '../../../assets/images/burger3.jpg'
import { FaBeer, FaChartBar, FaClock, FaUser } from 'react-icons/fa';
import Chef from '../chef/Chef';
import Recipe from '../recipe/Recipe';
import useTitle from '../../../hooks/useTitle';

const HomePage = () => {
    useTitle('Home page')
    return (
        <Container className='mt-5'>
            <div className='d-flex mb-5'>
                <div style={{ width: '60%' }}>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cookies1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cookies2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cookies3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='' style={{width:'40%', backgroundColor:'#ffe1da', padding:'25px 30px'}} >
                    <h3 className='mb-4'>Lorem ipsum dolor sit amet consectetur </h3>
                    <button style={{backgroundColor:'tomato', color:'white', border:'none', fontWeight:'500', padding:'5px 10px', borderRadius:'5px', marginBottom:'20px', display:'block'}}>food name</button>
                    <span className='me-3'><FaUser></FaUser> Arthur Gaon</span> <span className='me-3'><FaChartBar></FaChartBar> Expert </span> <span><FaClock></FaClock>  40</span>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi, itaque nobis sint, eum nesciunt sunt, sapiente delectus autem deleniti beatae aliquid quo! Tenetur corporis ullam culpa eius provident perspiciatis dolorum ad natus enim. Nihil hic ullam voluptates, eveniet repudiandae fugit doloribus non fuga! Vel cupiditate nostrum veritatis rerum laudantium!</p>
                </div>
            </div>

            <Chef></Chef>
            <Recipe></Recipe>
        </Container>
    );
};

export default HomePage;