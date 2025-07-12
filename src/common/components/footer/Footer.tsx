import Image from "next/image";

type Props = {};

export const Footer = (props: Props) => {
    return (
        <footer className="w-full text-center text-gray-400 text-xs py-4 mt-16">
            © {new Date().getFullYear()} Krasko Aliaksei |
            <a href="mailto:kraskoaliaksei@gmail.com" className="ml-2 text-lime-400 hover:underline">Email me</a>
            <a href="https://github.com/AliakseiKrasko" className="ml-2 text-lime-400 hover:underline" target="_blank">GitHub</a>
        </footer>
    );
};