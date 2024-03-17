import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>YOUR WORK IN A PROFFESIONAL HANDS</h2>
        <p>Welcome to Al-Baron Scientific Bureau, where innovation meets expertise in every aspect of scientific research and development. As a leading scientific bureau company, we specialize in providing comprehensive solutions tailored to meet the unique needs of researchers, laboratories, and academic institutions worldwide</p>
        <p>Our team of dedicated professionals combines cutting-edge technology with extensive knowledge across various scientific disciplines to deliver exceptional services and products. From consulting and experimental design to equipment procurement and data analysis, Scientific Bureau is committed to advancing scientific discovery and fostering collaboration in the pursuit of knowledge.</p>
        <p>Join us on the forefront of scientific advancement and unlock the potential of your research endeavors with Scientific Bureau.</p>
      </div>
    </div>
  )
}

export default About
