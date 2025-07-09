import { Locale, getTranslations } from '../../../../i18n-config';
import {AboutAnimated} from "@/feature/about/ui/AboutAnimated";
import {AboutDict} from "@/feature/about/type/type";


export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict: AboutDict = await getTranslations(lang, 'about');
    return {
        title: dict.title,
        description: `${dict.title} - About page`,
    };
}

export default async function AboutPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict: AboutDict = await getTranslations(lang, 'about');

    return (
        <AboutAnimated
            title={dict.title}
            paragraphs={dict.paragraphs}
            photoAlt={dict.photoAlt}
        />
    );
}