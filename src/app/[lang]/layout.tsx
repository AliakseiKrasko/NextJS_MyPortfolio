import { Header } from '@/common/components/header/Header';
import { Footer } from '@/common/components/footer/Footer';
import {getTranslations} from "../../../i18n-config";

interface LayoutProps {
    children: React.ReactNode;
    params: { lang: 'ru' | 'en' };
}

export default async function Layout({ children, params }: LayoutProps) {
    const dictionary = {
        ...await getTranslations(params.lang, 'common'),
        ...await getTranslations(params.lang, 'cv'),
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header lang={params.lang} dictionary={dictionary} />
            <main className="flex-1 mt-16">{children}</main>
            <Footer />
        </div>
    );
}