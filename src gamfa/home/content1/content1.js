import './content1.css';
import { Grid, GridItem, ChakraProvider } from "@chakra-ui/react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function Content1(){
    return(
        <div>
            <ChakraProvider>
          <Grid
            w="100%"
            templateRows={{base:"repeat(55, 1rem)",sm:"repeat(36, 1rem)",md:"repeat(25, 1rem)",lg:"repeat(28, 1rem)",xl:"repeat(29, 1rem)"}}
            templateColumns={{base:"repeat(50, 1fr)", sm:"repeat(35, 1fr)",md:"repeat(30, 1fr)",lg:"repeat(30, 1fr)",xl:"repeat(30, 1fr)"}}
            gap={0}
          >
            <GridItem  colStart={{base:2, sm:2, md:2,lg:2 ,xl:2}} colEnd={{base:50, sm:35, md:30,lg:30 ,xl:30}} rowStart={{base:2, sm:1, md:1,lg:1 ,xl:3}} rowEnd={{base:46,sm:49,md:20,lg:18,xl:21}}>
            <ScrollAnimation animateIn="animate__bounceInUp" offset="400" duration={2}>
            
                <div class='content1-stage1-flex1'>
                    <div class='content1-stage1-box1'>
                        <img src={'gmfa.webp'} width='100%' alt="img" />
                    </div>
                    <div class='content1-stage1-box2'>
                    
                      <p class="content1-stage1-box2-txt1">درباره گامفا بیشتر بدانید</p><br />
                    <p class="content1-stage1-box2-txt2">شرکت گروه اندیشه محوران فاضل با برند گامفا با هدف رشد و توسعه کسب و کارها تاسیس و شروع به فعالیت کرده است. </p><br />
                    <p class="content1-stage1-box2-txt2">شرکت گامفا دارای بخش های مختلفی همراه با متخصصین با تجربه و حرفه ای ویژه هر بخش میباشد که به شما کمک میکند تمام نیازها و دغدغه هایی که در کسب و کار خود دارید به راحتی و با خیال آسوده پشت سر بگذارید و از رشد و توسعه کسب و کار خود لذت ببرید.</p>
                    </div>
                </div>
                
                </ScrollAnimation>
                <center>
              <p class="content1-stage1-box2-txt3">معرفی بخش های مختلف شرکت گامفا برای پاسخگویی به نیازهای کسب و کار شما</p>
          </center>
          
          
            </GridItem>
          </Grid>
          </ChakraProvider>
        </div>
    )
}
export default Content1;