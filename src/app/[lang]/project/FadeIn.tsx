"use client";

import React from "react";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        const t = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(t);
    }, [delay]);
    return (
        <div className={`transition-all duration-700 ease-out ${show ? 'scale-100 translate-y-0' : 'scale-75 translate-y-8'}`}>
            {children}
        </div>
    );
}