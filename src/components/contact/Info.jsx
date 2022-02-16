import React from "react";
import { VscFilePdf } from "react-icons/vsc";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Info = () => {
  return (
    <div className="info_container">
    <div className="info_container-info">
    <h1>Frontend React Web Developer.</h1>
      <h2>Mario Alberto Rodríguez Armas.</h2>
      <h2>Guadalajara, Jalisco, Mexico.</h2>
      <h2>mariorodriguezjstech@gmail.com</h2>
      <h3>Tel: 3310257566</h3>
    </div>
      <div className="info_container-links">
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/11x-lMjW9IW--yLB8DDk-RGfQU8FwfVGg/view?usp=sharing">
          <VscFilePdf size={60} color="#ffcc00" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mario-alberto-rodriguez-armas-507b98231/">
          <BsLinkedin size={60} color="#ffcc00" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/MarioRodriguezArmas">
          <BsGithub size={60} color="#ffcc00" />
        </a>
      </div>
    </div>
  );
};

export default Info;
