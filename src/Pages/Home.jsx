// Import Labrary
import aos from 'aos'


// Styles
import '../Styles/Home.style.css'
import { SocialIcon } from '../Styles/StyleJS/SocialMedia.style'
import 'aos/dist/aos.css'


// Import Icons and Images
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import awaraImg from '../assets/Images/myphoto.png'
import { useEffect } from 'react';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
function Home() {
    useEffect(() => {
        aos.init({ duration: 2000 })
    }, [])

    let faceLink = 'https://www.facebook.com/profile.php?id=100011196822139&mibextid=ZbWKwL'
    let githubLink = 'https://github.com/Mohamed-A-Awara'
    let linkedLink = 'https://www.linkedin.com/in/mohamed-ayman-awara-20ba69219/'


    const openCV = ()=>{
        window.open('https://drive.google.com/file/d/1XKO88qEW-Aq7277wRWZvKfQtoXpLQpNt/view?usp=drive_link' , "_blank")
    }
    const openLink = (link)=>{
        window.open(link , "_blank")
    }
    return (
        <>
            {/* Start Home */}
            <div className="allHome" id='home'>
                <section className='homeDesign z-3'>
                    <div className="homeData">
                        <h3><span>Hello</span> , I am </h3>
                        <h1>Mohamed A Awara</h1>
                        <p>
                            i&apos;m a MERN stack developer from egypt , sohag with 3 years of experience in web developemnt
                        </p>
                    </div>

                    <div className="social-media" style={{ display: "flex", padding: "0 3rem" }}>
                        <SocialIcon onClick={()=> openLink(faceLink)}><FaFacebookF /></SocialIcon>
                        <SocialIcon onClick={()=> openLink(githubLink)} ><FaGithub /></SocialIcon>
                        <SocialIcon onClick={()=> openLink(linkedLink)} ><FaLinkedinIn /></SocialIcon>
                    </div>

                    <button
                        className='btnCv'
                        style={{ padding: "0 3rem", marginLeft: "3rem" }}
                        onClick={openCV}
                    >
                        Download CV
                    </button>
                </section>
                <div className="line" data-aos='fade-right'></div>

                <section className="homebox">
                    <div className="imgBox">
                        <img src={awaraImg} alt="3wara" />
                    </div>
                    <div className="line" data-aos='fade-right'></div>
                </section>
            </div>
            {/* End Home  */}

            {/* Start Skills  */}
            <Skills />
            {/* End Skills  */}

            {/* Start Services  */}
            <Services />
            {/* End Services  */}

            {/* Start Projects  */}
            <Projects />
            {/* End Projects  */}

            {/* Start Contact  */}
            <Contact />
            {/* End Contact  */}
        </>
    )
}

export default Home