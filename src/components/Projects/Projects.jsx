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
import data from "../pt.json"

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
      title: data.Projects.Project1.title,
      description: data.Projects.Project1.description,
      repoLink: data.Projects.Project1.repoLink,
      siteLink: data.Projects.Project1.siteLink,
      imageLink: data.Projects.Project1.imageLink,
      image: one,
    },
    {
      title: data.Projects.Project2.title,
      description: data.Projects.Project2.description,
      repoLink: data.Projects.Project2.repoLink,
      siteLink: data.Projects.Project2.siteLink,
      imageLink: data.Projects.Project2.imageLink,
      image: two,
    },
    {
      title: data.Projects.Project3.title,
      description: data.Projects.Project3.description,
      repoLink: data.Projects.Project3.repoLink,
      siteLink: data.Projects.Project3.siteLink,
      imageLink: data.Projects.Project3.imageLink,
      image: three,
    },
    {
      title: data.Projects.Project4.title,
      description: data.Projects.Project4.description,
      repoLink: data.Projects.Project4.repoLink,
      siteLink: data.Projects.Project4.siteLink,
      imageLink: data.Projects.Project4.imageLink,
      image: four,
    },
    {
      title: data.Projects.Project5.title,
      description: data.Projects.Project5.description,
      repoLink: data.Projects.Project5.repoLink,
      siteLink: data.Projects.Project5.siteLink,
      imageLink: data.Projects.Project5.imageLink,
      image: five,
    },
    {
      title: data.Projects.Project6.title,
      description: data.Projects.Project6.description,
      repoLink: data.Projects.Project6.repoLink,
      siteLink: data.Projects.Project6.siteLink,
      imageLink: data.Projects.Project6.imageLink,
      image: six,
    },
    {
      title: data.Projects.Project7.title,
      description: data.Projects.Project7.description,
      repoLink: data.Projects.Project7.repoLink,
      siteLink: data.Projects.Project7.siteLink,
      imageLink: data.Projects.Project7.imageLink,
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
