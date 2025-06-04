"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
    title: string;
    paragraphs: string[];
    photoAlt: string;
};

export const AboutAnimated: FC<Props> = ({ title, paragraphs, photoAlt }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-5 px-4 md:px-8 cv-text">
            <h1
                className={`text-4xl md:text-6xl font-bold mb-16 tracking-[0.5em] text-[#3B3B3B] home-text
          ${loaded ? "opacity-100" : "opacity-0"}
          transition-opacity duration-1000 drop-shadow-[0_0_10px_rgba(163,230,53,0.5)] text-center`}
            >
                {title}
            </h1>
            <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white to-transparent mb-16"></div>
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12 md:gap-16">
                <div className="flex-1 space-y-8">
                    {paragraphs.map((text, idx) => (
                        <p
                            key={idx}
                            className={`text-lg md:text-xl ${
                                loaded
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                            } transition-all duration-700`}
                            style={{ transitionDelay: `${300 + idx * 200}ms` }}
                        >
                            {text}
                        </p>
                    ))}
                </div>
                <div
                    className={`flex-shrink-0 w-full md:w-auto max-w-sm mx-auto md:mx-0 ${
                        loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    } transition-all duration-1000 delay-300`}
                >
                    <div className="rounded-3xl overflow-hidden border-2 border-lime-400/30 w-[400px] h-[500px]">
                        <Image
                            src="/my-photo2.jpg"
                            alt={photoAlt}
                            width={400}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};