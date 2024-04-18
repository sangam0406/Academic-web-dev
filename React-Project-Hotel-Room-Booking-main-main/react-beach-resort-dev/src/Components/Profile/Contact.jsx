import React, { useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";
import "./Contact.css";
import phone from "../../assets/img/png/white-phone-icon-vector-7151422.png";
import location from "../../assets/img/png/360_F_149544314_UcRXtS7SJVBBFUYVJGA88LWgbimCMsfg.png";
import linkdein from "../../assets/img/png/icons8-linkedin-24.png";
import github from "../../assets/img/png/icons8-github-26.png";
import facebook from "../../assets/img/png/icons8-facebook-24.png";
import twitterx from "../../assets/img/png/icons8-twitterx-50.png";
const Contact = () => {
  //   const controls = useAnimation();
  //   const ref = useRef(null);
  //   const inView = useInView(ref, { once: true });
  //   if (inView) {
  //     controls.start("visible");
  //   }
  return (
    <div
      className="contact"
      //   id="contact"
      //   ref={ref}
      //   variants={{
      //     hidden: { opacity: 0.8, x: -200 },
      //     visible: { opacity: 1, x: 0 },
      //   }}
      //   initial="hidden"
      //   animate={controls}
      //   transition={{ duration: 1 }}
    >
      <h2>Contact Me</h2>

      <div className="container1">
        <form className="input">
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email :</label>
          <input type="emai" id="email" />
          <br />
          <p>Enter your Email: </p>
          <textarea name="" id="" cols="43" rows="10"></textarea>
          <input type="submit" id="btn" />
        </form>
        <div className="socials">
          <h3>Contact Info</h3>
          <div className="details">
            <img src={phone} alt="" />
            <p>+91-9702907871</p>
          </div>
          <div className="details">
            <img src={location} alt="" className="special" />
            <p>SHIVAM COMPLEX,THANE,MUMBAI</p>
          </div>
          <h3>Social Media</h3>
          <div className="links1">
            <a href="https://github.com/sangam0406" target="_blank">
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/sangam-narayanan-322b75239/"
              target="_blank"
            >
              <img src={linkdein} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
