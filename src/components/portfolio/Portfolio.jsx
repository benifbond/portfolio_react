import React from "react";
import IMG1 from "../../asset/portfolio1.jpg"
import IMG2 from "../../asset/portfolio2.jpg"
import IMG3 from "../../asset/portfolio3.jpg"
import IMG4 from "../../asset/portfolio4.jpg"
import IMG5 from "../../asset/portfolio5.png"
import "./portfolio.css";

const data = [
  {
  id :1,
  image: IMG1,
title: "The Book sharing App",
github: "https://github.com/benifbond",
demo:"https://dribble.com"

},
{
  id :2,
  image: IMG2,
title: "The Ecommerce Store",
github: "https://github.com/benifbond",
demo:"https://dribble.com"
},
{
  id :3,
  image: IMG3,
title: "The Book sharing App",
github: "https://github.com/benifbond",
demo:"https://dribble.com"
},
{id :4,
  image: IMG4,
title: "Memory Game Book sharing App",
github: "https://github.com/benifbond",
demo:"https://dribble.com"
},
{
  id:5,
  image: IMG5,
title: "The JOBBYaPP",
github: "https://github.com/benifbond",
demo:"https://dribble.com"}]
const Portfolio = () => {
  return <section id="portfolio">
    <h5> Recent Works</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
    {data.map(({id,image,github,title,demo}) =>{
    return(
     <article key={id} className="portfolio__item">
     <div className="portfolio__item-image">
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className="btn">Github</a>
      <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer"> Live Demo</a>
      </div>
    </div>
   </article>
  )})}
    </div>
  </section>;
};

export default Portfolio;
