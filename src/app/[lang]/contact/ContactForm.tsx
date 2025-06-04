"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

type ContactFormFields = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm({ dict }: { dict: any }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<ContactFormFields>();
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: ContactFormFields) => {
        // Формируем данные для отправки
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        await fetch("https://formspree.io/f/xeogbjdv", {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
        });

        reset();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <>
            {success && (
                <div className="mb-4 font-semibold" style={{ color: "#FFFFFF" }}>
                    {dict.messageForm.successMessage || "Сообщение успешно отправлено!"}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium">
                        {dict.messageForm.nameField.label}
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        placeholder={dict.messageForm.nameField.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">
              {dict.messageForm.nameField.error || "Поле обязательно"}
            </span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        {dict.messageForm.emailField.label}
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        placeholder={dict.messageForm.emailField.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">
              {dict.messageForm.emailField.error || "Поле обязательно"}
            </span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium">
                        {dict.messageForm.messageField.label}
                    </label>
                    <textarea
                        id="message"
                        {...register("message", { required: true })}
                        placeholder={dict.messageForm.messageField.placeholder}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-sm">
              {dict.messageForm.messageField.error || "Поле обязательно"}
            </span>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-[#8dc72c] transition-colors cursor-pointer"
                >
                    {dict.messageForm.submitButton}
                </button>
            </form>
        </>
    );
}