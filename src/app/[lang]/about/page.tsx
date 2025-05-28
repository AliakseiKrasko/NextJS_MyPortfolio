import { Locale, getTranslations } from '../../../../i18n-config';
import {AboutAnimated} from "@/common/components/about/AboutAnimated";


type AboutDict = {
    title: string;
    paragraphs: string[];
    photoAlt: string;
};

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