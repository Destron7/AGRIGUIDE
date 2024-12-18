import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/C11.jpeg';
// import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/C1.jpg';
import Person2 from '../../utils/images/C2.jpg';
import Person3 from '../../utils/images/C3.jpeg';
import Person4 from '../../utils/images/C4.jpg';
import Person5 from '../../utils/images/C7.jpeg';
import Person6 from '../../utils/images/C6.jpg';
import Person7 from '../../utils/images/C13.jpeg';
import Person8 from '../../utils/images/C11.jpeg';
import Person9 from '../../utils/images/C16.jpeg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Know us more</h2>
                      <p>AgriGuide is a digital platform designed to assist farmers and agricultural professionals in managing the complexities of modern farming. It focuses on simplifying compliance with safety regulations, optimizing sustainable farming practices, and improving the efficiency of pesticide and biopesticide applications.</p>
                      <p className='mb-4 mb-lg-5'>By reducing waste, improving the precision of pesticide application, and promoting sustainable farming practices, AgriGuide helps lower the environmental impact of agriculture while increasing economic efficiency.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid h-80 w-75' alt="" />
                </div>
            </div>
        </div>

        

        {/* <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default About;