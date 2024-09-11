import React from "react";
import Header from "./topo.jsx";
import Hora from "../hora.jsx";
import Language from "../language/language.jsx";
import "../../pages/home.css"; 

export default function HeaderFinal() {
  return (
    
    <div className="header-final-container ">
      <Language />
      <header className="flex flex-col md:flex-row justify-between items-center ">
        <div className=" items-center justify-center md:justify-start bg-opacity-custom person-header">
          <Header />
        </div>
        <div className="md:items-end  mt-4 xl:mb-24 xl:ml-0 md:mb-24 md:ml-2 ">
          <Hora />
          
        </div>
      </header>
    </div>
  );
}
