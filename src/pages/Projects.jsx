import { useState } from "react";

export default function Projects() {
    const [activeType, setActiveType] = useState("All");

    const projects = [
        {
            title: 'Post-Flood Analysis With Semantic Segmentation & VQA',
            year: 2025,
            type: "AI/ML",
            overview: "This project focuses on helping post-flood assessment teams read drone imagery faster by highlighting affected areas and answering visual questions about the scene.",
            details: [
                "Mapped flooded areas from drone images using deep learning.",
                "Built a question answering system to help explain flood conditions from images.",
            ],
            tags: ["Python", "PyTorch", "OpenCV", "U-Net", "DeepLabV3+"],
            image: "/projects/post_flood_analysis.png",
        },
        {
            title: 'Enhancing Public Safety with Intelligent Crowd Monitoring',
            year: 2025,
            type: "AI/ML",
            overview: "I built this to estimate crowd size from images, especially for situations where manual counting is slow or unreliable in busy public spaces.",
            details: [
                "Created a system that counts people in crowded images.",
                "Improved the model so it works better across different crowd sizes.",
                "Combined several models to make the prediction more reliable.",
            ],
            tags: ["Python", "PyTorch", "OpenCV", "CSRNet", "ResNet50"],
            image: "/projects/crowd_counting.jpeg",
        },
        {
            title: 'Prison Sentences Prediction Using Advanced Text Extraction & Ensemble Learning',
            year: 2025,
            type: "AI/ML",
            overview: "The goal of this project was to turn legal case documents into structured information that can be used to support prison sentence prediction.",
            details: [
                "Extracted important information from legal case documents.",
                "Built a machine learning model to help predict prison sentence outcomes.",
            ],
            tags: ["Python", "scikit-learn", "Pandas", "NumPy", "Tesseract OCR"],
            image: "/projects/prison_sentence_prediction.jpg",
        },
        {
            title: 'Rainfall Modeling Based on OCR Extraction and Ensemble Time Series Forecasting',
            year: 2025,
            type: "AI/ML",
            overview: "For this work, I processed scanned rainfall records into usable data and used them to forecast rainfall trends over time.",
            details: [
                "Converted rainfall data from scanned images into usable text.",
                "Built a forecasting model to predict future rainfall patterns.",
            ],
            tags: ["Python", "OpenCV", "Tesseract OCR", "Pandas", "scikit-learn"],
            image: "/projects/time_series_forecasting.png",
        },
        {
            title: 'House Price Prediction Using Multimodal Deep Learning',
            year: 2025,
            type: "AI/ML",
            overview: "This project predicts house prices by looking beyond numbers alone, combining property photos, listing text, and structured housing details.",
            details: [
                "Collected housing data from the web and cleaned it for training.",
                "Used house images, descriptions, and other details to predict prices.",
                "Combined multiple data types to improve prediction accuracy.",
            ],
            tags: ["Python", "Selenium", "PyTorch", "DINOv2", "IndoBERT"],
            image: "/projects/house_price_prediction.jpg",
        },
        {
            title: 'Enhancing Healthcare RAG Using Reciprocal Rank Fusion',
            year: 2025,
            type: "AI/ML",
            overview: "I explored how medical question answering can be improved by retrieving stronger article references before generating the final response.",
            details: [
                "Collected medical articles from the web.",
                "Built a medical question answering system using RAG.",
                "Improved search results by combining answers from multiple retrievers.",
            ],
            tags: ["Python", "Selenium", "LangChain", "FAISS", "Hugging Face"],
            image: "/projects/RAG_RRF.png",
        },
    ]

    const projectTypes = ["All", "AI/ML", "Website", "Mobile", "Other"];
    const filteredProjects = activeType === "All"
        ? projects
        : projects.filter((project) => project.type === activeType);

    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-[var(--color-base)] text-[var(--color-text)] py-12 px-6 transition-colors duration-300">
            <div className="w-full max-w-5xl mb-10 border-b border-[var(--color-muted)]/30 pb-4">
                <h1 className="text-4xl font-bold text-gradient">
                    PROJECTS
                </h1>

                <p className="text-lg italic text-[var(--color-muted)]">
                    Turning Ideas into Reality through Code
                </p>
            </div>

            <div className="mb-8 flex w-full max-w-5xl flex-wrap gap-3">
                {projectTypes.map((type) => {
                    const count = type === "All"
                        ? projects.length
                        : projects.filter((project) => project.type === type).length;
                    const isActive = activeType === type;

                    return (
                        <button
                            key={type}
                            type="button"
                            onClick={() => setActiveType(type)}
                            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                                : "border-[var(--color-muted)]/30 text-[var(--color-muted)] hover:border-[var(--color-primary)]/70 hover:text-[var(--color-text)]"
                                }`}
                        >
                            {type}
                            <span className={`ml-2 text-xs ${isActive ? "text-white/80" : "text-[var(--color-muted)]"}`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {filteredProjects.length > 0 ? (
                <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
                    {filteredProjects.map((project) => (
                    <article
                        key={project.title}
                        className="flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-base)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/80 hover:shadow-lg hover:shadow-[var(--color-primary)]/10"
                    >
                        <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-muted)]/10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <div className="mb-4">
                                <div className="mb-2 flex flex-wrap items-center gap-2">
                                    <p className="text-sm font-semibold text-[var(--color-secondary)]">
                                        {project.year}
                                    </p>
                                    <span className="rounded-full border border-[var(--color-secondary)]/30 px-2 py-0.5 text-xs text-[var(--color-secondary)]">
                                        {project.type}
                                    </span>
                                </div>
                                <h2 className="text-xl font-bold leading-snug text-[var(--color-text)]">
                                    {project.title}
                                </h2>
                            </div>

                            <p className="mb-5 text-sm leading-relaxed text-[var(--color-muted)]">
                                {project.overview}
                            </p>

                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-sm px-3 py-1 bg-[var(--color-primary)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                    ))}
                </div>
            ) : (
                <div className="w-full max-w-5xl rounded-lg border border-dashed border-[var(--color-muted)]/40 px-6 py-12 text-center">
                    <p className="text-lg font-semibold text-[var(--color-text)]">No {activeType.toLowerCase()} projects yet.</p>
                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                        Add projects with <span className="text-[var(--color-secondary)]">type: "{activeType}"</span> to show them here.
                    </p>
                </div>
            )}
        </div>
    );
}
    
