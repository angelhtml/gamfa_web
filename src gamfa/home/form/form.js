import {  useState } from "react";
import './form.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { FiSend } from 'react-icons/fi';
import { Button,ChakraProvider,HStack } from "@chakra-ui/react";


function Form(){
    const [form, setform] = useState(false);
    return(
        <div>
            <ScrollAnimation animateIn="animate__fadeIn" offset="400" duration={3}>
            <p class='form-txt1'>برای این که بتونی خیلی سریع با کارشناس های ما ارتباط بگیری همین الان فرم زیر رو تکمیل کن و برای ما بفرست</p>
            <center>
            <button class='form-txt1-button' onClick={() => setform(!form)}>ارتباط با ما</button>
            </center>
            <img src='waveup.svg' style={{position:'absolute',marginTop:'-0.1rem'}} alt="img"/>
            <img src='wavereal.svg' style={{}} alt="img" />
            </ScrollAnimation>
            {form && <div  onClick={() => setform(!form)}  style={{position:"fixed" , height:"100%" , width:"100%" , background:"rgba(0,0 ,0 ,0.5)", top:"0" , left:"0",zIndex:"999",}}>
                <center>
                <div class="input2" onClick={(e) => e.stopPropagation()} >
              <input placeholder="نام" type="text" class="input2-name"/>
              <div class="line-input2"></div>
              <input placeholder="ایمیل" type="text" class="input2-name"/>
              <div class="line-input2"></div>
              <input placeholder="شماره تماس" type="number" class="input2-name"/>
              <div class="line-input2"></div>
              <textarea placeholder="پیام خود را بنویسید" type="text" class="input2-name-aria"/>
            
        <center>
        <button class="input2-button">Submit</button>
        </center>
  
            </div>
                </center>
            </div>}
        </div>
    )
}
export default Form;