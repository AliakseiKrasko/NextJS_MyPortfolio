export type FieldDict = {
    label: string;
    placeholder: string;
    error?: string;
};

export type MessageFormDict = {
    title?: string;
    successMessage?: string;
    submitButton: string;
    nameField: FieldDict;
    emailField: FieldDict;
    messageField: FieldDict;
};

export type ContactInfoDict = {
    title: string;
    email: { label: string; value: string };
    phone: { label: string; value: string };
    location: { label: string; value: string };
};

export type SocialMediaLink = {
    name: string;
    url: string;
};
export type SocialMediaDict = {
    title: string;
    links: SocialMediaLink[];
};

export type ContactPageDict = {
    title: string;
    contactInfo: ContactInfoDict;
    messageForm: MessageFormDict;
    socialMedia: SocialMediaDict;
};


export type ContactFormFields = {
    name: string;
    email: string;
    message: string;
};
