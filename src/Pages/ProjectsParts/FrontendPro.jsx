import { } from 'react'
import '../../Styles/Projects.style.css'
import { Row, Col, Card, Image } from 'react-bootstrap'
// import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaLink } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";

import { projects, getImageUrl } from '../../assets/Scripts/Projects';

function FrontendPro() {

    // Handle VistLink 
    const visitLink = (link) => {
        window.open(link)
    }
    const MobileWidth = screen.availWidth < 768

    let frontItems = projects.filter((item)=> item.type == 'frontend')
    console.log(frontItems);
    
    return (
        <section className='all-projects'>
            <div className="HandleContainer mt-4">
                <Row>
                    {
                        frontItems.map((item) => (
                            <>
                                <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : "mb-3"} key={item.id}>
                                    <Card className='projectCard'>
                                        <Image src={getImageUrl(item.image)} />

                                        <Card.Body className='pro-body'>
                                            <Card.Title className='pro-title'> {item.title} </Card.Title>
                                            <Card.Text className='pro-text'>{item.text} </Card.Text>

                                            <button
                                                className='pro-link'
                                                onClick={() => visitLink(item.link)}
                                            >
                                                <FaLink />
                                            </button>

                                            <div className="pro-icons">
                                                { (item.type == 'frontend' || item.type == 'fullstack') &&
                                                    <>
                                                        <FaHtml5 />
                                                        <FaCss3Alt />
                                                        <FaBootstrap />
                                                        <FaJs/>
                                                        <FaReact />
                                                    </>
                                                }

                                                {
                                                    item.type == 'fullstack' &&
                                                    <>
                                                        <FaNodeJs />
                                                        <SiExpress />
                                                    </>
                                                }
                                            </div>
                                        </Card.Body>


                                    </Card>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </div>
        </section>
    )
}

export default FrontendPro

/*

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>graduation project</h2>
                                    <h2>Sohag National Museum</h2>
                                    <Button
                                        variant='success'
                                        onClick={() => visitLink('https://sohag-national-museum-3wara.vercel.app/')}
                                    ><FaExternalLinkAlt /> Vist</Button>
                                </div>
                            </div>

*/

