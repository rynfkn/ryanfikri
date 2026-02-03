import { Link } from "react-router-dom";
import {
    Image, Sun, Moon, Briefcase, Award, FolderOpen, Home as HomeIcon, Menu,
    X,
} from "lucide-react";

import { useEffect, useState } from "react";

export default function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true;
    });
    const [menuOpen, setMenuOpen] = useState(false);

    const navlinks = [
        { name: "Profile", href: "/", icon: HomeIcon },
        { name: "Experience", href: "/experiences", icon: Briefcase },
        { name: "Achievements", href: "/achievements", icon: Award },
        { name: "Projects", href: "/projects", icon: FolderOpen },
    ];

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.remove('light');
        }
        else {
            root.classList.add('light');
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const LinkIcon = isDarkMode ? Moon : Sun;

    return (
        <nav className="sticky top-0 z-30 flex items-center justify-evenly px-4 sm:px-10 py-4 bg-[var(--color-base)]/95 text-[var(--color-text)] ring-1 ring-black/5 backdrop-blur-sm transition-colors duration-300">

            <Link
                to='/'
                className="text-2xl font-extrabold select-none">
                Ry.
            </Link>

            <div className="hidden lg:flex gap-8 text-md font-semibold tracking-wide">
                {navlinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative group text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
                    >
                        {link.name}
                        <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-6 text-xl">
                <a
                    href="/gallery"
                    className="p-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-black/10 transition-colors duration-300"
                    title="Gallery"
                >
                    <Image size={20} />
                </a>

                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-black/10 transition-colors duration-300 active:scale-95"
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                </button>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-black/10 transition duration-300"
                    title="Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[var(--color-base)]/95 border-t border-gray-300 dark:border-gray-800 flex flex-col items-center gap-6 py-6 lg:hidden animate-slide-down transition-colors duration-300">
                    {navlinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 text-[var(--color-muted)] hover:text-[var(--color-text)] text-lg transition-all duration-200"

                        >
                            <link.icon size={20} />
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}