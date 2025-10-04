import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

export const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: '"JetBrains Mono", "Fira Code", "Source Code Pro", "Consolas", "Monaco", monospace', letterSpacing: '0.1em', fontWeight: '600' }}>
            Petros Asegid
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
