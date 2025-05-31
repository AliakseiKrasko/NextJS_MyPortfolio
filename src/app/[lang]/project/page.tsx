import React from 'react';
import Image from 'next/image';
import { getTranslations, Locale } from "../../../../i18n-config";
import FadeIn from './FadeIn';

type Project = {
    title: string;
    description: string;
    link: string;
    image: string;
};

export default async function ProjectPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'project');
    const projects: Project[] = dict.projects;

    return (
        <main className="min-h-screen py-10 text-white font-montserrat">
            <h1 className="text-center text-3xl md:text-4xl text-lime-400 mb-10 font-bold">
                {dict.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {projects.map((proj, i) => (
                    <FadeIn key={proj.title} delay={i * 120}>
                        <div
                            className="bg-[#99a1af] rounded-2xl border-2 border-[#393e28] shadow-[0_0_10px_#191919,0_0_0_2px_#c4ff00_inset] transition-shadow duration-300 flex flex-col p-8 hover:shadow-[0_0_20px_#c4ff00,0_0_0_2px_#c4ff00_inset] card"
                        >
                            <div className="mb-6 rounded-xl overflow-hidden">
                                <Image
                                    src={proj.image}
                                    alt={proj.title}
                                    width={400}
                                    height={200}
                                    className="rounded-xl w-full object-cover"
                                />
                            </div>
                            <div>
                                <h2 className="text-lime-400 text-2xl font-semibold mb-3">{proj.title}</h2>
                                <p className="mb-4 text-base">{proj.description}</p>
                                <a
                                    href={proj.link}
                                    className="text-lime-400 underline font-semibold text-base hover:text-white focus:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {dict.viewProject}
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
            <div className="flex justify-center mt-16">
                <FadeIn delay={projects.length * 120 + 250}>
                    <a
                        href="https://github.com/AliakseiKrasko?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-8 py-3 bg-lime-400 text-[#191919] font-bold rounded-full shadow-lg overflow-hidden group transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                        <span className="relative z-10">{dict.viewAllProjects}</span>
                        <span className="absolute inset-0 w-full h-full bg-lime-500 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></span>
                    </a>
                </FadeIn>
            </div>
        </main>
    );
}