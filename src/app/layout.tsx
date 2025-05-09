'use client';

import "./globals.css";
import {MyDatePicker} from "@/common/components/dataPicker/DataPicker";
import * as Select from '@radix-ui/react-select';
import {useState} from "react";
import {ChevronDownIcon} from "@radix-ui/react-icons";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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

                <Select.Root value={fruit} onValueChange={setFruit}>
                    <Select.Trigger className="SelectTrigger" aria-label="Select a fruit">
                        <Select.Value placeholder="Select a fruit…" />
                        <Select.Icon className="SelectIcon">
                            <ChevronDownIcon />
                        </Select.Icon>
                    </Select.Trigger>
                    <Select.Portal>
                        <Select.Content
                            className="SelectContent"
                            position="popper"
                            side="bottom"
                            align="start"
                        >
                            <Select.ScrollUpButton className="SelectScrollButton">
                                <ChevronDownIcon />
                            </Select.ScrollUpButton>
                            <Select.Viewport>
                                <Select.Group>
                                    <Select.Label>Fruits</Select.Label>
                                    <Select.Item value="apple">
                                        <Select.ItemText>Apple</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="banana">
                                        <Select.ItemText>Banana</Select.ItemText>
                                    </Select.Item>
                                    <Select.Item value="orange">
                                        <Select.ItemText>Orange</Select.ItemText>
                                    </Select.Item>
                                </Select.Group>
                            </Select.Viewport>
                            <Select.ScrollDownButton className="SelectScrollButton">
                                <ChevronDownIcon />
                            </Select.ScrollDownButton>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>


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
