import React from "react";
import "./nav.css";
import {AiOutlineHome,AiOutlineUser,AiFillBook} from "react-icons/ai"
import {RiServiceFill} from "react-icons/ri"
import {FaMailBulk} from "react-icons/fa"
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState();
  return <nav>
    <a  href="#" className={activeNav ==="#"? "active":""}onClick={()=>setActiveNav("#")}> <AiOutlineHome /> </a>
    <a  href="#about" onClick={()=>setActiveNav("#about")} className={activeNav ==="#about"? "active":""}> <AiOutlineUser /></a>
    <a  href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav ==="#experience"? "active":""}> <AiFillBook /> </a>
    <a  href="#services" onClick={()=>setActiveNav("#services")} className={activeNav ==="#services"? "active":""}> <RiServiceFill /> </a>
    <a  href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav ==="#contact"? "active":""}> <FaMailBulk /> </a>
    </nav>;
};

export default Nav;
