import React from "react";
import HeaderFinal from "../components/Header/index.jsx";
import "./home.css";
import Projects from '../components/Projects/Projects.jsx'
import Footer from "../components/footer/footer.jsx";
import { useTranslation } from "react-i18next";
import '../i18n.js'

export default function Projetos() {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center text-white py-14 px-4">
      <div className="max-w-screen-lg w-full rounded-lg ml-2">
      <HeaderFinal />
      </div>
        <main>
          <div className="flex flex-col lg:flex-row justify-between mt-8">
              <Projects />  
          </div>
        </main>
        <div className=" lg:flex-row justify-center mt-8">
            <Footer />
        </div>
        </div>
    </>
    
  );
}
