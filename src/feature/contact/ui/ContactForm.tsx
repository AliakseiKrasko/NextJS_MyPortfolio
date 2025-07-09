"use client";

import {useContactForm} from "@/feature/contact/model/useContactForm";
import {MessageFormDict} from "@/feature/contact/type/types";


type Props = {
    dict: MessageFormDict;
};

export function ContactForm({ dict }: Props) {
    const { register, handleSubmit, errors, onSubmit, success } = useContactForm();

    return (
        <>
            {success && (
                <div className="mb-4 font-semibold" style={{ color: "#FFFFFF" }}>
                    {dict.successMessage || "Сообщение успешно отправлено!"}
                </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium">
                        {dict.nameField.label}
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        placeholder={dict.nameField.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">
              {dict.nameField.error || "Поле обязательно"}
            </span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        {dict.emailField.label}
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                        placeholder={dict.emailField.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">
              {dict.emailField.error || "Поле обязательно"}
            </span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium">
                        {dict.messageField.label}
                    </label>
                    <textarea
                        id="message"
                        {...register("message", { required: true })}
                        placeholder={dict.messageField.placeholder}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-300 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-sm">
              {dict.messageField.error || "Поле обязательно"}
            </span>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-[#8dc72c] transition-colors cursor-pointer"
                >
                    {dict.submitButton}
                </button>
            </form>
        </>
    );
}