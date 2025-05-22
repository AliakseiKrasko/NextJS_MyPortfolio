import { Header } from '@/common/components/header/Header';
import { Locale, getTranslations } from '../../../i18n-config';
import {Footer} from "@/common/components/footer/Footer";

export default async function Layout({
                                         children,
                                         params: { lang },
                                     }: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dictionary = await getTranslations(lang, 'common');
    // временно добавьте лог
    console.log('DICTIONARY:', dictionary);

    return (
        <div className="min-h-screen flex flex-col">
            <Header lang={lang} dictionary={dictionary} />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}