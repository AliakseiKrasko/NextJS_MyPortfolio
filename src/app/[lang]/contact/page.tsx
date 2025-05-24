import { Locale, getTranslations } from '../../../../i18n-config';

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
            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{dict.title}</h1>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-black dark:text-white">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">{dict.contactInfo.title}</h2>
                        <p className="mb-1">
                            <span className="font-medium">{dict.contactInfo.email.label}</span> {dict.contactInfo.email.value}
                        </p>
                        <p className="mb-1">
                            <span className="font-medium">{dict.contactInfo.phone.label}</span> {dict.contactInfo.phone.value}
                        </p>
                        <p>
                            <span className="font-medium">{dict.contactInfo.location.label}</span> {dict.contactInfo.location.value}
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">{dict.messageForm.title}</h2>
                        <form
                            action="https://formspree.io/f/xeogbjdv"
                            method="POST"
                        >
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-medium">
                                    {dict.messageForm.nameField.label}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={dict.messageForm.nameField.placeholder}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 font-medium">
                                    {dict.messageForm.emailField.label}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={dict.messageForm.emailField.placeholder}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 font-medium">
                                    {dict.messageForm.messageField.label}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder={dict.messageForm.messageField.placeholder}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                <a
                                    key={index}
                                    href={link.url}
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                    target={link.url.startsWith('http') ? "_blank" : undefined}
                                    rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}