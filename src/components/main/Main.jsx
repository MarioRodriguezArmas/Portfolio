import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";


import "./main.css";
import github from "../../assets/github.png";
import icons from "../../assets/index";




const Main = () => {
  const { language } = useContext(LangContext);
  return (
    <div className="main_container" id="main">
      <div className="off"></div>
      <div className="main_container-img-info-skillset">
        <img className="main_container-img-info-skillset-img" src={github} alt="logo" />
        <div className="main_container-info-skillset">
          <div className="info">
              {language.map((item,index)=> <h1 key={index}>{item.me}</h1>)}
              <h2>Frontend React Web Developer</h2>
              </div>
          <div className="skillset">
            <div className="skillset_first">
                {icons[0].map((icon, index)=><img key={index} src={icon} alt='skillset logos'/>)}
            </div>
            <div className="skillset_second">
            {icons[1].map((icon, index)=><img key={index} src={icon} alt='skillset logos'/>)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
