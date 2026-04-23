import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navlinks = [
  { name: "Profile", href: "/", end: true },
  { name: "Experience", href: "/experiences", end: false },
  { name: "Achievements", href: "/achievements", end: false },
  { name: "Projects", href: "/projects", end: false },
  { name: "Gallery", href: "/gallery", end: false },
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light');
    } else {
      root.classList.add('light');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-16 py-4 bg-[var(--color-base)]/95 text-[var(--color-text)] border-b border-[var(--color-muted)]/15 backdrop-blur-sm transition-colors duration-300">

      <Link to="/" className="text-xl font-bold select-none tracking-tight">
        Ry.
      </Link>

      <div className="hidden lg:flex gap-10">
        {navlinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            end={link.end}
            className={({ isActive }) =>
              `text-xs uppercase tracking-widest font-light transition-colors duration-300 pb-0.5 ${
                isActive
                  ? 'text-[var(--color-text)] border-b border-[var(--color-primary)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDarkMode(prev => !prev)}
          className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
        </button>

        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="lg:hidden text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
          title={menuOpen ? "Close menu" : "Open menu"}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[var(--color-base)]/95 border-t border-[var(--color-muted)]/20 flex flex-col items-center gap-6 py-8 lg:hidden transition-colors duration-300">
          {navlinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest font-light transition-colors duration-300 pb-0.5 ${
                  isActive
                    ? 'text-[var(--color-text)] border-b border-[var(--color-primary)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
