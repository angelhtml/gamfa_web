import './navbar.css';
import { Stack, HStack, VStack } from "@chakra-ui/react";
import ScrollAnimation from 'react-animate-on-scroll';
import {useWindowSize,} from '@react-hook/window-size';
import Burger from './burger/burger';
import { useState } from 'react';

function Navbar() {
    const [widthOFwindow, heightOFwindow] = useWindowSize({ fps: 60 });
    const [navbar,setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 10) {
            setNavbar(true);
        } else {
        setNavbar(false);
        };
    }
     window.addEventListener('scroll',changeBackground);
       
    return(
        <div>
         { widthOFwindow > 768 && 
        <ScrollAnimation animateIn="animate__flipInX" offset="0" duration={2}>
            <center>
        <div class='navbar-container'>
            <HStack className={'navbar'} spacing='1rem'>
            <a class='navbar-link' href="#">خانه</a>    
            <a class='navbar-link' href="#">برگه نمونه</a>
            <a class='navbar-link' href="#">خدمات اصلی</a>     
            <a class='navbar-link' href="#">سفارش جدید</a> 
            <a class='navbar-link' href="#">تماس با ما</a>   
            <img src={'logo-gamfa-0-1-1-pczs60ufzuqtuvb85id18kva6ci2ze9mc9v66ceeug.webp'} width="3.3%" alt="img" />  
            </HStack>
        </div>
        </center>
        </ScrollAnimation>
}           
        {widthOFwindow < 768 && <>
            
        
        <div
         
      class={navbar ? 'navbar-container-mobile' : 'navbar-scroll'}><img src="logo-gamfa-0-1-1-pczs60ufzuqtuvb85id18kva6ci2ze9mc9v66ceeug.webp" alt="img" width="50vw" style={{position:'absolute',left:'2rem',marginLeft:'37%',transition:'all 1s'}}/><Burger /></div>

        </>
        }
  
        </div>
    );
}

export default Navbar;