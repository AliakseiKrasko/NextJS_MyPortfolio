import './globals.css';
import { defaultLocale } from '../../i18n-config';
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
        <ParticlesBg />
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
