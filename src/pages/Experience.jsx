import { FaGraduationCap } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      position: "Lab Administrator",
      timeline: "Dec 2024 - Mar 2025",
      institution: "Intelegent System & Computing",
      skills: ["AI", "Machine Learning", "Data Science"],
      jobdesk: [
        "Developed and optimized RESTful APIs for event registration and transaction systems.",
        "Integrated backend services with PostgreSQL and handled database schema design.",
        "Collaborated with frontend team to ensure seamless data flow.",
      ],
    },
    {
      position: "Back-End Developer",
      timeline: "Dec 2024 - Mar 2025",
      institution: "Petroleum Integrated Days 2025",
      skills: ["Go", "PostgreSQL", "Git"],
      jobdesk: [
        "Developed and optimized RESTful APIs for event registration and transaction systems.",
        "Integrated backend services with PostgreSQL and handled database schema design.",
        "Collaborated with frontend team to ensure seamless data flow.",
      ],
    },
    {
      position: "Front-End Developer",
      timeline: "Dec 2024 - Mar 2025",
      institution: "Future Energy Summit",
      skills: ["Next.js", "TailwindCSS", "Git"],
      jobdesk: [
        "Built responsive user interfaces for event management systems.",
        "Integrated APIs for real-time schedule and participant updates.",
        "Implemented reusable UI components and improved site accessibility.",
      ],
    },
    {
      position: "Problem Setter",
      timeline: "Aug 2024 - Nov 2024",
      institution: "Schematics National Logic Competition",
      skills: ["Logic", "Mathematics", "Critical Thinking"],
      jobdesk: [
        "Designed complex problem statements for national-level competition.",
        "Tested algorithmic solutions for fairness and difficulty balance.",
        "Worked with academic team to ensure question clarity.",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-6 text-white bg-[#121212]">

      <div className="w-full max-w-5xl mb-16">
        <div className='items-center mb-10 border-b pb-4'>
          <h1 className="text-4xl font-bold text-gradient">
            EDUCATION
          </h1>
          <p className='text-lg italic text-gray-400'>Scientia, Art et Virtute</p>
        </div>

        <div className='relative pl-8 md:pl-12'>
          <div className='absolute left-[15px] md:left-[23px] top-0 bottom-0 w-1 bg-[var(--color-primary)]'></div>
          <div className='space-y-12'>

            <div className='relative'>
              <div className='absolute left-[-32px] md:left-[-40px] top-0 w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center'>
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <div className='ml-4 mb-4'>
                <h1 className='text-2xl font-bold leading-tight text-[var(--color-primary)]'>Computer Science</h1>
                <p className="text-xl font-semibold mt-1">Sepuluh Nopember Institute of Technology</p> <p className="text-sm text-gray-500 italic mb-3">2023 - Present</p>
              
                <p className="text-base mt-2"> <span className="font-medium">GPA:</span> 3.81/4 </p>

                <p className="text-base"> <span className=''>Cousework:</span> Data Structure & Algorithm, Machine Learning, Web Programming </p>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute left-[-32px] md:left-[-40px] top-0 w-9 h-9 bg-[var(--color-primary)] rounded-full flex items-center justify-center'>
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <div className='ml-4 mb-4'>
                <h1 className='text-2xl font-bold leading-tight text-[var(--color-primary)]'>Natural Science</h1>
                <p className="text-xl font-semibold mt-1">SMA Negeri 3 Samarinda</p> <p className="text-sm text-gray-500 italic mb-3">2020 - 2023</p>
              
                <p className="text-base mt-2"> <span className="font-medium">GPA:</span> 85/100 </p>

                <p className="text-base"> <span className=''>Activities:</span> Math Club, Physics Club, S3CVI </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='w-full max-w-5xl mb-16'>
        <div className='items-center mb-10 border-b pb-4'>
          <h1 className="text-4xl font-bold text-gradient">
            EXPERIENCES
          </h1>
          <p className='text-lg italic text-gray-400'>Deployed knowledge, debugged by reality.</p>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-12'>
          {experiences.map((exp, index) => (

            <div
              key={index}
              className='relative group transition-all duration-500'
            >
              <div className='bg-[#1a1a1a] p-6 rounded-xl border border-gray-800'>
                <h1 className='text-2xl font-bold mb-1'>{exp.position}</h1>
                <p className='text-lg text-gray-300'>{exp.institution}</p>
                <p className='text-sm text-gray-400 mb-4'>{exp.timeline}</p>


                <div className='flex flex-wrap gap-4 pt-4 border-t border-gray-700'>
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='text-sm px-3 py-1 rounded-full bg-[var(--color-primary)]'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className='absolute top-0 left-0 right-0 bg-[#1A1A1A] rounded-xl border hover:border-[var(--color-primary)] p-6 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-500 z-20'>
                <h1 className='text-2xl font-bold mb-1'>{exp.position}</h1>
                <p className='text-lg text-gray-300'>{exp.institution}</p>
                <p className='text-sm text-gray-400 mb-3'>{exp.timeline}</p>

                <div className='mb-4'>

                  <h2
                    className='text-lg font-semibold mb-4 text-[var(--color-primary)]'
                  >
                    Responsibilities:
                  </h2>


                  <ul className='list-disc text-sm pl-5 space-y-2 text-gray-300'>
                    {exp.jobdesk.map((job, i) => (
                      <li
                        key={i}
                        className='leading-relaxed'
                      >
                        {job}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='flex flex-wrap gap-2 pt-2 border-t border-gray-700'>
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className='text-sm px-3 py-1 rounded-full bg-[var(--color-primary)]'
                    >{skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="h-0 group-hover:h-64 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}