import { Container , Nav , Navbar } from "react-bootstrap"
import { Link,  } from 'react-router-dom'
import { useEffect, useState } from "react"

// Styles 
import '../Styles/Header.style.css'

// Import Icons
function Header() {

    // Scroll background
    const [scrolled , setScrolled] = useState(false)
    useEffect(()=> {
        const handleScroll = ()=>{
            const isScrolled = window.scrollY > 100
            setScrolled(isScrolled)
        }
        window.addEventListener('scroll' , handleScroll)
        return ()=>{
            window.removeEventListener('scroll' , handleScroll)
        }
    } , [])
    return (
        <>
            <Navbar 
                expand="lg"
                className={ scrolled  ? " navbar-scroll nav-height " : "nav-height"} 
                fixed="top"
            >
                <Container fluid>
                    <Navbar.Brand href="#" className="logoName"> awara </Navbar.Brand>

                    <button className="navbar-toggler btn-responsive collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>

                    <Navbar.Collapse id="navbarScroll" className="nav-small">

                    <Nav
                        className="ms-auto my-2 my-lg-0 links-block"
                        style={{ maxHeight: '350px', color: "white" }}

                        // navbarScroll
                    >
                        <Link to='/home' className="activeLink">Home</Link>
                        <Link to='/skills' href='#skills'>Skills</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contact'>Contact Me</Link>
                    </Nav>
                                
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header