import FadeIn from '../components/FadeIn';

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
        "Implemented a weighted ensemble strategy to achieve balanced performance across crowd densities.",
      ],
      tags: ["Deep Learning", "Computer Vision", "Crowd Counting"],
      image: "/projects/crowd_counting.jpeg",
    },
    {
      title: 'Prison Sentences Prediction Using Advanced Text Extraction & Ensemble Learning',
      year: 2025,
      descriptions: [
        "Built an NLP pipeline combining advanced text extraction from legal documents with ensemble learning to predict prison sentence lengths.",
      ],
      tags: ["NLP", "Machine Learning", "Text Extraction", "Ensemble"],
      image: "/projects/prison_sentence_prediction.jpg",
    },
    {
      title: 'Rainfall Modeling Based on OCR Extraction and Ensemble Time Series Forecasting',
      year: 2025,
      descriptions: [
        "Developed an OCR-based pipeline to extract historical rainfall data from scanned images, paired with ensemble time series models for forecasting.",
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
        "Achieved improved model performance through intermediate fusion of visual, textual, and tabular modalities.",
      ],
      tags: ["Computer Vision", "NLP", "Multimodal Learning"],
      image: "/projects/house_price_prediction.jpg",
    },
    {
      title: 'Enhancing Healthcare RAG Using Reciprocal Rank Fusion',
      year: 2025,
      descriptions: [
        "Implemented a Retrieval-Augmented Generation (RAG) pipeline for medical question answering.",
        "Enhanced retrieval relevance using Reciprocal Rank Fusion (RRF) across multiple search backends.",
      ],
      tags: ["NLP", "RAG", "LLM", "Information Retrieval"],
      image: "/projects/RAG_RRF.png",
    },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text)] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-light tracking-tight mb-2">Projects</h1>
        <div className="h-0.5 w-12 bg-gradient mb-12"></div>

        <div>
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.04}>
              <div className="py-8 border-b border-[var(--color-muted)]/20 flex gap-6 items-start">
                <span className="font-light text-5xl text-[var(--color-muted)]/20 select-none w-14 shrink-0 leading-none pt-1">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0 flex gap-6 items-start">
                  <div className="flex-1">
                    <h2 className="font-semibold text-xl mb-1 leading-snug">{project.title}</h2>
                    <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3">{project.year}</p>
                    <div className="space-y-1 mb-3">
                      {project.descriptions.map((desc, i) => (
                        <p key={i} className="font-light text-sm text-[var(--color-muted)] leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                      {project.tags.join(' · ')}
                    </p>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-28 aspect-video object-cover rounded-lg shadow-sm hidden md:block shrink-0"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
