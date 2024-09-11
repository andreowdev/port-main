import express from "../img/tecnologis/express.png";
import git from "../img/tecnologis/git.png";
import javascript from "../img/tecnologis/javascript.png";
import mysql from "../img/tecnologis/mysql.png";
import react from "../img/tecnologis/react.png";
import tailwind from "../img/tecnologis/tailwind.png";
import typescript from "../img/tecnologis/ts.png";
import vscode from "../img/tecnologis/vscode.png";
import { useTranslation } from "react-i18next";

export default function Stack() {

    const { t } = useTranslation();
    const stacks = [
        { src: express, alt: "Express", link: "https://expressjs.com/" },
        { src: git, alt: "Git", link: "https://git-scm.com/" },
        { src: javascript, alt: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { src: mysql, alt: "MySQL", link: "https://www.mysql.com/" },
        { src: react, alt: "React", link: "https://reactjs.org/" },
        { src: tailwind, alt: "Tailwind CSS", link: "https://tailwindcss.com/" },
        { src: typescript, alt: "TypeScript", link: "https://www.typescriptlang.org/" },
        { src: vscode, alt: "Visual Studio Code", link: "https://code.visualstudio.com/" }
    ];

    return (
        <section className="">
            <div className="overflow-hidden ">
                <div className="flex gap-2 mt-8 animate-marquee ">
                    {stacks.map((tech, index) => (
                        <a
                            key={index}
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-12 h-12 md:w-8 md:h-8 transition-transform duration-300 hover:scale-110"
                        >
                            <img
                                src={tech.src}
                                alt={tech.alt}
                                className="w-full h-full object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div className="text-white text-center">
                <h1 className="text-2xl font-bold mb-2">{t('stack.title')}</h1>
                <hr className="border-gray-600 mb-2" />
                <p>{t('stack.subtitle')}</p>
            </div>
        </section>
    );
}
