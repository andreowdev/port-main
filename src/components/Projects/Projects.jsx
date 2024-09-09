import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import one from "../img/projetos/p1.png";
import "./project.css";
import two from "../img/projetos/p2.png";
import three from "../img/projetos/p3.png";
import four from "../img/projetos/p4.png";
import five from "../img/projetos/p5.png";
import six from "../img/projetos/p6.png";
import seven from "../img/projetos/p7.png";

function ProjectCard({ title, description, repoLink, siteLink, imageLink, image }) {
  const isRepoLinkDisabled = repoLink === "#";
  const isSiteLinkDisabled = siteLink === "#";
  const isImageLinkDisabled = imageLink === "#";

  return (
    <div className="flex flex-col text-white items-center w-full md:w-4/5 mx-auto p-4 bg-opacity-custom rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="relative w-full flex-1 shadow-2xl">
          {!isImageLinkDisabled ? (
            <a href={imageLink} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-2xl"
              />
              <h1 className="absolute inset-0 flex justify-center items-center text-2xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                {title}
              </h1>
            </a>
          ) : (
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-2xl"
              />
              <h1 className="absolute inset-0 flex justify-center items-center text-2xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                {title}
              </h1>
            </div>
          )}
        </div>
        <div className="flex-1">
          <p>{description}</p>
          <div className="flex space-x-4 mt-4">
            {!isRepoLinkDisabled ? (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-600"
              >
                <FaGithub className="mr-2" /> Repositório
              </a>
            ) : (
              <span className="flex items-center text-gray-400 cursor-not-allowed">
                <FaGithub className="mr-2" /> Repositório
              </span>
            )}
            {!isSiteLinkDisabled ? (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-400 hover:text-blue-600"
              >
                <FaExternalLinkAlt className="mr-2" /> Site
              </a>
            ) : (
              <span className="flex items-center text-gray-400 cursor-not-allowed">
                <FaExternalLinkAlt className="mr-2" /> Site
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



export default function Projects() {
  const projects = [
    {
      title: "Meu Portfólio",
      description:
        "Este é um breve comentário sobre o Projeto 1, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/andreowdev/port-main",
      siteLink: "#",
      imageLink: 'https://github.com/andreowdev/port-main',
      image: one,
    },
    {
      title: "L.A Soft Solutions",
      description:
        "Este é um breve comentário sobre o Projeto 2, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/andreowdev/landing-page-hest",
      siteLink: "https://andreowdev.github.io/landing-page-hest/",
      imageLink: 'https://andreowdev.github.io/landing-page-hest/',
      image: two,
    },
    {
      title: "Gerenciamento de Restaurante",
      description:
        "Este é um breve comentário sobre o Projeto 2, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/andreowdev/landing-page-hest",
      siteLink: "#",
      imageLink: 'https://github.com/andreowdev/cadastrodeprodutos',
      image: three,
    },
    {
      title: "To-Do List",
      description:
        "Este é um breve comentário sobre o Projeto 2, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/andreowdev/to-doListt",
      siteLink: "https://andreowdev.github.io/to-doListt/",
      imageLink: 'https://andreowdev.github.io/to-doListt/',
      image: four,
    },
    {
      title: "Site Hortifruti",
      description:
        "Este é um breve comentário sobre o Projeto 2, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/leonfritas/PIM_UNIP",
      siteLink: "#",
      imageLink: 'https://github.com/leonfritas/PIM_UNIP',
      image: five,
    },
    {
      title: "Cadastro de Produtos",
      description:
        "Este é um breve comentário sobre o Projeto 2, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/andreowdev/cadastrodeprodutos",
      siteLink: "#",
      imageLink: 'https://github.com/andreowdev/cadastrodeprodutos',
      image: six,
    },
    {
      title: "Buscador CEP",
      description:
        "Este é um breve comentário sobre o Projeto 2, explicando suas funcionalidades e o que foi desenvolvido.",
      repoLink: "https://github.com/andreowdev/buscador-cep",
      siteLink: "https://github.com/andreowdev/buscador-cep",
      imageLink: 'https://github.com/andreowdev/buscador-cep',
      image: seven,
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          repoLink={project.repoLink}
          siteLink={project.siteLink}
          imageLink={project.imageLink}
          image={project.image}
        />
      ))}
    </div>
  );
}
