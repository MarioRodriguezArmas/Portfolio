import React, {useContext} from 'react';
import Loader from 'react-loader-spinner';
import { LangContext } from "../../context/LangContext";





function Spinner({ message }) {
  const { language } = useContext(LangContext);

  return (
    <div className="spinner_container">
      <Loader
        type="Circles"
        color="#ffcc00"
        height={80}
        width={200}
        className="m-5"
      />

      {language.map((item,index)=><p key={index} className="spinner">{item.sending}</p>)}
    </div>
  );
}

export default Spinner;