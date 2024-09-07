import React from "react";
import Header from "./topo.jsx"
import Hora from "../hora.jsx";

export default function HeaderFinal() {
  return (
    <div className="">
      <header className="flex items-start justify-start ">
        <div className="flex items-center">
          <Header />
          
        </div>
        <Hora />
      </header>
    </div>
  );
}
