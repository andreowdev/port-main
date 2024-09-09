import React from "react";
import HeaderFinal from "../components/Header/index.jsx";
import "./home.css";
import Contact from "../components/contacts/contact.jsx";
import Footer from '../components/footer/footer.jsx'

export default function Projetos() {
  return (
    <div className="min-h-screen flex flex-col items-center   text-white py-14">
      <div className="container max-w-screen-lg   bg-opacity-20 rounded-lg">
        <HeaderFinal />
        <main>
          <div className="flex flex-col lg:flex-row justify-center mt-8">
              <Contact  />  
          </div>
        </main>
        <div className=" lg:flex-row justify-center mt-8">
            <Footer />
        </div>
      </div>
    </div>
  );
}
