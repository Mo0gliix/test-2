import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Iraq</span>
                        </div>
                    </div>
                    <p>I cannot speak highly enough of AlBaron Scientific Bureau. Their team comprises exceptionally talented professionals who are passionate about delivering results that matter. Their innovative approach to problem-solving and their commitment to staying abreast of the latest advancements in their field set them apart. They consistently demonstrate a genuine interest in their clients' success and go above and beyond to tailor solutions to their specific needs. Working with AlBaron has been a privilege, and I wholeheartedly endorse them as a trusted partner for any scientific endeavor.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Iraq</span>
                        </div>
                    </div>
                     <p>Working with AlBaron Scientific Bureau was a truly rewarding experience. Their dedication to excellence is evident in the meticulous attention to detail they apply to every project. From conceptualization to execution, their team exhibited a profound understanding of scientific methodologies and industry standards. Moreover, their proactive communication and flexibility ensured a seamless workflow. I am thoroughly impressed with the caliber of their work and wouldn't hesitate to engage their services again.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily Williams</h3>
                            <span>Iraq</span>
                        </div>
                    </div>
                      <p>AlBaron Scientific Bureau exceeded my expectations in every aspect. Their team demonstrated exceptional professionalism and expertise throughout our collaboration. They delivered comprehensive and insightful reports that helped us make informed decisions in our research projects. Their commitment to quality and timeliness is commendable. I highly recommend AlBaron to anyone seeking reliable scientific services.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Iraq</span>
                        </div>
                    </div>
                      <p>AlBaron Scientific Bureau stands out as a beacon of excellence in the realm of scientific services. Their team's proficiency and dedication to delivering actionable insights are unparalleled. From the outset, they exhibited a deep understanding of our project requirements and swiftly formulated a strategic approach to address them. Throughout our collaboration, they maintained a high level of transparency, providing regular updates and valuable feedback.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
