import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './content3.css';
import React, { useRef } from 'react'


function Content3 (){

    const content = [
        { description: <><div class="content3-img"><center><p class='content3-txt2'>بهترین مواردی که برای طراحی سایت باید رعایت نمایید</p><p class='content3-txt3'>لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.لورم ایپسوم یا طرح‌ نما به متنی</p><button class='content3-button1'>ادامه مطلب</button></center></div><img src='aca.webp' class='content3-pic' alt="img"/></>},
        { description: <><div class="content3-img"><center><p class='content3-txt2'>فصل بهار برای من همیشه یک رویا است</p><p class='content3-txt3'>سلام من به شما کاربر عاشق وردپرس لورم ایپسوم یا طرح‌ نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته</p><button class='content3-button1'>ادامه مطلب</button></center></div><img src='hd_980ebefe5fdc618c8a5f58be4dc166b3.webp' class='content3-pic' alt="img"/></>}
      ];


    return(
        <div>
            <center>
                <p class='content3-txt1'>آخرین مطالب و اخبار</p>
            </center>
        <div style={{marginBottom:'1rem',marginTop:'1rem'}}>
            <Slider autoplay={0} infinite='true' height='100vh'>
	{content.map((item, index) => (
		<div
			key={index}
		>
			<div className="center">

				<p>{item.description}</p>

			</div>
		</div>
	))}
</Slider>
        </div>
        </div>
    )
}
export default Content3;