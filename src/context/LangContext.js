import { createContext, useState } from "react";
import spanish from "../language/spanish";

const mx = spanish;

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState(mx);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
