import {} from 'react'
import { Col, Form, Image, Row } from 'react-bootstrap'

// Import Images and Styles
import '../Styles/Contact.style.css'
import formphoto from '../assets/Images/formphoto.png'

function Contact() {
    const MobileWidth = screen.availWidth < 768

    return (
        <section className='allParent'>
             {/* Header */}
            <div className={MobileWidth ? "section-header mt-4" : "section-header"}>
                    <h1 className='serTitile'>Contact Me</h1>
            </div>
            {/* Header */}
            <div className="HandleContainer">
                <section className='form-style'>
                    <div className='img-info'>
                        <Image src={formphoto} />
                    </div>
                    
                    <div className='form-data'>
                        <h1>Get In Touch</h1>
                        <Form>
                            <Row style={{rowGap:"15px"}}>
                                <Col xl='6' sm='12' >
                                        <Form.Control placeholder='First Name : ' className='input-data'></Form.Control>
                                </Col>
                                <Col xl='6' sm='12'>
                                    <Form.Control placeholder='Last Name : ' className='input-data'></Form.Control>
                                </Col>
                                <Col xl='6' sm='12'> 
                                    <Form.Control placeholder='Your Email :  ' className='input-data'></Form.Control>
                                </Col>
                                <Col xl='6' sm='12' >
                                    <Form.Control placeholder='Phone Number :  ' className='input-data'></Form.Control>
                                </Col>
                                <Col xl='12' sm='12'>
                                <Form.Control as="textarea" rows={6} placeholder='Your Message...'  className='msg-input'/>
                                </Col>
                                <Col> 
                                    <button className='btn-send'>Send</button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Contact

