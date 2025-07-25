import './globals.css';
import { defaultLocale } from '../../i18n-config';
import { ThemeProvider } from "@/common/components/ThemeProvider/ThemeProvider";
import ParticlesBg from "@/common/components/ParticlesBg/ParticlesBg";
import Script from "next/script";

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
        <html lang={defaultLocale} suppressHydrationWarning>
        <head>
            <Script id="yandex-metrika" strategy="afterInteractive">
                {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103482391', 'ym');

            ym(103482391, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
            </Script>
        </head>
        <body>
        <ThemeProvider>
            <div className="min-h-screen">
                <ParticlesBg />
                {children}
            </div>
        </ThemeProvider>
        <noscript>
            <div>
                <img src="https://mc.yandex.ru/watch/103482391" style={{ position: "absolute", left: "-9999px" }} alt="" />
            </div>
        </noscript>
        </body>
        </html>
    );
}
