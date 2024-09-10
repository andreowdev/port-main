import React, { createContext, useState } from "react";
import en from "./en.json";  // Importe o JSON de inglês
import pt from "./pt.json";  // Importe o JSON de português

// Crie o contexto
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");
  const [texts, setTexts] = useState(pt);  // Comece com português por padrão

  const toggleLanguage = () => {
    if (language === "pt") {
      setLanguage("en");
      setTexts(en);
    } else {
      setLanguage("pt");
      setTexts(pt);
    }
  };

  return (
    <LanguageContext.Provider value={{ texts, toggleLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
