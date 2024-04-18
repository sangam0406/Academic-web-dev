import { useTypewriter, Cursor } from "react-simple-typewriter";
import React, { useRef } from "react";
import sangam from "../../assets/img/png/background.png";
// import { motion, useInView, useAnimation } from "framer-motion";
import "./Header.css";
const Header = () => {
  //   const controls = useAnimation();
  //   const ref = useRef(null);
  //   const inView = useInView(ref, { once: true });
  //   if (inView) {
  //     controls.start("visible");
  //   }
  const [typeEffect] = useTypewriter({
    words: [" Programmer.", " Innovater.", " ML Developer."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div
      className="hero-section"
      //   id="home"
      //   ref={ref}
      //   variants={{
      //     hidden: { opacity: 0.8, x: -200 },
      //     visible: { opacity: 1, x: 0 },
      //   }}
      //   initial="hidden"
      //   animate={controls}
      //   transition={{ duration: 1 }}
    >
      <img
        src={sangam}
        alt=""
        style={{
          marginLeft: "50%",
          marginBottom: "10%",
          position: "absolute",
          height: "45rem",
        }}
      />
      <div className="title">
        <h1>
          I'm a<span>{typeEffect}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
