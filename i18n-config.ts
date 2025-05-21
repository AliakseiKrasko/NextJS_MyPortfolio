export const defaultLocale = 'ru'
export const locales = ['ru', 'en'] as const
export type Locale = (typeof locales)[number]

export function getTranslations(locale: Locale, namespace: string) {
    return import(`./dictionaries/${locale}/${namespace}.json`).then(
        (module) => module.default
    )
}