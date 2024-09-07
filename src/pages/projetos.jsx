import React from "react";
import HeaderFinal from "../components/Header/index.jsx";
import "./home.css";
import Projects from '../components/Projects/Projects.jsx'

export default function Projetos() {
  return (
    <div className="min-h-screen flex flex-col items-center   text-white py-14">
      <div className="container max-w-screen-lg   bg-opacity-20 rounded-lg">
        <HeaderFinal />
        <main>
          <div className="flex flex-col lg:flex-row justify-between mt-8">
            <div className="lg:w-7/12  shadow-lg rounded-lg p-6 mb-6 lg:mb-0">
                    <Projects />  
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
