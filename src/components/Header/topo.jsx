import React from 'react';
import data from "../pt.json";
import icon from "../img/icon.png";
import discord from "../img/social/discord.png";
import github from "../img/social/github.png";
import gmail from "../img/social/gmail.png";
import linkedin from "../img/social/linkedin.png";

export default function Header() {
    const sociais = [
        { src: discord, alt: "Discord", link: data.Socials.Discord },
        { src: github, alt: "GitHub", link: data.Socials.Github },
        { src: gmail, alt: "Gmail", link: data.Socials.Gmail },
        { src: linkedin, alt: "LinkedIn", link: data.Socials.Gmail },
    ];

    return (
        <div>
            <section className="flex items-center rounded-md  bg-opacity-custom ">
                <div className="flex-shrink-0 ">
                    <img
                        src={icon}
                        alt="icon-andreo"
                        className="w-64 h-64 object-cover rounded-s-md clip-icon"
                    />
                </div>
                <div className="ml-6 text-left flex-1 text-white">
                    <h1 className="font-bold text-4xl">{data.Info.name}</h1>
                    <p className="ml-1 font-bold text-xl">{data.Info.dev}</p>
                    <p className="mr-10 text-center">{data.Info.ativo}</p>
                    <hr className='mt-2 mb-4 border-white w-11/12' />
                    <div className="flex justify-center space-x-4 flex-wrap">
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
                                    className="w-12 h-12 object-contain"
                                />
                            </a>
                        ))}
                    </div>
                    <nav className="mt-4 w-2/5 p-1 bg-opacity-30 rounded-lg ">
                        <ul className="flex space-x-6 justify-center">
                            <li><a href="/" className=" hover:underline">Sobre</a></li>
                            <li><a href="/projetos" className="hover:underline">Projetos</a></li>
                            <li><a href="/contato" className="hover:underline">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>
    );
}
