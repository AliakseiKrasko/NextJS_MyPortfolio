import {getTranslations, Locale} from '../../../../i18n-config';
import {AboutAnimated} from "@/feature/about/ui/AboutAnimated";
import {AboutDict} from "@/feature/about/type/type";

type PageProps  = {
    params: { lang: Locale }
};

export async function generateMetadata({ params }: PageProps ) {
    const dict: AboutDict = await getTranslations(params.lang, 'about');
    return {
        title: dict.title,
        description: `${dict.title} - About page`,
    };
}

export default async function AboutPage({ params }: PageProps ) {
    if (params.lang !== 'ru' && params.lang !== 'en') {
        throw new Error('Unknown lang');
    }
    const dict: AboutDict = await getTranslations(params.lang, 'about');

    return (
        <AboutAnimated
            title={dict.title}
            paragraphs={dict.paragraphs}
            photoAlt={dict.photoAlt}
        />
    );
}


