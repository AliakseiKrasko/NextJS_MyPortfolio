import { Locale, getTranslations } from '../../../../i18n-config';

type EducationItem = {
    degree: string;
    institution: string;
    period: string;
};

type Job = {
    position: string;
    company: string;
    period: string;
    description: string;
    details?: string[];
};

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'cv');

    return {
        title: dict.title,
        description: `${dict.title} - Professional CV`,
    };
}

export default async function CVPage({ params: { lang } }: { params: { lang: Locale } }) {
    const dict = await getTranslations(lang, 'cv');

    return (
        <div className="container mx-auto px-4 py-8">
            <main className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">{dict.title}</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{dict.experience.title}</h2>
                    <div className="border-l-2 border-gray-300 pl-4">
                        {dict.experience.jobs.map((job: Job, index: number) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-xl font-medium">{job.position}</h3>
                                <p className="text-gray-600">{job.company} • {job.period}</p>
                                <p className="mt-2">{job.description}</p>
                                {job.details && job.details.length > 0 && (
                                    <ul className="list-disc ml-6 mt-2 text-gray-800 text-sm">
                                        {job.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{dict.education.title}</h2>
                    <div className="border-l-2 border-gray-300 pl-4">
                        {dict.education.items.map((edu: EducationItem, index: number) => (
                            <div key={index} className="mb-4 bg-gray-100 text-green-900 dark:bg-green-700 dark:text-green-100">
                                <h3 className="text-xl font-medium">{edu.degree}</h3>
                                <p className="text-gray-600">{edu.institution} • {edu.period}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">{dict.skills.title}</h2>
                    <div className="flex flex-wrap gap-2">
                        {dict.skills.items.map((skill: string, idx: number) => (
                            <span
                                key={idx}
                                className="bg-green-200 text-green-900 dark:bg-green-700 dark:text-green-100 px-3 py-1 rounded-full"
                            >
  {skill}
</span>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}