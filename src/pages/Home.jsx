import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WelcomeSplash from "../components/WelcomeSplash";

import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";
import profilePic from "../assets/Profile_pict.png";

const roles = [
    "Data Scientist",
    "Machine Learning Enthusiast",
    "AI Engineer",
];

const contactEmail = "ryanfikri.re@gmail.com";
const contactSubject = "Portfolio Contact";

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [currentRole, setCurrentRole] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const currentWord = roles[currentRole];
        const isWordComplete = !isDeleting && displayText === currentWord;
        const isWordDeleted = isDeleting && displayText === "";
        const typingSpeed = isWordComplete ? 1400 : isDeleting ? 45 : 85;

        const timer = setTimeout(() => {
            if (isWordComplete) {
                setIsDeleting(true);
                return;
            }

            if (isWordDeleted) {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length);
                return;
            }

            const nextLength = displayText.length + (isDeleting ? -1 : 1);
            setDisplayText(currentWord.slice(0, nextLength));
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole]);

    return (
        <div className="relative min-h-screen w-full bg-[var(--color-base)] text-[var(--color-text)] overflow-hidden transition-colors duration-300">

            {showWelcome && <WelcomeSplash onComplete={() => setShowWelcome(false)} />}

            {!showWelcome && (
                <div className="flex flex-col lg:flex-row w-full min-h-[90vh] px-6 lg:px-0">
                    <div className="flex items-center justify-center lg:justify-end w-full lg:w-[40%] py-12 lg:py-0">
                        <div className="relative group">
                            <div className="w-[280px] h-auto md:w-[350px] md:h-auto rounded-lg  overflow-hidden">
                                <img
                                    src={profilePic}
                                    alt="profile_pict"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center lg:pl-12 xl:pl-16 w-full lg:w-[60%] text-center lg:text-left">
                        <div className="text-2xl md:text-3xl text-green-400 font-light mb-2">
                            Hello World!
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                            RYAN FIKRI NUGRAHA
                        </h1>

                        <div className="flex justify-center lg:justify-start text-2xl md:text-3xl lg:text-4xl text-[var(--color-muted)] font-light mb-8 h-12 md:h-14">
                            <span className="min-w-[18rem] md:min-w-[24rem] lg:min-w-[30rem]">
                                {displayText}
                                <span className="ml-1 inline-block h-8 w-0.5 translate-y-1 bg-[var(--color-primary)] md:h-10" aria-hidden="true" />
                            </span>
                        </div>

                        <p className="text-[var(--color-muted)] text-sm md:text-base lg:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0 animate-fade-in-delay">
                            Passionate about building intelligent systems and exploring the frontiers of artificial intelligence.
                            Turning complex problems into elegant solutions through code.
                        </p>

                        <div className="flex gap-6 pt-2 text-3xl md:text-4xl justify-center lg:justify-start">
                            <a
                                href="https://linkedin.com/in/ryanfkn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-muted)] hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/rynfkn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Visit my GitHub profile"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://instagram.com/rynfkn.re"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--color-muted)] hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Visit my Instagram profile"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://its.id/m/RyanCV2025"
                                target="_blank"
                                className="text-[var(--color-muted)] hover:text-red-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Download CV"
                            >
                                <FaFilePdf />
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <Link
                                to="/projects"
                                className="px-8 py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-medium tracking-wide transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
                            >
                                View Projects
                            </Link>
                            
                            <a
                                href={`mailto:${contactEmail}?subject=${encodeURIComponent(contactSubject)}`}
                                className="px-8 py-3 rounded-lg border border-[var(--color-secondary)] text-[var(--color-secondary)] font-medium tracking-wide transition-all duration-300 hover:bg-[var(--color-secondary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/50"
                            >
                                Contact Me
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
