import React from 'react';
import './portfolio.css';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A laudantium vitae neque exercitationem animi ab minus ipsam velit optio, pariatur amet natus minima consequatur veritatis? Aut quas cumque autem nihil?
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio;
