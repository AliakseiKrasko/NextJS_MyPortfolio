export type Project = {
    title: string;
    description: string;
    link: string;
    image: string;
};

export type ProjectDict = {
    title: string;
    viewProject: string;
    viewAllProjects: string;
    projects: Project[];
};