import { Locale, getTranslations } from '../../../../i18n-config';
import React from 'react';
import Head from 'next/head';

type ContactTranslations = {
    title: string;
    description: string;
    contactInfoTitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    sendMessageTitle: string;
    nameLabel: string;
    emailInputLabel: string;
    messageLabel: string;
    sendButton: string;
    socialTitle: string;
    linkedIn: string;
    github: string;
    twitter: string;
};

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'contact');
    return {
        title: dict.title,
        description: dict.description,
    };
}

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict: ContactTranslations = await getTranslations(lang, 'contact');

    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>{dict.title}</title>
                <meta name="description" content={dict.description} />
            </Head>

            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{dict.title}</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{dict.contactInfoTitle}</h2>
                        <p className="mb-1">
                            <span className="font-medium">{dict.emailLabel}:</span> kraskoaliaksei@gmail.com
                        </p>
                        <p className="mb-1">
                            <span className="font-medium">{dict.phoneLabel}:</span> +375 (33) 992-36-65
                        </p>
                        <p>
                            <span className="font-medium">{dict.locationLabel}:</span> Волковыск, Беларусь
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">{dict.sendMessageTitle}</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-medium">{dict.nameLabel}</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 font-medium">{dict.emailInputLabel}</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 font-medium">{dict.messageLabel}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                            >
                                {dict.sendButton}
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">{dict.socialTitle}</h2>
                        <div className="flex gap-4">
                            <a href="#" className="text-blue-600 hover:underline">{dict.linkedIn}</a>
                            <a href="#" className="text-blue-600 hover:underline">{dict.github}</a>
                            <a href="#" className="text-blue-600 hover:underline">{dict.twitter}</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
