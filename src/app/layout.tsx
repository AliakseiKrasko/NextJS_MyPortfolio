'use client';

import "./globals.css";
import {MyDatePicker} from "@/common/components/dataPicker/DataPicker";
import Select from "@/common/components/select/Select";
import {useEffect, useRef, useState} from "react";
import {Apple, Banana} from "lucide-react";
import CustomSelect from "@/common/components/select/Select";





export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const [fruit, setFruit] = useState('apple');


    return (
        <html lang="en">
        <body>

            <header className="flex justify-between items-center py-4">
                <h1> My App</h1>
            </header>

            {/* Основной контент */}
            <main>
                <MyDatePicker />
                <div className="p-4">
                    <CustomSelect
                        value={fruit}
                        onChange={setFruit}
                        options={[
                            { value: 'apple', label: 'Apple', icon: <Apple className="w-4 h-4" /> },
                            { value: 'banana', label: 'Banana', icon: <Banana className="w-4 h-4" /> },
                        ]}
                    />
                    <p className="mt-2">Selected: {fruit}</p>
                </div>
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
