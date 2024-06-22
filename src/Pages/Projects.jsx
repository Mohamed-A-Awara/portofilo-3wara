import {} from 'react'
import { Button, Card, Col, Image, Row } from 'react-bootstrap'

// Import Styles
import '../Styles/Projects.style.css'
import { FaExternalLinkAlt } from "react-icons/fa";
// Import Images
import sohagImg from '../assets/Images/SohagImg.png'
import Ecommerce from '../assets/Images/Ecommerce.png'
import todolist from '../assets/Images/todolist.png'
import Fcai from '../assets/Images/fcai.png'
import OldEcommerce from '../assets/Images/Project-ECommerce.png'
import Teamproject from '../assets/Images/teamproject.png'
import megastorephoto from '../assets/Images/megastore.png'
import animationphoto from '../assets/Images/animation.png'
import homepage from '../assets/Images/homepage.png'


function Projects() {

    // Handle VistLink 
    const visitLink = (link)=>{
        window.open(link)
    }

    const MobileWidth = screen.availWidth < 768 

    
    return (
        <section className='allParent project-section'>
            {/* Header */}
            <div className="section-header">
                    <h1 className='serTitile'>Projects</h1>
            </div>
            {/* Header */}

            <div className="HandleContainer mt-4">
                <Row>
                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : ""}>
                        <Card className='projectCard'>
                            <Image src={sohagImg} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>graduation project</h2>
                                    <h2>Sohag National Museum</h2>
                                    <Button
                                        variant='success'
                                        onClick={()=> visitLink('https://sohag-national-museum-3wara.vercel.app/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : ""}>
                        <Card className='projectCard'>
                            <Image src={Ecommerce} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>Ecommerce Project</h2>
                                    <h2>Laptop Store</h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://ecommerce-laptop.vercel.app/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : ""}>
                        <Card className='projectCard'>
                            <Image src={todolist} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>To Do List Project</h2>
                                    <h2>Using React js</h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://todo-list-six-sigma-34.vercel.app/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : "mt-5"}>
                        <Card className='projectCard'>
                            <Image src={Fcai} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>FCAI Project</h2>
                                    <h2> Genius Competition</h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://fcai-genius.vercel.app/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : "mt-5"}>
                        <Card className='projectCard'>
                            <Image src={OldEcommerce} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>ECommerce Project</h2>
                                    <h2>Using js only </h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://mohamed-a-awara.github.io/E-Commerce-JS/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12'className={MobileWidth ? "mb-5" : "mt-5"}>
                        <Card className='projectCard'>
                            <Image src={Teamproject} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>Ma3refa Team Project</h2>
                                    <h2>Using HTML , CSS </h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://mohamed-a-awara.github.io/Ma3refa-Team/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : "mt-5"}>
                        <Card className='projectCard'>
                            <Image src={megastorephoto} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>Mega Store Project</h2>
                                    <h2>Using HTML , CSS , JS </h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://mohamed-a-awara.github.io/Mega-Store/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : "mt-5"}>
                        <Card className='projectCard'>
                            <Image src={animationphoto} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>Animation Project</h2>
                                    <h2>Using HTML , CSS </h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://mohamed-a-awara.github.io/Animation-Project/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='4' md='6' sm='12' className={MobileWidth ? "mb-5" : "mt-5"}>
                        <Card className='projectCard'>
                            <Image src={homepage} thumbnail  />

                            <div className="projectOverlay">
                                <div className="projectContent">
                                    <h2>Design Project</h2>
                                    <h2>Using HTML , CSS </h2>
                                    <Button 
                                        variant='success'
                                        onClick={()=> visitLink('https://mohamed-a-awara.github.io/Home-Design/')}
                                    ><FaExternalLinkAlt/> Vist</Button>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col lg='12'>
                        <div className="readMore">
                            <Button
                                onClick={()=> visitLink('https://github.com/Mohamed-A-Awara')}
                            > 
                                < FaExternalLinkAlt/> Visit Github
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Projects