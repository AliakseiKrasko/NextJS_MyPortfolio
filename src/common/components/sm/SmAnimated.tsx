"use client";

import React, { useEffect, useState } from "react";

type SmExperienceItem = {
    title: string;
    description: string;
    details?: string[];
};

type SmEducationItem = {
    course: string;
    organization: string;
    period: string;
};

type Props = {
    dict: {
        title: string;
        experience?: {
            title: string;
            items: SmExperienceItem[];
        };
        education?: {
            title: string;
            items: SmEducationItem[];
        };
    };
};

export const SmAnimated: React.FC<Props> = ({ dict }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <main className="max-w-4xl mx-auto">
                <h1 className={`text-3xl font-bold mb-6 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}>
                    {dict.title}
                </h1>

                {dict.experience && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{dict.experience.title}</h2>
                        <div className="border-l-2 border-gray-400 pl-4 cv-text">
                            {dict.experience.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`mb-6 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                                >
                                    <h3 className="text-xl font-medium">{item.title}</h3>
                                    <p className="mt-2">{item.description}</p>
                                    {item.details && item.details.length > 0 && (
                                        <ul className="list-disc ml-6 mt-2 cv-text text-sm">
                                            {item.details.map((detail, i) => (
                                                <li key={i}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {dict.education && (
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">{dict.education.title}</h2>
                        <div className="border-l-2 border-gray-300 pl-4">
                            {dict.education.items.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                    style={{ transitionDelay: `${500 + index * 80}ms` }}
                                >
                                    <h3 className="text-xl font-medium">{edu.course}</h3>
                                    <p className="text-gray-600 cv-text">{edu.organization} • {edu.period}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};