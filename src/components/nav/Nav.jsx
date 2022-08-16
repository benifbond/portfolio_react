import React from "react";
import "./nav.css";
import {AiOutlineHome,AiOutlineUser,AiFillBook} from "react-icons/ai"
import {RiServiceFill} from "react-icons/ri"
import {FaMailBulk} from "react-icons/fa"
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return <nav>
    <a  href="#" className={activeNav ==="#"? "active":""}onClick={()=>setActiveNav("#")}> <AiOutlineHome /> </a>
    <a  href="#about" onClick={()=>setActiveNav("#about")} className={activeNav ==="#about"? "active":""}> <AiOutlineUser /></a>
    <a  href="#experience"> <AiFillBook /> </a>
    <a  href="#services"> <RiServiceFill /> </a>
    <a  href="#contact"> <FaMailBulk /> </a>
    </nav>;
};

export default Nav;
