// src/components/Footer/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className=" text-white py-4 text-center  bottom-0 w-full">
      <p className="text-sm mb-2">© {new Date().getFullYear()} Andreo Henrique. Todos os direitos reservados.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="/contato" className="text-gray-400 hover:text-gray-300">Contato</a>
      </div>
    </footer>
  );
}

export default Footer;
