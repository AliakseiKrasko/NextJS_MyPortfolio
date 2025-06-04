import './globals.css';
import {defaultLocale} from '../../i18n-config';
import {ThemeProvider} from "@/common/components/ThemeProvider/ThemeProvider";
import ParticlesBg from "@/common/components/ParticlesBg/ParticlesBg";

export const metadata = {
    title: 'Multilingual Website',
    description: 'Next.js multilingual website example',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang={defaultLocale}>
        <body>
        <div className="min-h-screen bg-gradient-to-br from-sky-200 via-pink-200 to-blue-200">
            <ParticlesBg/>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </div>
        </body>
        </html>
    );
}
