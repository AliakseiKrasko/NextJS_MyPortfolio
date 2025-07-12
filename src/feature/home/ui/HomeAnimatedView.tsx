import Image from 'next/image';
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import {HomeAnimatedViewProps} from "@/feature/home/type/type";


export default function HomeAnimatedView({
                                             lang,
                                             show,
                                             typewriterWords,
                                             description,
                                             common,
                                         }: HomeAnimatedViewProps) {
    return (
        <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16 pt-8 max-w-5xl mx-auto">

                <div className={`bg-white/5 border border-violet-600 rounded-2xl p-4 shadow-lg flex-grow-0 flex-shrink-0 basis-full md:basis-1/3 w-full md:w-1/3 home-border
            transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <Image
                        src="/my-photo2.jpg"
                        alt="Aliaksei Krasko"
                        width={580}
                        height={600}
                        className="rounded-2xl object-cover w-[580px] h-[600px]"
                    />
                </div>

                <div className={`w-full md:w-2/3 flex flex-col transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h1 className="text-violet-600 text-5xl font-extrabold mb-6 home-text">
                        Krasko Aliaksei
                    </h1>
                    <h1 className="text-4xl font-bold mb-6 text-gray-600 cv-text">
                        <Typewriter
                            words={typewriterWords}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>
                    <p className="text-violet-600 cv-text text-lg mb-8">{description}</p>
                    <div className="flex gap-6 mb-4">

                        <Link
                            href={`/${lang}/contact`}
                            className="bg-[#b9ff39] text-black px-6 py-3 rounded-md font-bold flex items-center gap-2 shadow transition hover:bg-[#a2cb60]"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <path d="M3 7l9 6 9-6" />
                            </svg>
                            Send message
                        </Link>
                        <a
                            href="/Alex%20Krasko%20(1).pdf"
                            download
                            className="border-2 border-[#b9ff39] text-[#b9ff39] px-6 py-3 rounded-md font-bold flex items-center gap-2 transition hover:bg-[#b9ff39] hover:text-black"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v12" />
                                <path d="M6 13l6 6 6-6" />
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
