import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";


const Message = () => {
    const { language } = useContext(LangContext);

  return (
      <div >
          {language.map((item, index)=> <h2 key={index}>{item.message}</h2>)}
      </div>
  )
}

export default Message