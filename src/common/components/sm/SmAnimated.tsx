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

type SmLanguageItem = {
    language: string;
    level: string;
};

type Props = {
    dict: {
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
};

export const SmAnimated: React.FC<Props> = ({ dict }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="container mx-auto px-4 pb-15 py-8 text-xl">
            {/* Увеличиваем максимальную ширину: max-w-7xl */}
            <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Левый столбец — 1/3 */}
                <div className="md:col-span-1">
                    {dict.experience && (
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">{dict.experience.title}</h2>
                            <div className="border-l-2 border-gray-300 pl-4 home-text">
                                {dict.experience.items.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`mb-6 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                        style={{ transitionDelay: `${200 + index * 80}ms` }}
                                    >
                                        <h3 className="home-text text-xl font-medium">{item.title}</h3>
                                        <p className="mt-2 text-gray-600 home-text">{item.description}</p>
                                        {item.details && item.details.length > 0 && (
                                            <ul className="list-disc ml-6 mt-2 cv-text text-base text-gray-600">
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
                </div>

                {/* Правый столбец — 2/3 */}
                <div className="md:col-span-2">
                    {/* Ключевые обязанности с анимацией и линией слева */}
                    {dict.keyResponsibilities && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold mb-4">{dict.keyResponsibilities.title}</h2>
                            <div className="border-l-2 border-gray-300 pl-4">
                                <ul>
                                    {dict.keyResponsibilities.items.map((line, idx) => (
                                        <li
                                            key={idx}
                                            className={`mb-1 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} cv-text text-base text-gray-700`}
                                            style={{ transitionDelay: `${300 + idx * 40}ms` }}
                                        >
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}

                    {dict.education && (
                        <section className="mb-12">
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

                    {dict.languages && (
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">{dict.languages.title}</h2>
                            <div className="border-l-2 border-gray-300 pl-4">
                                <ul>
                                    {dict.languages.items.map((lang, index) => (
                                        <li
                                            key={lang.language}
                                            className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                                            style={{ transitionDelay: `${800 + index * 80}ms` }}>
                                            <span className="font-medium text-gray-600 cv-text">{lang.language}:</span> {lang.level}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
};