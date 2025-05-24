import { Locale, getTranslations } from '../../../i18n-config';
import Image from 'next/image';

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
            <h1 className="text-4xl font-bold mb-12">{welcomeText[lang]}</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-12">
                {/* Фото слева */}
                <Image
                    src="/my_photo.jpg"
                    alt="Моё фото"
                    width={550}
                    height={550}
                    className="rounded-full shadow-lg mx-auto md:mx-0"
                />
                {/* Контент справа */}
                <div className="flex-1">
                    <p className="text-xl mb-8">{descriptionText[lang]}</p>
                    <div>
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
        </div>
    );
}