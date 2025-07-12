export type CommonDict = {
    sendMessage: string;
    downloadCV: string;
};

export type HomeAnimatedProps = {
    lang: 'ru' | 'en';
    common: {
        sendMessage: string;
        downloadCV: string;
    };
};

export type HomeAnimatedViewProps = {
    lang: 'ru' | 'en';
    show: boolean;
    typewriterWords: string[];
    description: string;
    common: {
        sendMessage: string;
        downloadCV: string;
    };
};