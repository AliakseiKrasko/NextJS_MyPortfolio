import "./globals.css";
import {MyDatePicker} from "@/common/components/dataPicker/DataPicker";




export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>

            <header className="flex justify-between items-center py-4">
                <h1> My App</h1>
            </header>

            {/* Основной контент */}
            <main>
                <MyDatePicker />
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
