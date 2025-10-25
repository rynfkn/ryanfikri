import { useEffect, useState } from "react";
import WelcomeSplash from "../components/WelcomeSplash";

import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";
import profilePic from "../assets/Profile_pict.png";

export default function Home() {
    const [showWelcome, setShowWelcome] = useState(true);
    const [currentRole, setCurrentRole] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");

    const roles = [
        "AI Engineer",
        "Software Engineer",
        "Data Scientist",
        "Machine Learning Enthusiast"
    ];

    useEffect(() => {
        const currentWord = roles[currentRole];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                }
                else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }
            else {
                if (displayText.length > 0) {
                    setDisplayText(currentWord.slice(0, displayText.length - 1));
                }
                else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole, roles]);

    return (
        <div className="relative min-h-screen w-full bg-[#121212] text-white overflow-hidden">

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

                        <div className="flex justify-center lg:justify-start text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mb-8 h-12 md:h-14">
                            {displayText}
                        </div>

                        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0 animate-fade-in-delay">
                            Passionate about building intelligent systems and exploring the frontiers of artificial intelligence.
                            Turning complex problems into elegant solutions through code.
                        </p>

                        <div className="flex gap-6 pt-2 text-3xl md:text-4xl justify-center lg:justify-start">
                            <a
                                href="https://linkedin.com/in/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Visit my LinkedIn profile"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Visit my GitHub profile"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://instagram.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Visit my Instagram profile"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="/Ryan_Fikri_CV.pdf"
                                download
                                className="text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
                                aria-label="Download CV"
                            >
                                <FaFilePdf />
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                            <button
                                className="px-8 py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)]
               font-medium tracking-wide transition-all duration-300
               hover:bg-[var(--color-primary)] hover:text-white
               focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50"
                            >
                                View Projects
                            </button>

                            <button
                                className="px-8 py-3 rounded-lg border border-[var(--color-secondary)] text-[var(--color-secondary)]
               font-medium tracking-wide transition-all duration-300
               hover:bg-[var(--color-secondary)] hover:text-white
               focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/50"
                            >
                                Contact Me
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}