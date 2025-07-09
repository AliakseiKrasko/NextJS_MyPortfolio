import Image from 'next/image';
import { Project } from "@/feature/project/type/type";
import FadeIn from './FadeIn';

type Props = {
    project: Project;
    viewProject: string;
    delay?: number;
};

export default function ProjectCard({ project, viewProject, delay = 0 }: Props) {
    return (
        <FadeIn delay={delay}>
            <div className="bg-[#99a1af] rounded-2xl border-2 border-[#393e28] shadow-[0_0_10px_#191919,0_0_0_2px_#c4ff00_inset] transition-shadow duration-300 flex flex-col p-8 hover:shadow-[0_0_20px_#c4ff00,0_0_0_2px_#c4ff00_inset] card h-full">
                <div className="mb-6 rounded-xl overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="rounded-xl w-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-gray-600 text-2xl font-semibold mb-3 home-text">{project.title}</h2>
                    <p className="mb-4 text-base">{project.description}</p>
                    <a
                        href={project.link}
                        className=" underline font-semibold hover:text-lime-400 focus:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {viewProject}
                    </a>
                </div>
            </div>
        </FadeIn>
    );
}
