'use client';

import "./globals.css";
import {MyDatePicker} from "@/common/components/dataPicker/DataPicker";
import Select from "@/common/components/select/Select";
import {useEffect, useRef} from "react";





export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const selectRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        selectRef.current?.focus(); // пример использования
    }, []);
    return (
        <html lang="en">
        <body>

            <header className="flex justify-between items-center py-4">
                <h1> My App</h1>
            </header>

            {/* Основной контент */}
            <main>
                <MyDatePicker />
                <Select
                    ref={selectRef}
                    options={[
                        { value: 'apple', label: 'Apple' },
                        { value: 'banana', label: 'Banana' },
                    ]}
                />
                {children}
            </main>

            {/* Подвал */}
            <footer className="py-4">
                <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
            </footer>

        </body>
        </html>
    );
}
