import { Locale, getTranslations } from '../../../../i18n-config';
import {SmAnimated} from "@/feature/cv/ui/SmAnimated";
import {SmDict} from "@/feature/cv/type/type";


export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict: SmDict = await getTranslations(lang, 'sm');
    return {
        title: dict.title,
        description: `${dict.title}`,
    };
}

export default async function SMPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict: SmDict = await getTranslations(lang, 'sm');
    return <SmAnimated dict={dict} />;
}

