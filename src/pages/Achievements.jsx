export default function Achievement() {
    const achievements = [
        {
            title: "Runner Up - Data Mining",
            event: "Hology 8.0, Brawijaya University",
            year: 2025,
            description: "Developed a deep learning-based crowd counting model to estimate population density from images. The work focused on improving prediction accuracy, handling visual complexity, and building a reliable computer vision pipeline for data mining tasks.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "Runner Up - Objective Quest",
            event: "Airnology 4.0, Airlangga University",
            year: 2025,
            description: "Built a machine learning solution to support legal document analysis by extracting relevant information and predicting prison sentence outcomes. The project combined document processing, feature engineering, and predictive modeling.",
            tags: ["Machine Learning", "Natural Language Processing", "Document Analysis"],
        },
        {
            title: "3rd Place - MineToday",
            event: "ITToday, IPB University",
            year: 2025,
            description: "Created a machine learning model to classify bootcamp participant dropout risk using participant behavior and performance data. The solution emphasized practical insight generation, model interpretability, and data-driven decision support.",
            tags: ["Machine Learning", "Data Analysis", "Classification"],
        },
        {
            title: "3rd Place - Data Science",
            event: "SSF, Sebelas Maret University",
            year: 2025,
            description: "Developed an OCR and ensemble machine learning pipeline to transform historical rainfall image records into structured data for time series forecasting. The project combined image-based data extraction with predictive modeling for rainfall analysis.",
            tags: ["Computer Vision", "OCR", "Machine Learning", "Time Series"],
        },
        {
            title: "Winner - Data Mining",
            event: "Quadrathlon, Informatics ITS",
            year: 2024,
            description: "Built a machine learning model to predict YouTuber income based on channel performance indicators. The work involved data exploration, feature selection, and regression modeling to estimate salary patterns from creator analytics.",
            tags: ["Machine Learning", "Data Analysis", "Regression"],
        },
        {
            title: "Finalist (Top 3) - Data Quest",
            event: "Data Science Indonesia",
            year: 2025,
            description: "Developed a machine learning model to predict customer subscription behavior for bank deposit products. The project focused on classification performance, customer segmentation signals, and business-oriented model evaluation.",
            tags: ["Machine Learning", "Data Analysis", "Ensemble Learning"],
        },
        {
            title: "Finalist (Top 5) - Data Science",
            event: "SSF, Sebelas Maret University",
            year: 2025,
            description: "Built a machine learning workflow to forecast weather conditions and predict potential electricity outages. The solution combined time series forecasting and classification techniques to support operational risk analysis.",
            tags: ["Machine Learning", "Time Series", "Classification"],
        },

    ]

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-base)] text-[var(--color-text)] py-12 px-6 overflow-hidden y-auto transition-colors duration-300">
            <div className="w-full max-w-5xl mb-10">
                <div className='items-center mb-10 border-b border-[var(--color-muted)]/30 pb-4'>
                    <h1 className="text-4xl font-bold text-gradient">
                        ACHIEVEMENTS
                    </h1>
                    <p className='text-lg italic text-[var(--color-muted)]'>Strive not to be a success, but rather to be of value — Albert Einstein</p>
                </div>
            </div>

            <div className="w-full max-w-5xl flex flex-col gap-8">
                {achievements.map((item) => (
                    <article
                        key={`${item.title}-${item.event}`}
                        className="border-l border-[var(--color-muted)]/30 px-6 py-4"
                    >
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="text-lg text-[var(--color-muted)]">
                            {item.event} ({item.year})
                        </p>
                        <p className="text-[var(--color-muted)] mt-4 leading-relaxed">
                            {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.tags.map((tag) => (
                                <span
                                    key={`${item.title}-${tag}`}
                                    className="text-sm px-3 py-1 bg-[var(--color-primary)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
