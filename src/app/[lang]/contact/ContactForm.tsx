"use client";
import { useRef, useState } from "react";

export default function ContactForm({ dict }: { dict: any }) {
    const formRef = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        if (!form) return;

        // Отправляем данные как FormData на Formspree
        const formData = new FormData(form);

        await fetch("https://formspree.io/f/xeogbjdv", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        form.reset(); // очищаем поля
        setSuccess(true);

        // Убираем сообщение через 3 секунды
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <>
            {success && (
                <div className="mb-4 font-semibold"
                     style={{ color: "#8dc72c" }}
                >
                    {dict.messageForm.successMessage || "Сообщение успешно отправлено!"}
                </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit}>
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
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-[#b9ff39] text-black font-medium rounded-md hover:bg-[#8dc72c] transition-colors cursor-pointer"
                >
                    {dict.messageForm.submitButton}
                </button>
            </form>
        </>
    );
}