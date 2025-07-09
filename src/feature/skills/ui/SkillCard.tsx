import {SkillCardProps} from "@/feature/skills/type/type";


export default function SkillCard({ skill, show, delay }: SkillCardProps) {
    return (
        <div
            className={`
                flex flex-col items-center p-4 bg-gray-300 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg 
                transition-all duration-500 transform hover:-translate-y-1 skill-card
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="mb-3 transition-transform duration-300 hover:scale-110">{skill.icon}</div>
            <h3 className="text-center font-medium">{skill.name}</h3>
        </div>
    );
}
