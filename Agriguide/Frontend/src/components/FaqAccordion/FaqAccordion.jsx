import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat numquam rem expedita similique necessitatibus dolore magnam natus sit ipsa, quae neque accusantium placeat laudantium mollitia, reprehenderit alias incidunt, delectus obcaecati cupiditate sed omnis repudiandae eos! Quasi unde veritatis labore quibusdam.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What's Agriguide is used for?</Accordion.Header>
                    <Accordion.Body>
                          AgriGuide is primarily used to assist farmers in navigating complex agricultural regulations and ensuring compliance with environmental and safety standards. It provides a streamlined, digital platform that helps farmers manage pesticide and biopesticide applications efficiently. By digitizing product labels and offering real-time, field-specific guidance, AgriGuide ensures that farmers follow best practices, such as Integrated Pest Management (IPM), while reducing environmental impact.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Who can use Agriguide?</Accordion.Header>
                    <Accordion.Body>
                        AgriGuide is designed for farmers, agricultural consultants, and researchers who need reliable, up-to-date information on crop management, pest control, and soil health. By leveraging data analytics and machine learning, AgriGuide provides actionable insights that help users make informed decisions about crop selection, fertilizer use, and pest management. Whether you're a seasoned farmer or a novice grower, AgriGuide can help you optimize your agricultural practices and improve your farm's productivity.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Where it is widely used?</Accordion.Header>
                    <Accordion.Body>
                        AgriGuide is widely used in regions with diverse agricultural landscapes, such as India, the United States, Brazil, and China. These countries have large farming communities that rely on AgriGuide to enhance crop yields, reduce input costs, and mitigate environmental risks. By providing tailored recommendations based on local soil conditions, climate patterns, and pest prevalence, AgriGuide helps farmers adapt to changing agricultural trends and improve their overall profitability.
                    </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey='3'>
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ab deserunt eaque nostrum voluptate, facilis ratione quo ducimus quod qui eius nobis quam temporibus similique fugit? Molestias, illo, maxime nulla aliquid ut pariatur corrupti aspernatur dolor assumenda quos officia eos?
                    </Accordion.Body>
                </Accordion.Item> */}
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;