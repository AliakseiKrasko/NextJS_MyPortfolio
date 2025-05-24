import './globals.css';
import { defaultLocale } from '../../i18n-config';
import {ThemeProvider} from "@/common/components/ThemeProvider/ThemeProvider";

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
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
