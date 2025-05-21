import { Locale, getTranslations } from '../../../i18n-config';

export default async function HomePage({ params: { lang } }: { params: { lang: Locale } }) {
    const common = await getTranslations(lang, 'common');

    const welcomeText = {
        ru: 'Добро пожаловать на мой многоязычный сайт!',
        en: 'Welcome to my multilingual website!'
    };

    const descriptionText = {
        ru: 'Этот сайт создан с использованием Next.js App Router и поддерживает несколько языков.',
        en: 'This website is built using Next.js App Router and supports multiple languages.'
    };

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">{welcomeText[lang]}</h1>
                <p className="text-xl mb-8">{descriptionText[lang]}</p>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="mb-4">
                        {lang === 'ru'
                            ? 'Вы можете переключаться между языками с помощью кнопок в шапке сайта.'
                            : 'You can switch between languages using the buttons in the site header.'
                        }
                    </p>
                    <p>
                        {lang === 'ru'
                            ? 'Перейдите на страницу "Резюме" или "Контакты", чтобы увидеть больше переведенного контента.'
                            : 'Navigate to the "CV" or "Contact" pages to see more translated content.'
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}