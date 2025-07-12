import { useEffect, useState } from "react";

export function useHomeAnimated(lang: 'ru' | 'en') {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const typewriterText: Record<'ru' | 'en', string[]> = {
        ru: ['Привет, я Алексей!'],
        en: ['Welcome, I am Aliaksei!']
    };

    const descriptionText: Record<'ru' | 'en', string> = {
        ru: 'Я создаю отзывчивые веб-сайты и интерактивные веб-приложения, где технологии встречаются с творчеством..',
        en: 'I\'m builds responsive websites and interactive web applications where technology meets creativity.'
    };

    return {
        show,
        typewriterWords: typewriterText[lang],
        description: descriptionText[lang],
    };
}
