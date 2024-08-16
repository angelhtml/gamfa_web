import './footer.css';
import Wave from 'react-wavify';
import { Grid, GridItem, ChakraProvider,VStack } from "@chakra-ui/react";

function Footer() {
    return(
        <div>
             
            <Wave fill="url(#gradient)" style={{transform:'rotate(0deg)',height:'550px',position:'absolute'}} className={'footer-wave'}
             options={{
              height: 20,
              amplitude: 50,
              speed: 0.19,
              points: 5
            }}
            >
            <defs>
            <linearGradient id="gradient" gradientTransform="rotate(180)">
            <stop offset="1%"  stopColor="#0ff" />
            <stop offset="99%" stopColor="#8800ff" />
            </linearGradient>
            </defs>
            </Wave>

            <ChakraProvider>
          <Grid
            w="100%"
            templateRows={{base:"repeat(25, 1rem)",sm:"repeat(36, 1rem)",md:"repeat(27, 1rem)",lg:"repeat(26, 1rem)",xl:"repeat(25, 1rem)"}}
            templateColumns={{base:"repeat(50, 1fr)", sm:"repeat(35, 1fr)",md:"repeat(100, 1vw)",lg:"repeat(100, 1vw)",xl:"repeat(100, 1vw)"}}
            gap={0}
          >
              <GridItem zIndex='998' colStart={{base:2, sm:2, md:50,lg:59 ,xl:60}} colEnd={{base:50, sm:35, md:97,lg:98 ,xl:97}} rowStart={{base:7, sm:7, md:7,lg:7 ,xl:7}} rowEnd={{base:25,sm:28,md:28,lg:25,xl:25}}>
                  <p class='footer-txt1'>شرکت گامفا</p><br />
                  <p class='footer-txt2'>اجازه دهید ما تجارت شمارا بهبود دهیم</p><br />
                  <p class='footer-txt3'>آدرس: کرج ، کیانمهر ،بلوار امیرکبیر ،ساختمان 2</p><br />
                  <center>
                  <button class='footer-button1'>مشاوره آنلاین</button>
                  </center>
                  <img src="logo-gamfa-0-1-1-pczs60ufzuqtuvb85id18kva6ci2ze9mc9v66ceeug.webp" alt="img" class="footer-logo"/>
                  <p class='footer-txt4'>کلیه حقوق برای وبسایت گامفا محفوظ است</p>
              </GridItem>

              <img alt="img" src="Daco_5874671.png" class='footer-img1'/>
              </Grid></ChakraProvider>

              
        </div>
    )
}
export default Footer;