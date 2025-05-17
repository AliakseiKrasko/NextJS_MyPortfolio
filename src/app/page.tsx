'use client';

import Image from "next/image";
import { Header } from "@/common/components/header/Header";
import { Typewriter } from "@/common/components/typewriter/Typewriter";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full h-[80px] bg-gray-100 z-50 flex items-center justify-center">
                <div className="w-[80vw] mx-auto">
                    <Header />
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 pt-[80px] pb-[60px] bg-blue-500 flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-white text-3xl font-bold text-center sm:text-left">
                    <Typewriter text={"Hello, this is my project! 👍👌\nAlex Krasko"} speed={80} />
                </div>
                <div>
                    <Image
                        src="/my-photo.png"
                        alt="my-photo"
                        width={400}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 w-full h-[60px] bg-gray-100 z-50 flex gap-6 items-center justify-center flex-wrap">
                <a className="flex items-center gap-2 hover:underline" href="https://nextjs.org/learn" target="_blank">
                    <Image src="/file.svg" alt="File icon" width={16} height={16} />
                    Learn
                </a>
                <a className="flex items-center gap-2 hover:underline" href="https://vercel.com/templates?framework=next.js" target="_blank">
                    <Image src="/window.svg" alt="Window icon" width={16} height={16} />
                    Examples
                </a>
                <a className="flex items-center gap-2 hover:underline" href="https://nextjs.org" target="_blank">
                    <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}