import FadeIn from '../components/FadeIn';

export default function Achievement() {
  const achievements = [
    {
      title: "Runner Up — Data Mining",
      event: "Hology 8.0, Brawijaya University",
      year: 2025,
      descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
      tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
    },
    {
      title: "Runner Up — Objective Quest",
      event: "Airnology 4.0, Airlangga University",
      year: 2025,
      descriptioin: "Built a machine learning model to predict prison sentences based on text extracted from legal documents.",
      tags: ["NLP", "Machine Learning", "Text Classification"],
    },
    {
      title: "3rd Place — MineToday",
      event: "ITToday, IPB University",
      year: 2025,
      descriptioin: "Built machine learning models to classify the dropout likelihood of bootcamp participants.",
      tags: ["Machine Learning", "Data Analysis"],
    },
    {
      title: "3rd Place — Data Science",
      event: "SSF, Sebelas Maret University",
      year: 2025,
      descriptioin: "Developed an OCR and ensemble machine learning time series pipeline to predict rainfall from historical image data.",
      tags: ["Computer Vision", "OCR", "Machine Learning", "Time Series"],
    },
    {
      title: "Winner — Data Mining",
      event: "Quadrathlon, Informatics ITS",
      year: 2024,
      descriptioin: "Built a machine learning model to predict YouTuber salaries based on performance metrics.",
      tags: ["Machine Learning", "Data Analysis"],
    },
    {
      title: "Finalist (Top 3) — Data Quest",
      event: "Data Science Indonesia",
      year: 2025,
      descriptioin: "Developed a machine learning model to predict bank deposit subscriptions by members.",
      tags: ["Machine Learning", "Data Analysis", "Ensemble Learning"],
    },
    {
      title: "Finalist (Top 5) — Data Science",
      event: "SSF, Sebelas Maret University",
      year: 2025,
      descriptioin: "Built a machine learning model to forecast weather conditions and predict electricity shutdowns.",
      tags: ["Machine Learning", "Time Series", "Classification"],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text)] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-light tracking-tight mb-2">Achievements</h1>
        <div className="h-0.5 w-12 bg-gradient mb-3"></div>
        <p className="font-light italic text-[var(--color-muted)] mb-12 text-sm">
          Strive not to be a success, but rather to be of value — Albert Einstein
        </p>

        <div>
          {achievements.map((item, index) => (
            <FadeIn key={index} delay={index * 0.04}>
              <div className="py-6 border-b border-[var(--color-muted)]/20">
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <span className="text-xs uppercase tracking-widest text-[var(--color-muted)] ml-4 shrink-0">
                    {item.year}
                  </span>
                </div>
                <p className="font-light text-base text-[var(--color-muted)] mb-2">{item.event}</p>
                <p className="font-light text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                  {item.descriptioin}
                </p>
                <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                  {item.tags.join(' · ')}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
