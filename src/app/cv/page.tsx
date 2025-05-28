export default function CVPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <main className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Моё резюме</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Опыт работы</h2>
                    <div className="border-l-2 border-gray-300 pl-4">
                        <div className="mb-4">
                            <h3 className="text-xl font-medium">Старший разработчик</h3>
                            <p className="cv-text">Компания ABC • 2020 - Настоящее время</p>
                            <p className="mt-2">Разработка и поддержка веб-приложений с использованием React и Next.js.</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium">Веб-разработчик</h3>
                            <p className="">Компания XYZ • 2018 - 2020</p>
                            <p className="mt-2">Создание адаптивных веб-сайтов и интерфейсов.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Образование</h2>
                    <div className="border-l-2 border-gray-300 pl-4">
                        <div className="mb-4">
                            <h3 className="text-xl font-medium">Магистр компьютерных наук</h3>
                            <p className="">Университет XYZ • 2016 - 2018</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-medium">Бакалавр информатики</h3>
                            <p className="">Университет ABC • 2012 - 2016</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}