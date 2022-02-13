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
        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">
          <VscFilePdf size={60} color="#ffcc00" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">
          <BsLinkedin size={60} color="#ffcc00" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com">
          <BsGithub size={60} color="#ffcc00" />
        </a>
      </div>
    </div>
  );
};

export default Info;
