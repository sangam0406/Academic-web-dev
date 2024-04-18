import React from "react";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

const Profile = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Profile;
