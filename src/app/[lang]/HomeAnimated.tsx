"use client";

import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

type Props = {
    lang: 'ru' | 'en';
    common: any;
};

export default function HomeAnimated({ lang, common }: Props) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const typewriterText = {
        ru: ['Привет, я Алексей!'],
        en: ['Welcome, I am Aliaksei!']
    };

    const descriptionText = {
        ru: 'Я создаю отзывчивые веб-сайты и интерактивные веб-приложения, где технологии встречаются с творчеством..',
        en: 'I\'m builds responsive websites and interactive web applications where technology meets creativity.'
    };

    return (
        <div className={`min-h-screen relative overflow-hidden -z-50 transition-all duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-8 max-w-5xl mx-auto">
                {/* Фото */}
                <div className={`bg-white/5 border border-[#b9ff39] rounded-2xl p-4 shadow-lg flex-grow-0 flex-shrink-0 basis-full md:basis-1/3 w-full md:w-1/3
            transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <Image
                        src="/my_photo.jpg"
                        alt="Aliaksei Krasko"
                        width={580}
                        height={600}
                        className="rounded-2xl object-cover w-[580px] h-[600px]"
                    />
                </div>
                {/* Контент */}
                <div className={`w-full md:w-2/3 flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h1 className="text-[#b9ff39] text-5xl font-extrabold mb-6">
                        Krasko Aliaksei
                    </h1>
                    <h1 className="text-4xl font-bold mb-6 text-white">
                        <Typewriter
                            words={typewriterText[lang]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>
                    <p className="text-gray-200 text-lg mb-8">{descriptionText[lang]}</p>
                    <div className="flex gap-6 mb-4">
                        <button
                            className="bg-[#b9ff39] text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow hover:bg-[#d3ff80] transition">
                            <svg width="24" height="24" fill="none">
                                <path
                                    d="M2 12l1.41-1.41a2 2 0 012.83 0l6.3 6.3a2 2 0 002.83 0l6.3-6.3a2 2 0 012.83 0L22 12"
                                    stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Send message
                        </button>
                        <button
                            className="border-2 border-[#b9ff39] text-[#b9ff39] px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#b9ff39] hover:text-black transition">
                            <svg width="22" height="22" fill="none">
                                <path d="M12 16v-8m0 8l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}