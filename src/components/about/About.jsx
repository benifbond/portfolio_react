import React from "react";
import "./about.css";
import ME from "../../asset/me-about.jpg";
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {FcOpenedFolder} from "react-icons/fc"
const About = () => {
  return (
<section id="about"> 
<h5> Get to Know..</h5>
<h2>About me</h2>
<div className="container about__container">
  <div className="about__me">
    <div className="about__me-image">
      <img src={ME} alt="About me" />
    </div>

  </div>
  <div className="about__content">
    <div className="about__cards">
      <article className="about__card">
        <FaAward className="about__icon"/>
        <h5> Experience</h5>
        <small>2+ Years woorking </small>
      </article>
      <article className="about__card">
        <FiUsers className="about__icon"/>
        <h5> Clients</h5>
        <small>200+ Worldwide </small>
      </article>
      <article className="about__card">
        <FcOpenedFolder className="about__icon"/>
        <h5> Projects</h5>
        <small> 10+ completed projects</small>
      </article>
   </div>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel omnis laborum ratione qui at autem assumenda, quisquam laudantium distinctio facere tempore minima corporis. Optio deserunt, cum minus illo voluptatum voluptas.
      </p>
      <a href="#contact" className="btn btn primary"> Let's Talk</a>
  </div>
</div>
</section>
  )
};

export default About;
