"use client";

import React from "react";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
        const t = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(t);
    }, [delay]);
    return (
        <div className={`transition-all duration-3000 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {children}
        </div>
    );
}