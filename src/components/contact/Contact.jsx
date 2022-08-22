import React from "react";
import "./contact.css";
import {AiTwotoneMail,AiOutlineWhatsApp} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from "emailjs-com"



const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zapzcrm', 'template_hj4iuge', form.current, 'd4o-13eqSn_EVHi84')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

     
  };

  
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
<article className="contact__option">
  <AiTwotoneMail className="contact__option-icon" />
  <h4>Email</h4>
  <a href="mailto:ifeanyionyebueke.ben@gmail.com" target={"_blank"} rel="noreferrer"> Send a message</a>
</article>
<article className="contact__option">
  <BsLinkedin className="contact__option-icon"/>
  <h4>LinkedIn</h4>

  <a href="https://www.linkedin.com/in/beniah-onyebueke" target={"_blank"} rel="noreferrer"> Send a message</a>
</article>
<article className="contact__option">
  <AiOutlineWhatsApp className="contact__option-icon" />
  <h4>WhatsApp</h4>
  <h5>chat me on WhatsApp</h5>
  <a href="https://api.whatsapp.com/send?phone=4915217972316/?text=urlencodedtext

=" target={"_blank"} rel="noreferrer"> Send a message</a>
</article>
        </div>
        {/* ==========END OF CONTACT OPTIONS====== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder="Your Full Name" required/>
          <input type="email" name ="email" placeholder="Your Email"  required/>
           <textarea name="message" id="" cols="30" rows="10" placeholder=" Your Message" required></textarea>
           <button type="submit" className="btn btn-primary"> send Message</button>
        </form>
      </div>
      
      </section>
  );
};

export default Contact;
