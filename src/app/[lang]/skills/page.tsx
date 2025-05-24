import React from 'react';
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiRedux, SiCss3, SiSass, SiTailwindcss, SiStyledcomponents,
    SiGit, SiWebpack, SiVite, SiEslint, SiPrettier, SiStorybook,
    SiJest, SiTestinglibrary, SiCypress, SiGraphql, SiDocker,
    SiGithubactions,
} from 'react-icons/si';
import {TbApi} from 'react-icons/tb';
import {BsCodeSlash} from 'react-icons/bs';
import {GrTest} from 'react-icons/gr';
import {FaCode, FaMobileAlt} from 'react-icons/fa';
import {MdAccessibility} from 'react-icons/md';
import {AiOutlineTeam} from 'react-icons/ai';

export default function SkillsPage() {
    const skills = [
        {name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" size={40}/>},
        {name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={40}/>},
        {name: "React", icon: <SiReact className="text-blue-400" size={40}/>},
        {name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={40}/>},
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
        {name: "Cypress", icon: <SiCypress className="text-gray-700" size={40}/>},
        {name: "REST", icon: <TbApi className="text-green-600" size={40}/>},
        {name: "GraphQL", icon: <SiGraphql className="text-pink-600" size={40}/>},
        {name: "WebSockets", icon: <BsCodeSlash className="text-blue-500" size={40}/>},
        {name: "Docker (basic skills)", icon: <SiDocker className="text-blue-500" size={40}/>},
        {name: "GitHub Actions", icon: <SiGithubactions className="text-gray-700" size={40}/>},
        {name: "CI/CD", icon: <GrTest className="text-gray-700" size={40}/>},
        {name: "Pixel Perfect", icon: <FaCode className="text-purple-600" size={40}/>},
        {name: "Responsive & accessible layout (a11y)", icon: <MdAccessibility className="text-green-600" size={40}/>},
        {name: "Code Review", icon: <BsCodeSlash className="text-gray-700" size={40}/>},
        {name: "Agile/Scrum", icon: <AiOutlineTeam className="text-blue-500" size={40}/>},
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Skills</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="mb-3 transition-transform duration-300 hover:scale-110">{skill.icon}</div>
                        <h3 className="text-center font-medium">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}