export default function Projects() {
    const projects = [
        {
            title: 'Post-Flood Analysis With Semantic Segmentation & VQA',
            year: 2025,
            descriptions: [
                "Developing an Image Semantic Segmentation model using a hybrid U-Net + DeepLabV3+ architecture to map the affected flood areas from UAV imagery",
                "Building a Visual Question Answering (VQA) system with semantic attention to contextually interpret flood scene conditions.",
            ],
            tags: ["Deep Learning", "Semantic Segmentation", "VQA", "Computer Vision", "NLP"],
            image: "/projects/post_flood_analysis.png",
        },
        {
            title: 'Crowd Counting',
            year: 2025,
            descriptions: [
                "Builing Crowd Counting model using CSRNet Architecture with different backbone such as Resnet50, Efficienet, and ConvNext",
                "Apply image preprocessing to enhance the quality of the image",
                "Ensemble the results using Weighted Ensemble ",
            ],
            tags: ["Deep Learning", "Computer Vision"],
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
            image: "/src/assets/flood_project.jpg",
        },
        {
            title: 'Rainfall Prediction with OCR',
            year: 2025,
            descriptions: [
                "Developing an Image Semantic Segmentation model using a hybrid U-Net + DeepLabV3+ architecture to map the affected flood areas from UAV imagery",
                "Building a Visual Question Answering (VQA) system with semantic attention to contextually interpret flood scene conditions.",
            ],
            tags: ["Computer Vision", "OCR", "Time Series", "Machine Learning"],
            image: "/flood_project.jpg",
        },
        {
            title: 'House Price Prediction Using Multimodal Deep Learning',
            year: 2025,
            descriptions: [
                "Scrapping data from the internet using Selenium",
                "Building Multimodal Deep Learning model combined image extracted with DINOv2 and text extracted with IndoBERT.",
            ],
            tags: ["Compter Vision", "NLP", "Multimodal"],
            image: "/projects/house_price_prediction.jpeg",
        },
        {
            title: 'Healt Care Assistant: Boosting RAG with Reciprocal Rank Fusion',
            year: 2025,
            descriptions: [
                "Scrapping data from the internet using Selenium",
                "Building Multimodal Deep Learning model combined image extracted with DINOv2 and text extracted with IndoBERT.",
            ],
            tags: ["NLP", "RAG", "LLM"],
            image: "/src/assets/projects/",
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

                        <div className="md:w-1/2 w-full">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover rounded-2xl shadow-lg hover:opacity-90 transtition"
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