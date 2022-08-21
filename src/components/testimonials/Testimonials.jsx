import React from "react";
import "./testimonials.css"
import AVTR1 from "../../asset/avatar1.jpg"
import AVTR2 from "../../asset/avatar2.jpg"
import AVTR3 from "../../asset/avatar3.jpg"
import AVTR4 from "../../asset/avatar4.jpg"


// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data= [
  {
    avatar: AVTR1,
    name : "Faith Nonyem",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum quasi excepturi consectetur illo ullam repudiandae maiores consequatur praesentium vitae? Dicta, voluptatum illum. Laborum perferendis labore nesciunt quaerat iure quidem?"
  },
  {
    avatar: AVTR2,
    name : "Ifeanyi ",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum quasi excepturi consectetur illo ullam repudiandae maiores consequatur praesentium vitae? Dicta, voluptatum illum. Laborum perferendis labore nesciunt quaerat iure quidem?"
  },
  {
    
      avatar: AVTR3,
      name : "Isaac Raw ",
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum quasi excepturi consectetur illo ullam repudiandae maiores consequatur praesentium vitae? Dicta, voluptatum illum. Laborum perferendis labore nesciunt quaerat iure quidem?"
    
  },
  {
    avatar: AVTR4,
    name : "Sarah Eke",
    review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rerum quasi excepturi consectetur illo ullam repudiandae maiores consequatur praesentium vitae? Dicta, voluptatum illum. Laborum perferendis labore nesciunt quaerat iure quidem?"
  },
]



const Testimonials = () => {
  return <section id="testimonials" >
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container" 
    modules={[ Pagination, ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
      { data.map(({avatar,name,review},index) =>
      <SwiperSlide key={index}className="testimonial">
        <div className="client__avatar">
          <img src={avatar} alt="Avatar One" />
        </div>
        <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
      </SwiperSlide>
      )
     }
    </Swiper>
  </section >;
};

export default Testimonials;
