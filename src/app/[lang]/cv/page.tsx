import { Locale, getTranslations } from '../../../../i18n-config';
import {SmAnimated} from "@/common/components/sm/SmAnimated";


export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'sm');
    return {
        title: dict.title,
        description: `${dict.title}`,
    };
}

export default async function SMPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'sm');
    return <SmAnimated dict={dict} />;
}