import React, { useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

import "./Projects.css";
import delish from "../../assets/img/png/Screenshot 2024-04-18 201149.png";
import weather from "../../assets/img/png/office.png";
const Projects = () => {
  //   const controls = useAnimation();
  //   const ref = useRef(null);
  //   const inView = useInView(ref, { once: true });
  //   if (inView) {
  //     controls.start("visible");
  //   }
  return (
    <div
      className="projects"
      //   id="projects"
      //   ref={ref}
      //   variants={{
      //     hidden: { opacity: 0.8, x: -200 },
      //     visible: { opacity: 1, x: 0 },
      //   }}
      //   initial="hidden"
      //   animate={controls}
      //   transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="container2">
        <div className="project">
          <img className="front" src={delish} alt="" />
          <h3>Project One</h3>
          <div className="btn-container">
            <a href="https://github.com/sangam0406/Astute_Samsung_Prism">
              <button>Github</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img className="front" src={weather} alt="" />
          <h3>Project Two</h3>
          <div className="btn-container">
            <a href="https://github.com/sangam0406/yantra-office-hack">
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
