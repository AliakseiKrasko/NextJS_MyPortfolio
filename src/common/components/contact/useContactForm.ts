import { useForm } from "react-hook-form";
import { useState } from "react";
import { ContactFormFields } from "@/app/[lang]/contact/types";

export function useContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormFields>();
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data: ContactFormFields) => {
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

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
        success,
    };
}
