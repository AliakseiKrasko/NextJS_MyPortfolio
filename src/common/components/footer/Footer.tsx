import Image from "next/image";

type Props = {};

export const Footer = (props: Props) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full gap-5 transition-colors duration-300 bg-black/30 backdrop-blur">
            <a className="flex items-center gap-2 hover:underline" href="https://nextjs.org/learn" target="_blank">
                <Image src="/file.svg" alt="File icon" width={16} height={16} />
                Learn
            </a>
            <a className="flex items-center gap-2 hover:underline" href="https://vercel.com/templates?framework=next.js" target="_blank">
                <Image src="/window.svg" alt="Window icon" width={16} height={16} />
                Examples
            </a>
            <a className="flex items-center gap-2 hover:underline" href="https://nextjs.org" target="_blank">
                <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
                Go to nextjs.org →
            </a>
        </div>
    );
};