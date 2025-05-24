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
        {/*<img
            src="/123.jpg"
            alt="Background"
            className="fixed inset-0 w-full h-full object-cover opacity-50 -z-20 pointer-events-none"
            style={{ objectPosition: "center" }}
        />*/}
        <ParticlesBg />
        <ThemeProvider>
        {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
