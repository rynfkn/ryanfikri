import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WelcomeSplash from "../components/WelcomeSplash";
import FadeIn from "../components/FadeIn";
import { FaLinkedin, FaGithub, FaInstagram, FaFilePdf } from "react-icons/fa";
import profilePic from "../assets/Profile_pict.png";

const ROLES = [
  "AI Engineer",
  "Software Engineer",
  "Data Scientist",
  "Machine Learning Enthusiast",
];

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = ROLES[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <div className="relative min-h-screen w-full bg-[var(--color-base)] text-[var(--color-text)] transition-colors duration-300">
      {showWelcome && <WelcomeSplash onComplete={() => setShowWelcome(false)} />}

      {!showWelcome && (
        <FadeIn>
          <div className="max-w-3xl mx-auto px-6 py-24">
            <img
              src={profilePic}
              alt="Ryan Fikri Nugraha"
              className="w-16 h-16 rounded-full object-cover mb-10"
            />

            <h1 className="text-6xl md:text-7xl font-light tracking-tight leading-none mb-4">
              RYAN FIKRI<br />NUGRAHA
            </h1>

            <div className="font-mono text-[var(--color-muted)] text-lg mb-6 h-7">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>

            <p className="font-light text-base text-[var(--color-muted)] leading-relaxed max-w-lg mb-10">
              Passionate about building intelligent systems and exploring the frontiers of artificial intelligence.
            </p>

            <p className="text-xs uppercase tracking-widest text-[var(--color-muted)] mb-10">
              Python · PyTorch · Go · Next.js · React
            </p>

            <div className="flex gap-5 text-xl text-[var(--color-muted)] mb-10">
              <a href="https://linkedin.com/in/ryanfkn" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/rynfkn" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://instagram.com/rynfkn.re" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://its.id/m/RyanCV2025" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="Download CV">
                <FaFilePdf />
              </a>
            </div>

            <div className="flex gap-8">
              <Link
                to="/projects"
                className="text-xs uppercase tracking-widest font-medium border-b border-[var(--color-primary)] pb-0.5 text-[var(--color-primary)] hover:opacity-70 transition-opacity"
              >
                View Projects
              </Link>
              <a
                href="mailto:ryanfikri.re@gmail.com"
                className="text-xs uppercase tracking-widest font-medium border-b border-[var(--color-secondary)] pb-0.5 text-[var(--color-secondary)] hover:opacity-70 transition-opacity"
              >
                Contact Me
              </a>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
