import {} from 'react'
import { Card, Col, Row } from 'react-bootstrap'

// Import Style
import '../Styles/Services.style.css'

// Import Icons
import { FaCode  , FaLaptopCode} from "react-icons/fa"; 
import { IoServer } from "react-icons/io5";
import { FcEditImage } from "react-icons/fc";
import { FcAddDatabase } from "react-icons/fc";
import { GrSystem } from "react-icons/gr";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { BiLogoJavascript } from "react-icons/bi";

function Services() {
    return (
        <section className='allParent service-section'>
            {/* Header */}
            <div className="section-header serHead">
                    <h1 className='serTitile'>Services</h1>
            </div>
            {/* Header */}

            <div className="HandleContainer serContainer">
                <Row>
                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card  className='main-card-style'>
                            <Card.Text className='service-icon'> <FaCode /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Frontend Developer</Card.Title>
                                <Card.Text className='p-3 mb-2'>A frontend developer creates dynamic, responsive web interfaces, ensuring seamless user experiences with modern technologies. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card className='main-card-style' >
                            <Card.Text className='service-icon'> <IoServer /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Backend Developer</Card.Title>
                                <Card.Text className='p-3 mb-2'>
                                A backend developer designs server-side logic, databases, and APIs, ensuring robust and scalable web applications. </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent' >
                        <Card className='main-card-style'>
                            <Card.Text className='service-icon'> <FaLaptopCode /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Responsive Design</Card.Title>
                                <Card.Text className='p-3 mb-2'>
                                Responsive design adapts web layouts to different devices and screen sizes, ensuring optimal user experience.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card className='main-card-style'>
                            <Card.Text className='service-icon'> <FcEditImage /> </Card.Text>
                            <Card.Body>
                                <Card.Title>User Interface Design</Card.Title>
                                <Card.Text className='p-3 mb-2'> UI Design focuses on creating visually appealing and intuitive interfaces for user interaction.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card  className='main-card-style'>
                            <Card.Text className='service-icon'> <FcAddDatabase /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Database Management</Card.Title>
                                <Card.Text className='p-3 mb-2'>Designing, implementing, and maintaining databases using MongoDB databases</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card className='main-card-style'>
                            <Card.Text className='service-icon'> <GrSystem /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Testing System</Card.Title>
                                <Card.Text className='p-3 mb-2'>A testing system evaluates software functionality, performance, and reliability to ensure quality and detect defects.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card className='main-card-style'>
                            <Card.Text className='service-icon'> <MdOutlineDisplaySettings /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Maintenance </Card.Title>
                                <Card.Text className='p-3 mb-2'>Maintenance and support involve updating software, fixing bugs, and assisting users to ensure continuous, efficient operation.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg='3' md='6' sm='10' className='card-Parent'>
                        <Card className='main-card-style'>
                            <Card.Text className='service-icon'> <BiLogoJavascript /> </Card.Text>
                            <Card.Body>
                                <Card.Title>Server-side Scripting</Card.Title>
                                <Card.Text className='p-3 mb-2'>Server-side scripting involves writing code that runs on a server to manage and deliver dynamic web content.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </section>
    )
}

export default Services