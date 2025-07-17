import { Locale, getTranslations } from '../../../../i18n-config';
import FadeIn from '../../../feature/project/ui/FadeIn';
import ProjectGrid from '../../../feature/project/ui/ProjectGrid';
import { Project, ProjectDict } from "@/feature/project/type/type";

export default async function ProjectPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict: ProjectDict = await getTranslations(lang, 'project');
    const projects: Project[] = dict.projects;

    return (
        <main className="min-h-screen py-10 px-5 text-white font-montserrat">
            <FadeIn delay={100}>
                <h1 className="text-center text-3xl md:text-4xl text-[#3B3B3B] mb-10 font-bold home-text">
                    {dict.title}
                </h1>
            </FadeIn>
            <ProjectGrid projects={projects} viewProject={dict.viewProject} />
            <div className="flex justify-center mt-16">
                <FadeIn delay={projects.length * 120 + 250}>
                    <a
                        href="https://github.com/AliakseiKrasko?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-8 py-3 bg-gray-400 text-[#191919] font-bold rounded-full shadow-lg overflow-hidden group transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
                    >
                        <span className="relative z-10">{dict.viewAllProjects}</span>
                        <span className="absolute inset-0 w-full h-full bg-lime-500 opacity-0 rounded-full group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></span>
                    </a>
                </FadeIn>
            </div>
        </main>
    );
}

