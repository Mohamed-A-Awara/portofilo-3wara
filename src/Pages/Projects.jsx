import { useState } from 'react'
// import { Button, Card, Col, Image, Row } from 'react-bootstrap'

// Import Styles
import '../Styles/Projects.style.css'
// import { FaExternalLinkAlt } from "react-icons/fa";
// Import Images
// import sohagImg from '../assets/Images/SohagImg.png'
import { Link } from 'react-router-dom';
import AllProjects from './ProjectsParts/AllProjects';
import FrontendPro from './ProjectsParts/FrontendPro';
import BackendPro from './ProjectsParts/BackendPro';
// import Ecommerce from '../assets/Images/Ecommerce.png'
// import todolist from '../assets/Images/todolist.png'
// import Fcai from '../assets/Images/fcai.png'
// import OldEcommerce from '../assets/Images/Project-ECommerce.png'
// import Teamproject from '../assets/Images/teamproject.png'
// import megastorephoto from '../assets/Images/megastore.png'
// import animationphoto from '../assets/Images/animation.png'
// import homepage from '../assets/Images/homepage.png'


function Projects() {


    const [view, setView] = useState('all'); 

    const renderComponent = () => {
        switch (view) {
            case 'all':
                return <AllProjects />;
            case 'frontend':
                return <FrontendPro />;
            case 'backend':
                return <BackendPro />;
            default:
                return <AllProjects />; 
        }
    };

    return (
        <section className='allParent project-section'>
            {/* Header */}
            <div className="section-header">
                <h1 className='serTitile'>Projects</h1>
            </div>
            {/* Header */}


            <nav className='projectNav'>
                <Link onClick={() => setView('all')}>All Projects</Link>
                <Link onClick={() => setView('frontend')} className='noborder'>Frontend </Link>
                {/* <Link onClick={() => setView('frontend')} className='noborder'>Frontend Projects</Link> */}
                <Link onClick={() => setView('backend')} className='noright'>Backend </Link>
            </nav>

            
            <div>
                {renderComponent()}
            </div>

        </section>
    )
}

export default Projects