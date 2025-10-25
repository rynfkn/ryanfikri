export default function Achievement() {
    const achievements = [
        {
            title: "Runner Up - Data Mining",
            event: "Hology 8.0, Brawijaya University",
            year: 2025,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "Runner Up - Objective Quest",
            event: "Airnology 4.0, Airlangga University",
            year: 2025,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "3rd Place - MineToday",
            event: "ITToday, IPB University",
            year: 2025,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "3rd Place - Data Science",
            event: "SSF, Sebelas Maret University",
            year: 2025,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "Winner - Data Mining",
            event: "Quadrathlon, Informactics ITS",
            year: 2024,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "Finalist (Top 3) - Data Quest",
            event: "Data Science Indonesia",
            year: 2025,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },
        {
            title: "Finalist (Top 5) - Data Science",
            event: "SSF, Sebelas Maret University",
            year: 2025,
            descriptioin: "Developed a deep learning-based crowd counting model to estimate the number of people in images. Focused on optimizing accuracy and computational efficiency using advanced convolutional architectures.",
            tags: ["Deep Learning", "Machine Learning", "Data Mining", "Computer Vision"],
        },

    ]

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white py-12 px-6 overflow-hidden y-auto">
            <div className="w-full max-w-5xl mb-10">
                <div className='items-center mb-10 border-b pb-4'>
                    <h1 className="text-4xl font-bold text-gradient">
                        ACHIEVEMENTS
                    </h1>
                    <p className='text-lg italic text-gray-400'>Strive not to be a success, but rather to be of value — Albert Einstein</p>
                </div>
            </div>

            <div className="w-full max-w-5xl flex flex-col gap-8">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a1a] border border-gray-700 hover:border-[var(--color-primary)] rounded-2xl p-6 ">
                        <h2 className="text-2xl font-bold mb-1 text-[var(--color-primary)]">{item.title}</h2>
                        <p className="text-lg text-gray-300">{item.event}</p>
                        <p className="text-sm text-gray-500 italic mb-4">{item.year}</p>
                        <p className="text-gray-400 mb-4 leading-relaxed">{item.descriptioin}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {item.tags.map((tag, i) => (
                                <span
                                    index={i}
                                    className="text-sm px-3 py-1 bg-[var(--color-primary)] rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}