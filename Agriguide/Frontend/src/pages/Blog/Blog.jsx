import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/C1.jpg';
import Blog2Img from '../../utils/images/C2.jpg';
import Blog3Img from '../../utils/images/C3.jpeg';
import Blog4Img from '../../utils/images/C4.jpg';
import Blog5Img from '../../utils/images/C6.jpg';
import Blog6Img from '../../utils/images/C7.jpeg';
// import Blog7Img from '../../utils/images/blog7-img.jpg';
// import Blog8Img from '../../utils/images/blog8-img.jpg';
// import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY):',
        description: 'PMFBY is a crop insurance scheme aimed at providing financial support to farmers in case of crop failure due to natural calamities, pests, or diseases. It ensures risk mitigation and income stability by covering crop loss.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Soil Health Card Scheme',
        description: 'To provide every farmer with a soil health card, detailing the nutrient status of their soil along with recommendations for appropriate fertilizers to improve productivity.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
        description: 'Provides income support to farmers to supplement their financial needs for crop production. It aims to promote organic farming and reduce the use of chemical fertilizers.'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY):',
        description: 'PMFBY is a crop insurance scheme aimed at providing financial support to farmers in case of crop failure due to natural calamities, pests, or diseases. It ensures risk mitigation and income stability by covering crop loss.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Soil Health Card Scheme',
        description: 'To provide every farmer with a soil health card, detailing the nutrient status of their soil along with recommendations for appropriate fertilizers to improve productivity.'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
        description: 'Provides income support to farmers to supplement their financial needs for crop production. It aims to promote organic farming and reduce the use of chemical fertilizers.'
    },
    // {
    //     id: 7,
    //     img: [Blog7Img],
    //     title: 'Blog 7',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
    // {
    //     id: 8,
    //     img: [Blog8Img],
    //     title: 'Blog 8',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
    // {
    //     id: 9,
    //     img: [Blog9Img],
    //     title: 'Blog 9',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
    // },
];

function Blog() {
    return (
        <div className='blog-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Yojnas</h1>
                    <p className='text-center w-75 mb-5'>Empowering Farmers, Strengthening Agriculture
                        Government Initiatives for Sustainable Growth
                        Innovative Schemes for Financial and Technical Support
                        Nurturing Rural Communities for a Prosperous Future</p>
                </div>
            </header>

            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <div className="row g-4">
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                        <Card.Img variant="top" src={blog.img}
                                            style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                                        <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                            <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                            <Card.Text className='text-center'>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;