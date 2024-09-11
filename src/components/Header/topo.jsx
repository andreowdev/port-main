import React from "react";
import { useTranslation } from "react-i18next";
import icon from "../img/icon.png";
import discord from "../img/social/discord.png";
import github from "../img/social/github.png";
import gmail from "../img/social/gmail.png";
import linkedin from "../img/social/linkedin.png";

export default function Header() {
  const { t } = useTranslation();

  const sociais = [
    { src: discord, alt: "Discord", link: t("socials.discord") },
    { src: github, alt: "GitHub", link: t("socials.github") },
    { src: gmail, alt: "Gmail", link: t("socials.gmail") },
    { src: linkedin, alt: "LinkedIn", link: t("socials.linkedin") },
  ];

  return (
    <div>
      <section className="flex flex-col items-center md:flex-row md:items-start md:justify-between ">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src={icon}
            alt="icon-andreo"
            className="w-32 h-32 md:w-64 md:h-64 object-cover clip-icon hidden md:block" // Foto oculta em telas pequenas
          />
        </div>
        <div className="text-white flex-shrink-0 w-full md:w-[500px] text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-4xl">{t("Info.name")}</h1>
          <p className="font-bold text-lg md:text-xl">{t("Info.dev")}</p>
          <p>{t("Info.ativo")}</p>
          <hr className="mt-2 mb-4 border-white w-full" />
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 overflow-x-auto mb-4">
            {sociais.map((tech, index) => (
              <a
                key={index}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-10 h-10 md:w-12 md:h-12 object-cover"
                />
              </a>
            ))}
          </div>
          <nav className="bg-opacity-30 rounded-lg p-4">
  <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 justify-center md:justify-start">
    <li>
      <a href="/" className="hover:underline">
        Sobre
      </a>
    </li>
    <li>
      <a href="/projetos" className="hover:underline">
        Projetos
      </a>
    </li>
    <li>
      <a href="/contato" className="hover:underline">
        Contato
      </a>
    </li>
  </ul>
</nav>

        </div>
      </section>
    </div>
  );
}
