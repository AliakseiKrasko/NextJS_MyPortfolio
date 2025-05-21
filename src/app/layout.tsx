import './globals.css';
import { defaultLocale } from '../../i18n-config';

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
        <body>{children}</body>
        </html>
    );
}
