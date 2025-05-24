'use client';

import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <button onClick={() => setTheme('light')}>Светлая</button>
            <button onClick={() => setTheme('dark')}>Тёмная</button>

        </div>
    );
}