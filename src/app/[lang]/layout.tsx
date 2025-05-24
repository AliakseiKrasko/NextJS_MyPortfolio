import { Header } from '@/common/components/header/Header';
import { Locale, getTranslations } from '../../../i18n-config';
import { Footer } from "@/common/components/footer/Footer";

export default async function Layout({
                                         children,
                                         params: { lang },
                                     }: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dictionary = {
        ...await getTranslations(lang, 'common'),
        ...await getTranslations(lang, 'cv'),
        // ...await getTranslations(lang, 'cv'), // если нужно
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header lang={lang} dictionary={dictionary} />
            <main className="flex-1 mt-16">{children}</main>
            <Footer />
        </div>
    );
}