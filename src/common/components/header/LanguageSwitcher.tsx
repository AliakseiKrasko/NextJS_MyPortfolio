'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale, locales } from '../../../../i18n-config';

type Props = {
    currentLang: Locale;
};

export const LanguageSwitcher = ({ currentLang }: Props) => {
    const pathname = usePathname();

    // Получаем путь без языкового префикса
    const pathnameWithoutLang = pathname.replace(`/${currentLang}`, '') || '/';

    return (
        <div className="flex items-center gap-2 ml-4">
            {locales.map((locale) => (
                <Link
                    key={locale}
                    href={`/${locale}${pathnameWithoutLang}`}
                    className={`px-2 py-1 rounded text-sm ${
                        currentLang === locale
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                    {locale === 'ru' ? '🇷🇺' : '🇬🇧'}
                </Link>
            ))}
        </div>
    );
};