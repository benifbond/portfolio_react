import React from "react";
import "./footer.css";
import {AiFillTwitterCircle,AiOutlineLinkedin} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
      <a href="#footer" className="footer__logo"></a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience"> Experience</a></li>
        <li><a href="#services"> Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"><AiFillTwitterCircle /></a>

        <a href="https://twitter.com"><AiOutlineLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Beniah. All rights reserved</small>
      </div>
    </footer>
  )
};

export default Footer;
