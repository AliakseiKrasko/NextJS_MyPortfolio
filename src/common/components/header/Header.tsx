"use client";

import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {ThemeSwitcher} from "@/common/components/ThemeSwitcher/ThemeSwitcher";
import {usePathname} from "next/navigation";

type Props = {
    lang: Locale;
    dictionary: {
        header: {
            home: string;
            contact: string;
            cv: string;
            skills: ["Навыки", "Skills"];
        };
        general: {
            projectName: string;
        };
        themeSwitcher: { light: string; dark: string; }
    };
};

export const Header = ({ lang, dictionary }: Props) => {
    const pathname = usePathname();

    // Список пунктов меню и их пути
    const navLinks = [
        { href: `/${lang}`, label: dictionary.header.home },
        { href: `/${lang}/contact`, label: dictionary.header.contact },
        { href: `/${lang}/cv`, label: dictionary.header.cv },
        { href: `/${lang}/skills`, label: dictionary.header.skills ? dictionary.header.skills[0] : "Skills" },
    ];

    return (
        <header
            style={{ background: "var(--header-bg)" }}
            className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 w-full transition-colors duration-300"
        >
            <Link href={`/${lang}`} className="text-xl font-bold">
                {dictionary.general.projectName}
            </Link>
            <nav className="flex items-center gap-6 flex-1 justify-center">
                {navLinks.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`flex items-center mr-4 ${pathname === link.href ? "font-bold" : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <ThemeSwitcher dict={dictionary.themeSwitcher} />
            <LanguageSwitcher currentLang={lang} />
        </header>
    );
};