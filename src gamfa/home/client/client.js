import React, { useRef } from 'react'
import { useIsVisible } from 'react-is-visible'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './client.css';


import { easeQuadInOut } from "d3-ease";
import {


    buildStyles
  } from "react-circular-progressbar";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import ChangingProgressProvider from './ChangingProgressProvider';
import { transition } from '@chakra-ui/styled-system';


function Client(){


    const styling = isHide=> ({
        alignItems: "center",
        backgroundColor: isHide ? "blue" : "red",
        color: "white",
        display: "flex",
        fontSize: "32px",
        height: "100vh",
        justifyContent: "center",
        transition: "background-color 1s ease"
      });
//<p ref={nodeRef} style={styling(isHide)}>{isHide && x}</p>
    const nodeRef = useRef()
    const isHide = useIsVisible(nodeRef)
    const x = 90
    const y =70
  
    return (
    <div>
        
        <div class='client-container'  ref={nodeRef}>
        <div class='client-box1'><center><div class='client-box-container'><p class='client-cir-txt1'>بازخورد مثبت</p><div style={{ width: '30%' ,borderRadius:'360px 360px'}} class="div-cir" ><CircularProgressbar value={isHide && x} text={`${ isHide && x}%`}/></div><p class='client-cir-txt2'>بر اساس مشتریان خوشحال ما در مورد کیفیت خدمات ما</p></div></center></div>
        <div class='client-box2'><center><div class='client-box-container'><p class='client-cir-txt1'>پروژه ها</p><div style={{ width: '30%' ,borderRadius:'360px 360px'}} class="div-cir" ><CircularProgressbar value={isHide && y} text={`${ isHide && y}%`}/></div><p class='client-cir-txt2'>پروژهای های در حال ساخت با رقابتی ترین کیفیت</p></div></center></div>
        <div class='client-box3'><center><div class='client-box-container'><p class='client-cir-txt1'>گامفا وب</p><div style={{ width: '30%' ,borderRadius:'360px 360px'}} class="div-cir">       <ChangingProgressProvider values={[0, 20, 80]}>
        {value => (
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            circleRatio={0.75}
            styles={buildStyles({
              rotation: 1 / 2 + 1 / 8,
              strokeLinecap: "butt",
              trailColor: "#eee"
            })}
          />
        )}
      </ChangingProgressProvider></div><p class='client-cir-txt2'>با خیال راحت برای کسب و کار خود گام بردارید</p></div></center></div>
        </div>

    </div>
    )
  }
  

export default Client;