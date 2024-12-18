import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
// import ChooseSection from '../../components/ChooseSection/ChooseSection';
// import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
// import { Card } from 'react-bootstrap';
// import CardArea2 from '../../components/Cards/cardArea2';
import CardArea1 from '../../components/Cards/cardArea1';
import serImg from '../../images/C7.jpeg';


function Home() {
    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>
                    <h1 className='text-center fw-semibold'>AgriGuide Hub</h1>
                    <p>Providing best agriculture tips and guidance for farmers and enthusiasts.</p>
                    <div className='d-flex flex-column flex-sm-row align-items-center'>
                    </div>
                </div>
            </header>

            {/* <div className="py-5">
            <ChooseSection />
        </div> */}

            <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>What is AgriGuide?</h2>
                            <p>AgriGuide is typically envisioned as a platform designed to provide farmers and agriculture researchers with comprehensive and actionable advice on various agricultural practices. It aims to help farmers make informed decisions on areas such as crop selection, fertilizer use, soil management, and pest control, based on data analysis and predictions. Utilizing modern technology like machine learning and data-driven insights, AgriGuide can assist in maximizing crop yields, improving sustainability, and enhancing overall farm productivity.</p>
                            {/* <Link to="/">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link> */}
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={serImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>


            

            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize mb-5'>Our Services</h2>

                    <p className='text-center text-capitalize mb-5'>Our services consists of crop recommendation and fertilizer on the basis of which crop you are using
                    </p>
                    <CardArea1 />
                    <Link to="/services">
                        <button type='button' className='btn btn-lg mt-5' style={{
                            color: '#30CA8F',
                            border: '1px solid #30CA8F'
                        }} >Click on Services to know more</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Home;