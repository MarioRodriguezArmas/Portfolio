import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import './about.css'
import mrjs from "../../assets/mrJS.png";



const About = () => {
    const { language } = useContext(LangContext);
  return (
    <section id="about">
      <div className="off"></div>

      <div className="about-section_container-items">
        <div className="img">
          <img src={mrjs} alt="logofull" />
        </div>
        <div className="about-container_cards">
          <div className="about-container whoami">
          {language.map((item,index)=> <h2 key={index}>{item.who}</h2>)}
           {language.map((item, index)=> <p key={index}>{item.info}</p>)}
          </div>
          <div className="about-container experience">
          {language.map((item,index)=> <h2 key={index}>{item.motiv}</h2>)}
           {language.map((item, index)=> <p key={index}>{item.info2}</p>)}
          </div>
          <div className="about-container career">
          {language.map((item,index)=> <h2 key={index}>{item.master}</h2>)}
           {language.map((item, index)=> <p key={index}>{item.info3}<br></br><br></br> <a href="https://www.devf.la/" target="_blank" rel="noopener noreferrer"><button>{item.visit}</button> </a></p>)}
           
          </div>
          <div className="about-container expectations">
          {language.map((item,index)=> <h2 key={index}>{item.expectations}</h2>)}
           {language.map((item, index)=> <p key={index}>{item.info4}<br></br><br></br><b>{item.end}</b></p>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
