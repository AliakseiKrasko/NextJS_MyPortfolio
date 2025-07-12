"use client";


import {HomeAnimatedProps} from "@/feature/home/type/type";
import {useHomeAnimated} from "@/feature/home/model/useHomeAnimated";
import HomeAnimatedView from "@/feature/home/ui/HomeAnimatedView";

export default function HomeAnimated({ lang, common }: HomeAnimatedProps) {
    const { show, typewriterWords, description } = useHomeAnimated(lang);

    return (
        <HomeAnimatedView
            lang={lang}
            show={show}
            typewriterWords={typewriterWords}
            description={description}
            common={common}
        />
    );
}