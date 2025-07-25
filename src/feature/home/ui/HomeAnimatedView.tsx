import Image from 'next/image';
import {Typewriter} from "react-simple-typewriter";
import Link from "next/link";
import {HomeAnimatedViewProps} from "@/feature/home/type/type";


export default function HomeAnimatedView({
                                             lang,
                                             show,
                                             typewriterWords,
                                             description,
                                         }: HomeAnimatedViewProps) {
    return (
        <div className={`relative overflow-hidden transition-all duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 max-w-5xl mx-auto px-4">
                <div
                    className={`bg-white/5 border border-violet-600 rounded-2xl p-4 shadow-lg w-full max-w-[380px] md:max-w-[460px] mx-auto transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <Image
                        src="/my-photo2.jpg"
                        alt="Aliaksei Krasko"
                        width={580}
                        height={600}
                        className="rounded-2xl object-cover object-top"
                    />
                </div>
                <div
                    className={`w-full md:w-2/3 flex flex-col px-4 md:px-8 transition-all duration-700 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <h1 className="text-violet-600 text-4xl md:text-5xl font-extrabold mb-6 home-text">
                        Krasko Aliaksei
                    </h1>
                    <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-600 cv-text">
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
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 pb-6">
                        <Link
                            href={`/${lang}/contact`}
                            className="
  bg-gradient-to-r from-[#b9ff39] via-[#7C63C4] to-[#a2cb60]
  border-2 border-[#7C63C4]
  text-black
  px-6 py-3
  rounded-xl
  font-bold
  flex items-center gap-2
  shadow-md
  transition-all duration-300
  hover:from-[#7C63C4] hover:via-[#a2cb60] hover:to-[#b9ff39]
  hover:text-white
  hover:drop-shadow-lg
  hover:shadow-2xl
  hover:scale-105
  will-change-transform
  active:scale-95
  bg-[length:200%_200%]
  hover:bg-right-bottom
"



                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 strokeWidth="2">
                                <rect x="3" y="5" width="18" height="14" rx="2"/>
                                <path d="M3 7l9 6 9-6"/>
                            </svg>
                            Send message
                        </Link>
                        <a
                            href="/CV.pdf"
                            download
                            className="
  bg-gradient-to-r from-[#fde6f7] via-[#B7BFFE] to-[#e5e4fa]
  border-2 border-[#7C63C4]
  text-[#7C63C4]
  px-6 py-3
  rounded-xl
  font-bold
  flex items-center gap-2
  shadow-md
  transition-all duration-300
  hover:from-[#7C63C4] hover:via-[#fde6f7] hover:to-[#B7BFFE]
  hover:text-white
  hover:drop-shadow-lg
  hover:shadow-2xl
  hover:scale-105
  will-change-transform
  active:scale-95
  bg-[length:200%_200%]
  hover:bg-right-bottom
">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 strokeWidth="2">
                                <path d="M12 5v12"/>
                                <path d="M6 13l6 6 6-6"/>
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
