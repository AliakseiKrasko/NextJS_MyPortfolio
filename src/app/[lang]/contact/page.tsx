import { Locale, getTranslations } from '../../../../i18n-config';
import ContactAnimated from "@/feature/contact/section/ContactAnimated";


export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'contact');
    return {
        title: dict.title,
        description: dict.meta.description,
    };
}

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'contact');
    return <ContactAnimated dict={dict} />;
}

