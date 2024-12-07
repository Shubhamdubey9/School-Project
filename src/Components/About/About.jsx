import react from 'react';
import './About.css';
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='About'>
        <div className="About-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}} />
        </div>
        <div className="About-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
             <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personali mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock you full</p>
        </div>
    </div>
  )
}

export default About;