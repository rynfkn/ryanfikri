export default function Projects() {
    const projects = [
        {
            title: 'Post-Flood Analysis With Semantic Segmentation & VQA',
            year: 2025,
            descriptions: [
                "Designed a hybrid U-Net + DeepLabV3+ model for high-resolution flood area segmentation from UAV imagery.",
                "Developed a Visual Question Answering (VQA) system with semantic attention to interpret post-flood scene conditions contextually.",
            ],
            tags: ["Deep Learning", "Semantic Segmentation", "VQA", "Computer Vision", "NLP"],
            image: "/projects/post_flood_analysis.png",
        },
        {
            title: 'Enhancing Public Safety with Intelligent Crowd Monitoring',
            year: 2025,
            descriptions: [
                "Built a crowd counting system using CSRNet with multiple backbones (ResNet50, EfficientNet, ConvNeXt).",
                "Applied advanced image preprocessing and density map generation to enhance model robustness.",
                "Implemented a weighted ensemble strategy to achieve balanced performance across crowd densities.",
            ],
            tags: ["Deep Learning", "Computer Vision", "Crowd Counting"],
            image: "/projects/crowd_counting.jpeg",
        },
        {
            title: 'Prison Sentences Prediction Using Advanced Text Extraction & Ensemble Learning',
            year: 2025,
            descriptions: [
                "Developing an Image Semantic Segmentation model using a hybrid U-Net + DeepLabV3+ architecture to map the affected flood areas from UAV imagery",
                "Building a Visual Question Answering (VQA) system with semantic attention to contextually interpret flood scene conditions.",
            ],
            tags: ["NLP", "Machine Learning", "Text Extraction", "Ensemble"],
            image: "/projects/prison_sentence_prediction.jpg",
        },
        {
            title: 'Rainfall Modeling Based on OCR Extraction and Ensemble Time Series Forecasting',
            year: 2025,
            descriptions: [
                "Developing an Image Semantic Segmentation model using a hybrid U-Net + DeepLabV3+ architecture to map the affected flood areas from UAV imagery",
                "Building a Visual Question Answering (VQA) system with semantic attention to contextually interpret flood scene conditions.",
            ],
            tags: ["Computer Vision", "OCR", "Time Series", "Machine Learning"],
            image: "/projects/time_series_forecasting.png",
        },
        {
            title: 'House Price Prediction Using Multimodal Deep Learning',
            year: 2025,
            descriptions: [
                "Collected and cleaned real estate data through automated web scraping using Selenium.",
                "Developed a multimodal deep learning model combining image embeddings (DINOv2) and textual features (IndoBERT).",
                "Achieved improved model performance through intermediate-fusion of visual, textual, and tabular modalities.",
            ],
            tags: ["Compter Vision", "NLP", "Multimodal Learning"],
            image: "/projects/house_price_prediction.jpg",
        },
        {
            title: 'Enhancing Healthcare RAG Using Reciprocal Rank Fusion',
            year: 2025,
            descriptions: [
                "Scrapping medical data article from the internet using Selenium",
                "Implemented a Retrieval-Augmented Generation (RAG) pipeline for medical question answering.",
                "Enhanced retrieval relevance using Reciprocal Rank Fusion (RRF) across multiple search backends.",
            ],
            tags: ["NLP", "RAG", "LLM", "Information Retrieval"],
            image: "/projects/RAG_RRF.png",
        },
    ]

    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-[#121212] text-white py-12 px-6">
            <div className="w-full max-w-5xl mb-10">
                <div className='items-center mb-10 border-b pb-4'>
                    <h1 className="text-4xl font-bold text-gradient">
                        PROJECTS
                    </h1>
                    <p className='text-lg italic text-gray-400'>Turning Ideas into Reality through Code</p>
                </div>
            </div>

            <div className="flex flex-col w-full max-w-5xl gap-16">
                {projects.map((project, index) => (

                    <div
                        index={index}
                        className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                    >

                        <div className="md:w-1/2 w-full aspect-[16/10] rounded-2xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-2xl shadow-lg hover:opacity-90 transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        <div className="md:w-1/2 w-full space-y-3">
                            <h2 className="text-3xl font-bold">{project.title}</h2>
                            <p className="text-sm italic">{project.year}</p>
                            {project.descriptions.map((desc, i) => (
                                <p
                                    index={i}
                                    className="text-gray-300 leading-relaxed">
                                    {desc}
                                </p>
                            ))}

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map((tag, i) => (
                                    <span
                                        index={i}
                                        className="text-sm px-3 py-1 bg-[var(--color-primary)] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}