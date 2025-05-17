'use client';

import { useEffect, useState, useRef } from "react";

type Props = {
    text: string;
    speed?: number;
};

export const Typewriter = ({ text, speed = 100 }: Props) => {
    const [displayText, setDisplayText] = useState("");
    const indexRef = useRef(0);

    useEffect(() => {
        indexRef.current = 0;
        setDisplayText("");

        const interval = setInterval(() => {
            setDisplayText((prev) => prev + text.charAt(indexRef.current));
            indexRef.current += 1;

            if (indexRef.current >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <div style={{ whiteSpace: "pre-wrap" }}>{displayText}</div>;
};