import React from 'react'
import Wave from 'react-wavify';
import './header.css';
import  './Far_Nazanin.ttf'
import { motion } from 'framer-motion';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Header(){

  

    const hellobutton = {
        hidden: {
          x: '-50vw'
        },
        visible: {
          x: '0vw',
          transition:{ type:'spring',delay:0.1,duration:5,damping:9}
        }
      }

    return(
        <div>

            <Wave fill="url(#gradient)" style={{transform:'rotate(180deg)',height:'550px'}} 
             options={{
              height: 20,
              amplitude: 50,
              speed: 0.19,
              points: 5
            }}
            >
            <defs>
            <linearGradient id="gradient" gradientTransform="rotate(10)">
            <stop offset="1%"  stopColor="#0ff" />
            <stop offset="99%" stopColor="#8800ff" />
            </linearGradient>
            </defs>
            </Wave>

            <motion.img  variants={hellobutton} initial="hidden" animate="visible" src={'Web-Design-Image-768x768.png'}  class="header-img" alt="img" />
            <ScrollAnimation animateIn="animate__fadeIn" offset="350" duration={1}>
            <p class='header-title1'>شرکت گامفا</p>
            <p class='header-title2'>به وبسایت گامفا خوش آمدید</p>
            
            <buttom class='header-title3'>با خیال راحت برای کسب و کار خود گام بردارید</buttom>
            </ScrollAnimation>

        </div>
    )
}
export default Header;