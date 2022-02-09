import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import modern from "../../assets/modernuxui.png";
import share from "../../assets/shareme.png";
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
            <img src={modern} alt='modern ux ui'/>
            <div className="info-container">
            <div className="info-container-items">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aperiam alias sed quisquam veritatis, veniam tempore in blanditiis expedita, necessitatibus praesentium saepe enim non eius, architecto aliquam itaque ipsam consequuntur.</p>
            </div>
            </div>
          <div className="info-btn">
            {language.map((item, index)=> <button key={index}>{item.web}<BiNavigation size={20} color="#ffcc00"/></button>)}
            {language.map((item, index)=> <button key={index}>{item.repo}<BsGithub size={20} color="#ffcc00"/></button>)}
          </div>
          </div>
          <div className="card">
            <img src={modern} alt='modern ux ui'/>
            <div className="info-container">
            <div className="info-container-items">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aperiam alias sed quisquam veritatis, veniam tempore in blanditiis expedita, necessitatibus praesentium saepe enim non eius, architecto aliquam itaque ipsam consequuntur.</p>
            </div>
            </div>
          <div className="info-btn">
            {language.map((item, index)=> <button key={index}>{item.web}<BiNavigation size={20} color="#ffcc00"/></button>)}
            {language.map((item, index)=> <button key={index}>{item.repo}<BsGithub size={20} color="#ffcc00"/></button>)}
          </div>
          </div>
          <div className="card">
            <img src={modern} alt='modern ux ui'/>
            <div className="info-container">
            <div className="info-container-items">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aperiam alias sed quisquam veritatis, veniam tempore in blanditiis expedita, necessitatibus praesentium saepe enim non eius, architecto aliquam itaque ipsam consequuntur.</p>
            </div>
            </div>
          <div className="info-btn">
            {language.map((item, index)=> <button key={index}>{item.web}<BiNavigation size={20} color="#ffcc00"/></button>)}
            {language.map((item, index)=> <button key={index}>{item.repo}<BsGithub size={20} color="#ffcc00"/></button>)}
          </div>
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
