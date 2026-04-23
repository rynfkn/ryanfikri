import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const experiences = [
    {
      position: "Lab Administrator",
      timeline: "Dec 2024 – Mar 2025",
      institution: "Intelligent System & Computing",
      skills: ["AI", "Machine Learning", "Data Science"],
      jobdesk: [
        "Created a course on Unsupervised Learning for lab members.",
        "Participated in community outreach to teach Scratch programming to elementary school students.",
      ],
    },
    {
      position: "Back-End Developer",
      timeline: "Dec 2024 – Mar 2025",
      institution: "Petroleum Integrated Days 2025",
      skills: ["Go", "PostgreSQL", "Git"],
      jobdesk: [
        "Developed and optimized RESTful APIs for event registration and transaction systems.",
      ],
    },
    {
      position: "Front-End Developer",
      timeline: "Dec 2024 – Mar 2025",
      institution: "Future Energy Summit",
      skills: ["Next.js", "TailwindCSS", "Git"],
      jobdesk: [
        "Built responsive user interfaces for event management systems.",
      ],
    },
    {
      position: "Problem Setter",
      timeline: "Aug 2024 – Nov 2024",
      institution: "Schematics National Logic Competition",
      skills: ["Logic", "Mathematics", "Critical Thinking"],
      jobdesk: [
        "Designed complex problem statements for a national-level logic competition.",
        "Tested algorithmic solutions for fairness and difficulty balance.",
        "Collaborated with the academic team to ensure question clarity.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text)] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* Education */}
        <FadeIn>
          <div className="mb-20">
            <h2 className="text-5xl font-light tracking-tight mb-2">Education</h2>
            <div className="h-0.5 w-12 bg-gradient mb-12"></div>

            <div className="relative pl-6">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--color-muted)]/30"></div>

              <div className="space-y-10">
                <div className="relative">
                  <div className="absolute left-[-25px] top-1.5 w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                  <p className="text-xl font-semibold">Sepuluh Nopember Institute of Technology</p>
                  <p className="font-light text-[var(--color-muted)]">Computer Science</p>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1 mb-2">2023 – Present</p>
                  <p className="text-sm text-[var(--color-muted)] font-light">GPA 3.81 · Data Structure & Algorithm, Machine Learning, Web Programming</p>
                </div>

                <div className="relative">
                  <div className="absolute left-[-25px] top-1.5 w-2 h-2 rounded-full bg-[var(--color-primary)]"></div>
                  <p className="text-xl font-semibold">SMA Negeri 3 Samarinda</p>
                  <p className="font-light text-[var(--color-muted)]">Natural Science</p>
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mt-1 mb-2">2020 – 2023</p>
                  <p className="text-sm text-[var(--color-muted)] font-light">GPA 85/100 · Math Club, Physics Club, S3CVI</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Experience accordion */}
        <FadeIn delay={0.1}>
          <div>
            <h2 className="text-5xl font-light tracking-tight mb-2">Experience</h2>
            <div className="h-0.5 w-12 bg-gradient mb-12"></div>

            <div>
              {experiences.map((exp, index) => (
                <div key={index} className="border-b border-[var(--color-muted)]/20">
                  <button
                    className="w-full py-5 flex justify-between items-start text-left cursor-pointer"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`exp-panel-${index}`}
                  >
                    <div>
                      <p className="font-semibold text-lg">{exp.position}</p>
                      <p className="text-sm text-[var(--color-muted)] font-light mt-0.5">
                        {exp.institution} · {exp.timeline}
                      </p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        id={`exp-panel-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6">
                          <ul className="space-y-2 mb-4">
                            {exp.jobdesk.map((job, i) => (
                              <li key={i} className="text-sm text-[var(--color-muted)] font-light leading-relaxed flex gap-3">
                                <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-[var(--color-muted)]/50"></span>
                                {job}
                              </li>
                            ))}
                          </ul>
                          <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">
                            {exp.skills.join(' · ')}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
