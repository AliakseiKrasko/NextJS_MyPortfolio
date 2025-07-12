"use client";

import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "@/common/components/ThemeSwitcher/ThemeSwitcher";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type Props = {
    lang: Locale;
    dictionary: {
        header: {
            home: string;
            contact: string;
            cv: string;
            skills: ["Навыки", "Skills"];
            about: string;
            project: string;
        };
        general: {
            projectName: string;
        };
        themeSwitcher: { light: string; dark: string; }
    };
};

export const Header = ({ lang, dictionary }: Props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    // Список пунктов меню и их пути
    const navLinks = [
        { href: `/${lang}`, label: dictionary.header.home },
        { href: `/${lang}/contact`, label: dictionary.header.contact },
        { href: `/${lang}/cv`, label: dictionary.header.cv },
        { href: `/${lang}/skills`, label: dictionary.header.skills ? dictionary.header.skills[0] : "Skills" },
        { href: `/${lang}/about`, label: dictionary.header.about },
        { href: `/${lang}/project`, label: dictionary.header.project },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 w-full transition-colors duration-300 bg-black/30 backdrop-blur z-60">
            <Link href={`/${lang}`} className="text-xl font-bold">
                {dictionary.general.projectName}
            </Link>

            {/* Кнопка меню (только на мобилках) */}
            <button
                className="lg:hidden ml-auto text-3xl"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open navigation menu"
            >
                {mobileOpen ? <HiX /> : <HiMenu />}
            </button>

            {/* Навигация (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center mr-4 ${pathname === link.href ? "font-bold text-white" : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Theme и Language переключатели */}
            <div className={`items-center gap-2 ${mobileOpen ? "hidden" : "flex"} lg:flex`}>
                <ThemeSwitcher dict={dictionary.themeSwitcher} />
                <LanguageSwitcher currentLang={lang} />
            </div>

            {/* Мобильное меню */}
            {mobileOpen && (
                <nav className="absolute top-full left-0 right-0 flex flex-col items-center gap-4 bg-black/90 py-6 z-50 lg:hidden">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-lg py-2 w-full text-center ${pathname === link.href ? "font-bold text-white" : "text-gray-200"}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex items-center gap-2 mt-4">
                        <ThemeSwitcher dict={dictionary.themeSwitcher} />
                        <LanguageSwitcher currentLang={lang} />
                    </div>
                </nav>
            )}
        </header>
    );
};
