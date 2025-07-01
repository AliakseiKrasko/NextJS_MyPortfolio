'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher({ dict }: { dict: { light: string; dark: string } }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // После маунта компонента на клиенте выставляем mounted = true
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Пока не смонтировано на клиенте — не рендерим ничего,
        // чтобы избежать гидрационных ошибок
        return null;
    }

    return (
        <div className="flex gap-2">
            <button
                onClick={() => setTheme('light')}
                className={`px-1 py-1 rounded-md text-sm transition-colors duration-200
                    ${theme === 'light'
                    ? 'text-black'
                    : 'bg-gray-200 text-black hover:bg-blue-100'
                }
                `}
                style={theme === 'light' ? { background: '#b9ff39' } : {}}
            >
                {dict.light}
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={`px-1 py-1 rounded-md text-sm transition-colors duration-200
                    ${theme === 'dark'
                    ? 'text-black'
                    : 'bg-gray-200 text-black hover:bg-blue-100'
                }
                `}
                style={theme === 'dark' ? { background: '#b9ff39' } : {}}
            >
                {dict.dark}
            </button>
        </div>
    );
}
