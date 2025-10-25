import { FaRegImages, FaRobot, FaSun, FaMoon } from "react-icons/fa";
import {
    Image, Sun, Moon, Briefcase, Award, FolderOpen, Home as HomeIcon, Menu,
    X,
} from "lucide-react";

import { useState } from "react";
import { a, div, link } from "framer-motion/client";

export default function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    const navlinks = [
        { name: "Profile", href: "/", icon: HomeIcon },
        { name: "Experience", href: "/experiences", icon: Briefcase },
        { name: "Achievements", href: "/achievements", icon: Award },
        { name: "Projects", href: "/projects", icon: FolderOpen },
    ];

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    const LinkIcon = isDarkMode ? Moon : Sun;

    return (
        <nav className="sticky top-0 z-30 flex items-center justify-evenly px-4 sm:px-10 py-4 bg-[#121212]/95 text-white ring-1 ring-white/5 backdrop-blur-sm">

            <div className="text-2xl font-extrabold select-none">
                Ry.
            </div>

            <div className="hidden lg:flex gap-8 text-md font-semibold tracking-wide">
                {navlinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative group text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        {link.name}
                        <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-6 text-xl">
                <a
                    href="/gallery"
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
                    title="Gallery"
                >
                    <Image size={20} />
                </a>

                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300 active:scale-95"
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                </button>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition duration-300"
                    title="Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#121212]/95 border-t border-gray-800 flex flex-col items-center gap-6 py-6 lg:hidden animate-slide-down">
                    {navlinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center gap-3 text-gray-300 hover:text-white text-lg transition-all duration-200"

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