import Carousel from "react-multi-carousel";

// Import Styles 
import '../Styles/Skills.style.css'
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from 'react-bootstrap';
import CricleProgress from '../Components/CircleProgress';

function Skills() {




    // Swiper 
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <section id='skills' className='skill-section allParent' >
                {/* Header */}
                <div className="section-header">
                    <h1>Skills</h1>
                    <p className="title-des">
                        I specialize in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. I create full-stack solutions that are fast, secure, and scalable, integrating RESTful APIs and handling complex frontend and backend development.
                    </p>
                </div>
                {/* Header */}

                <div className="HandleContainer">
                    <Row>
                        <Col>
                            <div className="skillBox">
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                    <div className="skill-item">
                                        <CricleProgress percentage={99} skill='HTML' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={97} skill='CSS' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={99} skill='Bootstrap' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={95} skill='JS' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={90} skill='Typescript' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={96} skill='React Js' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={90} skill='JQuery' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={93} skill='Redux-Toolkit' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={98} skill='Node js' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={95} skill='Express js' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={80} skill='Nest js' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={95} skill='Mongoose' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={97} skill='MongoDb' />
                                    </div>
                                    <div className="skill-item">
                                        <CricleProgress percentage={92} skill='Restful Api' />
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>

        </>
    )
}

export default Skills