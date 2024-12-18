import React from 'react';
import './Services.css';
import { Card } from 'react-bootstrap';
import CropImg from '../../utils/images/C1.jpg';
import FertilizerImg from '../../utils/images/C3.jpeg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        img: CropImg,
        title: 'Crops',
        description: 'The crops are identified on the basis of nitrogen, phosphorous, pottasium, ph, rainfall, humidity, temperature.',
        link: '/crop'
    },
    {
        id: 2,
        img: FertilizerImg,
        title: 'Fertilizer',
        description: 'The fertilizers are identified on the basis of nitrogen, phosphorous, pottasium, ph, rainfall, humidity, temperature.',
        link: '/fertilizer'
    }
];

function Services() {
    return (
        <div className='services-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Our Services</h1>
                    <p className='text-center w-75 mb-5'>Our services consists of crop recommendation and fertilizer on the basis of which crop you are using</p>
                </div>
            </header>

            <div className='container py-5'>
                <div className='row g-4'>
                    {services.map((service) => (
                        <div key={service.id} className='col-lg-6'>
                            <Card className='text-white shadow scale-hover-effect'>
                                <Card.Img src={service.img} />
                                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>{service.title}</Card.Title>
                                    <Card.Text className='text-center'>{service.description}</Card.Text>
                                    {/* Use <Link> from react-router-dom for navigation */}
                                    <Link to={service?.link} className='Links'>Learn More</Link>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-dark text-light py-5'>
                <FaqAccordion />
            </div>
        </div>
    );
}

export default Services;
