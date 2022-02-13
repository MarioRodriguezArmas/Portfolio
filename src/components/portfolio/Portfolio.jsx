import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import modern from "../../assets/modernuxui.png";
import login from "../../assets/login.png";
import bilingual from "../../assets/bilingual.png";
import mrjs from "../../assets/mrJS.png";
import {BiNavigation} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import "./portfolio.css";

const Portfolio = () => {
  const { language } = useContext(LangContext);
  
  return (
    <section className="portfolio_container" id="portfolio">
      <div className="off"></div>
      <div className="portfolio_container-items">
        <div className="portfolio_container-items-card">
          <div className="card">
            <img src={login} alt='modern ux ui'/>
            <div className="info-container">
            <div className="info-container-items">
            {language.map((item, index)=> <h1 key={index}>{item.logintitle}</h1>)}
            {language.map((item, index)=> <p key={index}>{item.login}</p>)}
            </div>
            </div>
          <div className="info-btn">
            {language.map((item, index)=> <a key={index} href="https://loginauthmern.netlify.app" target="_blank" rel="noopener noreferrer"><button>{item.web}<BiNavigation size={20} color="#ffcc00"/></button></a>)}
            {language.map((item, index)=> <a key={index} href="https://github.com/MarioRodriguezArmas/AuthInMern" target="_blank" rel="noopener noreferrer"><button>{item.repo}<BsGithub size={20} color="#ffcc00"/></button></a>)}
          </div>
          </div>
          <div className="card">
            <img src={modern} alt='modern ux ui'/>
            <div className="info-container">
            <div className="info-container-items">
            {language.map((item, index)=> <h1 key={index}> {item.moderntitle}</h1>)}
            {language.map((item, index)=> <p key={index}>{item.modern}</p>)}

            </div>
            </div>
          <div className="info-btn">
          {language.map((item, index)=> <a key={index} href="https://modernuxui.netlify.app/" target="_blank" rel="noopener noreferrer"><button>{item.web}<BiNavigation size={20} color="#ffcc00"/></button></a>)}            
          {language.map((item, index)=> <a key={index} href="https://github.com/MarioRodriguezArmas/ModernUXUI" target="_blank" rel="noopener noreferrer"><button>{item.repo}<BsGithub size={20} color="#ffcc00"/></button></a>)}          </div>
          </div>
          <div className="card">
            <img src={bilingual} alt='modern ux ui'/>
            <div className="info-container">
            <div className="info-container-items">
            {language.map((item, index)=> <h1 key={index}>{item.bititle}</h1>)}
            {language.map((item, index)=> <p key={index}>{item.bilingual}</p>)}

            </div>
            </div>
          <div className="info-btn">
          {language.map((item, index)=> <a key={index} href="https://bilingualapp.netlify.app" target="_blank" rel="noopener noreferrer"><button >{item.web}<BiNavigation size={20} color="#ffcc00"/></button></a>)}            
          {language.map((item, index)=> <a key={index} href="https://github.com/MarioRodriguezArmas/Bilingual-App" target="_blank" rel="noopener noreferrer"><button >{item.repo}<BsGithub size={20} color="#ffcc00"/></button></a>)}          </div>
          </div>
        </div>
        <div className="portfolio-section_container-items-logo">
          <img src={mrjs} alt="logofull" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
