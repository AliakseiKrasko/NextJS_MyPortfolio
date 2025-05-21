import React from 'react';
import Head from 'next/head';

const ContactPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>Связаться со мной</title>
                <meta name="description" content="Контактная информация" />
            </Head>

            <main className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Связаться со мной</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Контактная информация</h2>
                        <p className="mb-1"><span className="font-medium">Email:</span> kraskoaliaksei@gmail.com</p>
                        <p className="mb-1"><span className="font-medium">Телефон:</span> +375 (33) 992-36-65</p>
                        <p><span className="font-medium">Локация:</span> Волковыск, Беларусь</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-4">Отправьте мне сообщение</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 font-medium">Ваше имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block mb-1 font-medium">Сообщение</label>
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
                                Отправить
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-2">Социальные сети</h2>
                        <div className="flex gap-4">
                            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
                            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
                            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;