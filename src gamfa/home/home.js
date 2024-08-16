import Header from "./header/header";
import './home.css';
import Navbar from './navbar/navbar';
import Content1 from './content1/content1';
import Content2 from "./content2/content2";
import Content3 from "./content3/content3";
import AnimatedCursor from "react-animated-cursor";
import Form from "./form/form";
import Client from "./client/client";
import Footer from "./footer/footer";


function Home(){
    return(
        <div>
            <AnimatedCursor color='0, 255, 251'   outerAlpha={0.2}  innerSize={15} outerSize={15} innerScale={0.7} outerScale={5}/>
        <Navbar />    
        <Header />
        <Content1 />
        <Content2 />
        <Form />
        <Client />
        <Content3 />
        <Footer />
        </div>
    )
}
export default Home;