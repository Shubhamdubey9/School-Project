import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonials/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitles="Our Program" title="What You Offer"/>
        <Program/>
        <About setPlayState={setPlayState}/> 
        <Title subTitles="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitles="TESTIMONIAL" title="What Student Say"/>
        <Testimonial/>
        <Title subTitles="Contact us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App
