import './content2.css';
import './texthover.css';
import { Grid, GridItem, ChakraProvider } from "@chakra-ui/react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Content2(){
    return(
        <div>
          <ScrollAnimation animateIn="animate__backInLeft" offset="450" duration={2}>
            <ChakraProvider>
          <Grid
            w="100%"
            templateRows={{base:"repeat(249, 1rem)",sm:"repeat(256, 1rem)",md:"repeat(91, 1rem)",lg:"repeat(42, 1rem)",xl:"repeat(45, 1rem)"}}
            templateColumns={{base:"repeat(50, 1fr)", sm:"repeat(36, 1fr)",md:"repeat(30, 1fr)",lg:"repeat(31, 1fr)",xl:"repeat(31, 1fr)"}}
            gap={0}
          >
              <GridItem className={'content2-box1'} colStart={{base:2, sm:4, md:5,lg:3 ,xl:3}} colEnd={{base:50, sm:35, md:15,lg:9 ,xl:9}} rowStart={{base:1, sm:1, md:1,lg:1 ,xl:1}} rowEnd={{base:30,sm:32,md:22,lg:21,xl:21}}>

  <div class="content">
    
      <div class="content-overlay"></div>
      <img src='web.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
    
  </div>

                <center>
                  <h2 class="content2-box-txt1">گامفا وب</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              <GridItem className={'content2-box2'} colStart={{base:2, sm:4, md:17,lg:10 ,xl:10}} colEnd={{base:50, sm:35, md:27,lg:16 ,xl:16}} rowStart={{base:31, sm:34, md:1,lg:1 ,xl:1}} rowEnd={{base:62,sm:64,md:22,lg:21,xl:21}}>
              <div class="content">

      <div class="content-overlay"></div>
      <img src='as.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
  
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا استودیو</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              <GridItem className={'content2-box3'} colStart={{base:2, sm:4, md:5,lg:17 ,xl:17}} colEnd={{base:50, sm:35, md:15,lg:23 ,xl:23}} rowStart={{base:63, sm:66, md:23,lg:1 ,xl:1}} rowEnd={{base:94,sm:96,md:45,lg:21,xl:21}}>
              <div class="content">
    
      <div class="content-overlay"></div>
      <img src='bu.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
    
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا بیزینس</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              <GridItem className={'content2-box4'} colStart={{base:2, sm:4, md:17,lg:24 ,xl:24}} colEnd={{base:50, sm:35, md:27,lg:30 ,xl:30}} rowStart={{base:95, sm:98, md:23,lg:1 ,xl:1}} rowEnd={{base:125,sm:128,md:45,lg:21,xl:21}}>
              <div class="content">
   
      <div class="content-overlay"></div>
      <img src='aca.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
  
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا آکادمی</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>




              <GridItem className={'content2-box1'} colStart={{base:2, sm:4, md:5,lg:3 ,xl:3}} colEnd={{base:50, sm:35, md:15,lg:9 ,xl:9}} rowStart={{base:126, sm:130, md:46,lg:23 ,xl:23}} rowEnd={{base:156,sm:160,md:68,lg:42,xl:43}}>
              <div class="content">
   
      <div class="content-overlay"></div>
      <img src='market.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
    
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا مارکتینگ</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              <GridItem className={'content2-box2'} colStart={{base:2, sm:4, md:17,lg:10 ,xl:10}} colEnd={{base:50, sm:35, md:27,lg:16 ,xl:16}} rowStart={{base:157, sm:162, md:46,lg:23 ,xl:23}} rowEnd={{base:187,sm:192,md:68,lg:42,xl:43}}>
              <div class="content">
   
      <div class="content-overlay"></div>
      <img src='ad.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
    
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا تبلیغات</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              <GridItem className={'content2-box3'} colStart={{base:2, sm:4, md:5,lg:17 ,xl:17}} colEnd={{base:50, sm:35, md:15,lg:23 ,xl:23}} rowStart={{base:188, sm:194, md:69,lg:23 ,xl:23}} rowEnd={{base:218,sm:224,md:91,lg:42,xl:43}}>
              <div class="content">
    
      <div class="content-overlay"></div>
      <img src='gra.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
   
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا گرافیک</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              <GridItem className={'content2-box4'} colStart={{base:2, sm:4, md:17,lg:24 ,xl:24}} colEnd={{base:50, sm:35, md:27,lg:30 ,xl:30}} rowStart={{base:219, sm:226, md:69,lg:23 ,xl:23}} rowEnd={{base:249,sm:256,md:91,lg:42,xl:43}}>
              <div class="content">
   
      <div class="content-overlay"></div>
      <img src='dig.webp' class='content2-box-img' alt="img"/>
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">This is a title</h3>
        <p class="content-text">This is a short description</p>
      </div>
   
  </div>
              
                <center>
                  <h2 class="content2-box-txt1">گامفا دیجیتال</h2>
                  <p class='content2-box-txt2'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                  <button class='content2-botton1'>اطلاعات بیشتر</button>
                </center>
              </GridItem>

              

              
              
          </Grid>
          </ChakraProvider>
          </ScrollAnimation>
        </div>
    )
}
export default Content2;