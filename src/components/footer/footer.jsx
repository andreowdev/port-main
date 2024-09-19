// src/components/Footer/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className=" text-white py-4 text-center  bottom-0 w-full">
      <p className="text-sm mb-2">© {new Date().getFullYear()} Andreo Henrique. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
