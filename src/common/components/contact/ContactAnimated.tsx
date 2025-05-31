"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "@/app/[lang]/contact/ContactForm";


type Props = {
    dict: any;
};

const ContactAnimated: React.FC<Props> = ({ dict }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className={`container mx-auto px-4 py-8 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <main className="max-w-2xl mx-auto">
                <h1 className={`text-3xl font-bold mb-6 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    {dict.title}
                </h1>
                <div className="bg-gray-400 dark:bg-gray-800 rounded-lg shadow-md p-6 text-black dark:text-white transition-all duration-700">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{dict.contactInfo.title}</h2>
                        <p className="mb-1">
                            <span className="font-medium">{dict.contactInfo.email.label}</span> {dict.contactInfo.email.value}
                        </p>
                        <p className="mb-1">
                            <span className="font-medium">{dict.contactInfo.phone.label}</span> {dict.contactInfo.phone.value}
                        </p>
                        <p>
                            <span className="font-medium">{dict.contactInfo.location.label}</span> {dict.contactInfo.location.value}
                        </p>
                    </div>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">{dict.messageForm.title}</h2>
                        <ContactForm dict={dict} />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{dict.socialMedia.title}</h2>
                        <div className="flex gap-4">
                            {dict.socialMedia.links.map((link: { name: string; url: string }, index: number) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    className="text-white  hover:underline hover:text-[#b9ff39]"
                                    target={link.url.startsWith('http') ? "_blank" : undefined}
                                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactAnimated;