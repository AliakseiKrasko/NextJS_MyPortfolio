"use client";
import { FC, ReactNode, useEffect, useState } from "react";

type FadeInProps = {
    children: ReactNode;
    delay?: number; // в миллисекундах
    className?: string;
};

const FadeIn: FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    return (
        <div
            className={`
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}
      `}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;