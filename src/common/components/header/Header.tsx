import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {ThemeSwitcher} from "@/common/components/ThemeSwitcher/ThemeSwitcher";

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
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 w-full bg-gray-300">
            <Link href={`/${lang}`} className="text-xl font-bold">
                {dictionary.general.projectName}
            </Link>
            <nav className="flex items-center gap-6 flex-1 justify-center">
                <Link href={`/${lang}`} className="text-xl font-bold">
                    {dictionary.header.home}
                </Link>
                <Link href={`/${lang}/contact`} className="flex items-center">
                    {dictionary.header.contact}
                </Link>
                <Link href={`/${lang}/cv`} className="flex items-center mr-4">
                    {dictionary.header.cv}
                </Link>
                <Link href={`/${lang}/skills`} className="flex items-center mr-4">
                    {dictionary.header.skills ? dictionary.header.skills[0] : "Skills"}
                </Link>
            </nav>
            <ThemeSwitcher dict={dictionary.themeSwitcher} />
            <LanguageSwitcher currentLang={lang} />
        </header>
    );
};