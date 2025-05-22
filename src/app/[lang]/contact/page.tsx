import { Locale, getTranslations } from '../../../../i18n-config';
import Head from 'next/head';

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'contact');

    return {
        title: dict.title,
        description: dict.meta.description,
    };
}

export default async function ContactPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'contact');

    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>{dict.title}</title>
                <meta name="description" content={dict.meta.description} />
            </Head>

            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{dict.title}</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{dict.contactInfo.title}</h2>
                        <p className="mb-1"><span className="font-medium">{dict.contactInfo.email.label}</span> {dict.contactInfo.email.value}</p>
                        <p className="mb-1"><span className="font-medium">{dict.contactInfo.phone.label}</span> {dict.contactInfo.phone.value}</p>
                        <p><span className="font-medium">{dict.contactInfo.location.label}</span> {dict.contactInfo.location.value}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">{dict.messageForm.title}</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-medium">{dict.messageForm.nameField.label}</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder={dict.messageForm.nameField.placeholder}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 font-medium">{dict.messageForm.emailField.label}</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder={dict.messageForm.emailField.placeholder}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 font-medium">{dict.messageForm.messageField.label}</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder={dict.messageForm.messageField.placeholder}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                            >
                                {dict.messageForm.submitButton}
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">{dict.socialMedia.title}</h2>
                        <div className="flex gap-4">
                            {dict.socialMedia.links.map((link: { name: string; url: string }, index: number) => (
                                <a key={index} href={link.url} className="text-blue-600 hover:underline">{link.name}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}