"use client";

import React, { useEffect, useState } from 'react';
import {
    SiAntdesign, SiCss3, SiCypress, SiDocker, SiEslint, SiFigma, SiGit, SiGithubactions, SiGitlab,
    SiGraphql, SiHtml5, SiJavascript, SiJenkins, SiJest, SiJirasoftware, SiKubernetes, SiNetlify,
    SiNextdotjs, SiNotion, SiNpm, SiPnpm, SiPrettier, SiRadixui, SiReact, SiReacthookform, SiRedux,
    SiSass, SiStorybook, SiStyledcomponents, SiTailwindcss, SiTestinglibrary, SiTrello, SiTypescript,
    SiVercel, SiVite, SiWebpack, SiYarn, SiZod,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BsCodeSlash } from 'react-icons/bs';
import { GrTest } from 'react-icons/gr';
import { FaCode } from 'react-icons/fa';
import { MdAccessibility } from 'react-icons/md';
import { AiOutlineTeam } from 'react-icons/ai';
import { FaWpforms } from "react-icons/fa6";
import {Skill} from "@/feature/skills/type/type";
import SkillCard from "@/feature/skills/ui/SkillCard";


export default function SkillsPage() {
    const skills: Skill[] = [
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={40} /> },
        {name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" size={40}/>},
        {name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={40}/>},
        {name: "React", icon: <SiReact className="text-blue-400" size={40}/>},
        {name: "Next.js", icon: <SiNextdotjs size={40}/>},
        { name: "React Native", icon: <SiReact className="text-blue-500" size={40} /> },
        {name: "Redux Toolkit", icon: <SiRedux className="text-purple-600" size={40}/>},
        {name: "RTK Query", icon: <SiRedux className="text-purple-400" size={40}/>},
        {name: "CSS3", icon: <SiCss3 className="text-blue-500" size={40}/>},
        {name: "SCSS/SASS", icon: <SiSass className="text-pink-500" size={40}/>},
        {name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" size={40}/>},
        {name: "Styled-components", icon: <SiStyledcomponents className="text-pink-500" size={40}/>},
        {name: "Git", icon: <SiGit className="text-orange-600" size={40}/>},
        {name: "Webpack", icon: <SiWebpack className="text-blue-500" size={40}/>},
        {name: "Vite", icon: <SiVite className="text-purple-500" size={40}/>},
        {name: "ESLint", icon: <SiEslint className="text-purple-600" size={40}/>},
        {name: "Prettier", icon: <SiPrettier className="text-pink-500" size={40}/>},
        {name: "Storybook", icon: <SiStorybook className="text-red-500" size={40}/>},
        {name: "Jest", icon: <SiJest className="text-red-600" size={40}/>},
        {name: "React Testing Library", icon: <SiTestinglibrary className="text-red-500" size={40}/>},
        {name: "Cypress", icon: <SiCypress size={40}/>},
        {name: "REST", icon: <TbApi className="text-green-600" size={40}/>},
        {name: "GraphQL", icon: <SiGraphql className="text-pink-600" size={40}/>},
        {name: "WebSockets", icon: <BsCodeSlash className="text-blue-500" size={40}/>},
        {name: "Docker (basic skills)", icon: <SiDocker className="text-blue-500" size={40}/>},
        {name: "GitHub Actions", icon: <SiGithubactions size={40}/>},
        {name: "CI/CD", icon: <GrTest size={40}/>},
        {name: "Pixel Perfect", icon: <FaCode className="text-purple-600" size={40}/>},
        {name: "Responsive & accessible layout (a11y)", icon: <MdAccessibility className="text-green-600" size={40}/>},
        {name: "Code Review", icon: <BsCodeSlash size={40}/>},
        {name: "Agile/Scrum", icon: <AiOutlineTeam className="text-blue-500" size={40}/>},
        {name: "Jenkins", icon: <SiJenkins className="text-red-700" size={40}/>},
        { name: "Figma", icon: <SiFigma className="text-pink-600" size={40}/> },
        { name: "NPM", icon: <SiNpm className="text-red-600" size={40}/> },
        { name: "Yarn", icon: <SiYarn className="text-blue-400" size={40}/> },
        { name: "PNPM", icon: <SiPnpm className="text-yellow-500" size={40}/> },
        { name: "Notion", icon: <SiNotion className="text-black dark:text-white" size={40}/> },
        { name: "Trello", icon: <SiTrello className="text-blue-500" size={40}/> },
        { name: "Jira", icon: <SiJirasoftware className="text-blue-700" size={40}/> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" size={40}/> },
        { name: "Netlify", icon: <SiNetlify className="text-green-500" size={40}/> },
        { name: "Kubernetes (basic skills)", icon: <SiKubernetes className="text-blue-500" size={40}/> },
        { name: "Zod", icon: <SiZod className="text-blue-500" size={40}/> },
        { name: "Formik", icon: <FaWpforms className="text-blue-500 dark:text-white" size={40} /> },
        { name: "React Hook Form", icon: <SiReacthookform className="text-pink-500 dark:text-white" size={40} /> },
        { name: "Radix UI", icon: <SiRadixui className="text-blue-600 dark:text-white" size={40} /> },
        { name: "Ant Design", icon: <SiAntdesign className="text-blue-500" size={40} /> },
        { name: "GitLab CI/CD", icon: <SiGitlab className="text-orange-500" size={40} /> },
    ];

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-[#3B3B3B] cv-text">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        show={show}
                        delay={index * 60}
                    />
                ))}
            </div>
        </div>
    );
}