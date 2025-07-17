'use client';

import { useEffect, useState } from "react";

type Props = {
    text: string;
    speed?: number;
};

export const Typewriter = ({ text, speed = 100 }: Props) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    useEffect(() => {
        setIndex(0);
    }, [text]);

    return (
        <div style={{ whiteSpace: "pre-wrap" }}>
            {text.slice(0, index)}
        </div>
    );
};
