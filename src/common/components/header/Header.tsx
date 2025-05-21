import Link from "next/link";

type Props = {};
export const Header = (props: Props) => {
    return (
        <header className="flex items-center justify-between px-4 py-2 w-full">
            <Link href="/" className="text-xl font-bold">
                My Project!
            </Link>
            <nav className="flex items-center gap-4">
                <Link href="/contact" className="flex items-center">
                    Contact
                </Link>
                <Link href="/cv" className="flex items-center">
                    CV
                </Link>
                <Link href="/contactPage " className="flex items-center">
                    ContactPage
                </Link>

            </nav>

        </header>
    );
};