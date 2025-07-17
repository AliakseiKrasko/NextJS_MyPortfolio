import { Locale, getTranslations } from '../../../i18n-config';
import HomeAnimated from './HomeAnimated';

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const common = await getTranslations(lang, 'common');
    return <HomeAnimated lang={lang} common={common} />;
}

