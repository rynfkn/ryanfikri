export default function Experience() {
  const education = [
    {
      institution: "Sepuluh Nopember Institute of Technology",
      major: "B.S. in Informatics",
      timeline: "2023 - Present",
      gpa: "3.81 / 4.00",
      coursework: [
        "Data Structures and Algorithms",
        "Machine Learning",
        "Image Processing & Computer Vision",
        "Web Programming",
        "Database Systems",
        "Mobile Programming",
        "Framework Based Programming",

      ],
      organizations: [
        "Intelligent System & Computing Laboratory",
        "Informatics student activities and competitions",
      ],
    },
  ];

  const experiences = [
    {
      position: "Lab Administrator",
      timeline: "May 2025 - Present",
      institution: "Intelligent System & Computing",
      skills: ["AI", "Machine Learning", "Data Science"],
      jobdesk: [
        "Designed and delivered machine learning materials for junior students, covering supervised and unsupervised learning, model evaluation, and introductory deep learning.",
        "Mentored students through end-to-end machine learning workflows, including data preprocessing, feature engineering, model training, and experiment analysis.",
        "Supported a community outreach program by teaching Scratch programming fundamentals to local students and educators.",
      ],
    },
    {
      position: "Back-End Developer",
      timeline: "Dec 2024 - Mar 2025",
      institution: "Petroleum Integrated Days 2025",
      skills: ["Go", "PostgreSQL", "Git"],
      jobdesk: [
        "Developed and maintained RESTful APIs for event registration and transaction workflows using Go and PostgreSQL.",
        "Improved backend reliability by refining API logic, database queries, and integration flows for event operations.",
      ],
    },
    {
      position: "Front-End Developer",
      timeline: "Dec 2024 - Mar 2025",
      institution: "Future Energy Summit",
      skills: ["Next.js", "TailwindCSS", "Git"],
      jobdesk: [
        "Built responsive event management interfaces with Next.js and Tailwind CSS, focusing on usability across desktop and mobile devices.",
        "Collaborated with the development team to translate event requirements into clean, consistent, and maintainable frontend components.",
      ],
    },
    {
      position: "Problem Setter",
      timeline: "Aug 2024 - Nov 2024",
      institution: "Schematics National Logic Competition",
      skills: ["Logic", "Mathematics", "Critical Thinking"],
      jobdesk: [
        "Created logic and mathematics problem statements for a national-level competition, with attention to clarity, originality, and appropriate difficulty.",
        "Reviewed and tested official solutions to ensure correctness, fairness, and balanced challenge levels.",
        "Worked with the academic team to refine wording, validate assumptions, and improve the overall quality of each problem.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 text-[var(--color-text)] bg-[var(--color-base)] transition-colors duration-300">

      <div className="w-full max-w-5xl mb-16">
        <div className='items-center mb-10 border-b border-[var(--color-muted)]/30 pb-4'>
          <h1 className="text-4xl font-bold text-gradient">
            EDUCATION
          </h1>
          <p className='text-lg italic text-[var(--color-muted)]'>Scientia, Art et Virtute</p>
        </div>

        <div className="flex w-full flex-col gap-6">
          {education.map((item) => (
            <article
              key={item.institution}
              className="grid grid-cols-1 overflow-hidden rounded-lg transition-all duration-300 lg:grid-cols-[0.9fr_1.6fr]"
            >
              <div className="border-b border-[var(--color-muted)]/30 p-6 lg:border-b-0 lg:border-r">
                <h2 className="text-2xl font-bold leading-snug text-[var(--color-text)]">
                  {item.institution}
                </h2>
                <p className="mt-3 text-lg font-semibold text-[var(--color-primary)]">
                  {item.major}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {item.timeline}
                </p>
              </div>

              <div className="px-6 pt-4 pb-2">
                <div className="rounded-lg px-4 py-2">
                  <p className="text-lg font-bold">GPA: {item.gpa}</p>
                </div>
                <div className="mb-4 rounded-lg px-4 py-3">
                  <p className="text-lg font-semibold">Relevant Course Work:</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="text-sm px-2 py-1 bg-[var(--color-primary)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className='w-full max-w-5xl mb-16'>
        <div className='items-center mb-10 border-b border-[var(--color-muted)]/30 pb-4'>
          <h1 className="text-4xl font-bold text-gradient">
            EXPERIENCES
          </h1>
          <p className='text-lg italic text-[var(--color-muted)]'>Deployed knowledge, debugged by reality.</p>
        </div>

        <div className="w-full flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <article key={index} className="grid grid-cols-1 overflow-hidden rounded-lg transition-all duration-300  lg:grid-cols-[0.9fr_1.6fr]">
              <div className="border-b border-[var(--color-muted)]/30 p-6 lg:border-b-0 lg:border-r">
                <h2 className="text-[var(--color-muted)]">{exp.timeline}</h2>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-2xl font-bold">{exp.position}</p>
                <p className="text-xl font-semibold text-[var(--color-muted)]">{exp.institution}</p>
                <ul className="list-disc px-6 text-lg text-[var(--color-muted)]">
                  {exp.jobdesk.map((job, i) => (
                    <li key={i} className="mt-2 text-sm leading-relaxed">
                      {job}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm px-2 py-1 bg-[var(--color-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article >
          ))}
        </div>
      </div>
    </div>
  );
}
