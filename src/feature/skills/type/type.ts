import { ReactNode } from "react";

export type Skill = {
    name: string;
    icon: ReactNode;
};

export type SkillCardProps = {
    skill: Skill;
    show: boolean;
    delay: number;
};