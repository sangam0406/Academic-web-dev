import React, { useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
import "./Education.css";
const Education = () => {
  //   const controls = useAnimation();
  //   const ref = useRef(null);
  //   const inView = useInView(ref, { once: true });
  //   if (inView) {
  //     controls.start("visible");
  //   }
  return (
    <div
      className="education"
      //   id="education"
      //   ref={ref}
      //   variants={{
      //     hidden: { opacity: 0.8, x: -200 },
      //     visible: { opacity: 1, x: 0 },
      //   }}
      //   initial="hidden"
      //   animate={controls}
      //   transition={{ duration: 1 }}
    >
      <div className="container-edu">
        <div className="row-edu">
          <div className="col-edu">
            <h2 className="title-edu">Education</h2>
            <div className="contents-edu">
              <div className="box-edu">
                <h4>2022-2026</h4>
                <h4>B.tech in Computer Science</h4>
                <p>
                  Vellore Institute of Technology, Vellore <br />
                  <br />
                  <span className="cgpa">CGPA</span> : 8.8
                </p>
              </div>
              <div className="box-edu">
                <h4>2021-2022</h4>
                <h4>12th Standard (HSE)</h4>
                <p>K.J.Somaiya College of Science & Commerce</p>
                <span className="cgpa">Grade</span> : 89.2%
              </div>
              <div className="box-edu">
                <h4>2019-2020</h4>
                <h4>10th Standard (SSC)</h4>
                <p>Model English School,Mumbai</p>
                <span className="cgpa">Grade</span> : 95.2%
              </div>
            </div>
          </div>
          <div className="col-edu">
            <h2 className="title-edu">Experience</h2>
            <div className="contents-edu">
              <div className="box-edu">
                <h4>2024-</h4>
                <h4>AI/ML Head</h4>
                <p>RoboVitics Club, VIT Vellore</p>
              </div>
              <div className="box-edu">
                <h4>2024-2024</h4>
                <h4>ResearchIntern</h4>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
