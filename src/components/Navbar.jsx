import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-4 w-full z-40 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm rounded-full px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-cantata text-xl font-semibold text-gray-800 dark:text-gray-100 hover:text-sky-400">
            Andrew Yeung
          </Link>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-800 dark:text-gray-100"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-cantata text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors">
              Home
            </Link>

            <Link to="/projects" className="font-cantata text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors">
              Projects
            </Link>

            <a
              href="AYResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cantata text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors"
            >
              Resume
            </a>

            <Link to="/contact" className="font-cantata text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors">
              Contact
            </Link>

            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};