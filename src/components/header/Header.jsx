import React,{Component} from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../asset/me.png"
import HeaderSocials from "./HeaderSocials";

import Typewriter from 'typewriter-effect';




const Header = () => {
    return (
<header>
    <div className="container header_container">
    <div>
      <div>
    
</div>
 </div>

 
        <Typewriter
  options={{
    
    
    strings:['Hello!', "Welcome to my", "Porfolio website"],
    autoStart: true,
    loop: true,
  
  }}
/>

<h1> Beniah</h1>
      <h5 className="text-light">Fullstack Develop</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className="scroll_down"> Scroll Down</a>
    </div>
</header>
 )
};

export default Header;