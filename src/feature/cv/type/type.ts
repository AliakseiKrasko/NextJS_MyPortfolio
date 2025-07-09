export type SmExperienceItem = {
    title: string;
    description: string;
    details?: string[];
};

export type SmEducationItem = {
    course: string;
    organization: string;
    period: string;
};

export type SmLanguageItem = {
    language: string;
    level: string;
};

export type SmDict = {
    title: string;
    experience?: {
        title: string;
        items: SmExperienceItem[];
    };
    keyResponsibilities?: {
        title: string;
        items: string[];
    };
    education?: {
        title: string;
        items: SmEducationItem[];
    };
    languages?: {
        title: string;
        items: SmLanguageItem[];
    };
};
