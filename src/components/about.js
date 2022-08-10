import React from "react";
import Navbar from "./navbar";

const About = () => {
  const title = "Halaman About";
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>{title}</h1>
        <p>
          About Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          maxime minus. Aspernatur?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur magnam corrupti atque temporibus iste
          nobis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          autem provident fugit soluta eveniet, dolore ducimus beatae veritatis
          magnam facilis?
        </p>
      </div>
    </div>
  );
};

export default About;
