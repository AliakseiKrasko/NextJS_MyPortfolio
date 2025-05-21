import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
    lang: Locale;
    dictionary: {
        header: {
            home: string;
            contact: string;
            cv: string;
        };
        general: {
            projectName: string;
        };
    };
};

export const Header = ({ lang, dictionary }: Props) => {
    return (
        <header className="flex items-center justify-between px-4 py-2 w-full">
            <Link href={`/${lang}`} className="text-xl font-bold">
                {dictionary.general.projectName}
            </Link>
            <nav className="flex items-center gap-4">
                <Link href={`/${lang}/contact`} className="flex items-center">
                    {dictionary.header.contact}
                </Link>
                <Link href={`/${lang}/cv`} className="flex items-center">
                    {dictionary.header.cv}
                </Link>
                <LanguageSwitcher currentLang={lang} />
            </nav>
        </header>
    );
};