

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "@/common/components/header/Header";
import { Footer } from "@/common/components/footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "My Portfolio Project",
    description: "Made by Alex Krasko",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* Глобальный Header */}
        <header className="fixed top-0 left-0 w-full h-[80px] bg-gray-100 z-50 flex items-center justify-center">
            <Header />
        </header>

        {/* Основной контент страницы */}
        <main className="flex-1 pt-[80px] pb-[60px] bg-blue-500 flex flex-col sm:flex-row items-center justify-center gap-8">{children}</main>

        {/* Глобальный Footer */}
        <footer className="fixed bottom-0 left-0 w-full h-[60px] bg-gray-100 z-50 flex gap-6 items-center justify-center flex-wrap">
            <Footer />
        </footer>
        </body>
        </html>
    );
}

