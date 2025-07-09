import { Project } from "@/feature/project/type/type";
import ProjectCard from "./ProjectCard";

type Props = {
    projects: Project[];
    viewProject: string;
};

export default function ProjectGrid({ projects, viewProject }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((proj, i) => (
                <ProjectCard
                    key={proj.title}
                    project={proj}
                    viewProject={viewProject}
                    delay={i * 200}
                />
            ))}
        </div>
    );
}
