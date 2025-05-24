'use client';
import { useTheme } from 'next-themes';

export function ThemeSwitcher({ dict }: { dict: { light: string; dark: string } }) {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setTheme('light')}
                className={`px-1 py-1 rounded-md text-sm transition-colors duration-200
                    ${theme === 'light'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-blue-100'}
                `}
            >
                {dict.light}
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`px-1 py-1 rounded-md text-sm transition-colors duration-200
                    ${theme === 'dark'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-900 hover:bg-blue-100'}
                `}
            >
                {dict.dark}
            </button>
        </div>
    );
}