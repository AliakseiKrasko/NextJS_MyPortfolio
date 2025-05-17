'use client';

import Image from "next/image";
import { Header } from "@/common/components/header/Header";
import { Typewriter } from "@/common/components/typewriter/Typewriter";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
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
        </div>
    );
}