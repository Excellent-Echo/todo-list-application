import React from "react";
import "./index.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-text mt-5">
        Hello Sona, welcome back. <br /> You have tasks to complete
      </h1>
      <img className="img-fluid" src="task.jpg" alt="ilustrasi" />
    </div>
  );
};

export default Hero;
