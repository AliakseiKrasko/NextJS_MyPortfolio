'use client';


import Image from "next/image";
import {Header} from "@/common/components/header/Header";
import {Typewriter} from "@/common/components/typewriter/Typewriter";

export default function Home() {
    return (
        <div>
            <header
                className="fixed top-0 w-[80vw] h-[50px] bg-gray-100 flex items-center justify-center flex-wrap left-1/2 -translate-x-1/2">
                <Header/>
            </header>
            <main className="pt-[80px] flex bg-blue-500 items-center sm:items-start">
                <div
                    className="text-white text-3xl font-bold flex items-center justify-center w-full">
                    <Typewriter text={"  Hello, this my project! 👍👌\nAlex Krasko "} speed={80}/>

                </div>
                <div>
                    <Image
                        src="/my-photo.png"
                        alt="my-photo"
                        width={856}
                        height={856}
                        />
                </div>
                </main>
            <footer
                className="fixed bottom-0 w-screen min-h-[50px] bg-gray-100 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
