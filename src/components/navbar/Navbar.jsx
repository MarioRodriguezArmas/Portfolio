import React, { useContext, useState } from "react";
import { BsMenuDown, BsMenuUp } from "react-icons/bs";
import spanish from '../../language/spanish'
import english from '../../language/english'
import { LangContext } from "../../context/LangContext";
import "./navbar.css";
import logo from "../../assets/logo.png";

const mx = spanish
const us = english

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(true);
  const {setLanguage} = useContext(LangContext)
  const {language} =useContext(LangContext)
  return (
    <div className="navbar_container">
      <img src={logo} alt="mario rodriguez logo" />
      <div className="navbar_container-items">
        <div className="navbar_container-items-links">
          <div className="links">
          {language.map((item, index) => <a key={index} href="#main">{item.main}</a>)}
          {language.map((item, index) => <a key={index} href="#about">{item.about}</a>)}
          {language.map((item, index) => <a key={index} href="#portfolio">{item.portfolio}</a>)}
          {language.map((item, index) => <a key={index} href="#contact">{item.contact}</a>)}
          </div>
          <div className="btn">
            <button className={toggleBtn?"btn-button": "activebf" } onClick={() =>{setToggleBtn(false);setLanguage(us)}}>US</button>
            <button className={!toggleBtn? "btn-button":"activegf" } onClick={() =>{setToggleBtn(true); setLanguage(mx)}}>MX</button>
          </div>
        </div>
      </div>
    <div className="toggle_nav">
    {toggleNav ? (
        <BsMenuDown size={35} color="#ffcc00" onClick={()=>setToggleNav(false)} />
      ) : (
        <BsMenuUp size={35} color="#ffcc00" onClick={()=>setToggleNav(true)} />
      )}
      {toggleNav && (<div className="toggle_nav-links">
          <div className="toggle-btn">
          <button className={toggleBtn?"toggle_nav-links-button": "activeb" } onClick={() =>{setToggleBtn(false);setLanguage(us)}}>US</button>
            <button className={!toggleBtn?"toggle_nav-links-button":"activeg" } onClick={() =>{setToggleBtn(true);setLanguage(mx)}}>MX</button>
          </div>
      <div className="toggle-links">
      {language.map((item, index) => <a key={index} href="#main">{item.main}</a>)}
          {language.map((item, index) => <a key={index} href="#about">{item.about}</a>)}
          {language.map((item, index) => <a key={index} href="#portfolio">{item.portfolio}</a>)}
          {language.map((item, index) => <a key={index} href="#contact">{item.contact}</a>)}
          </div>
      </div>)}
    </div>
    </div>
  );
};

export default Navbar;
