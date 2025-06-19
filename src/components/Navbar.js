import React, { useState } from 'react';
import { FaBars, FaTimesCircle } from 'react-icons/fa';

const navLinks = [

  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur shadow-glass border-b border-primary">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-body hover:text-primary transition-colors font-medium focus:outline-none focus:text-secondary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button aria-label="Toggle dark mode" className="hidden md:inline-block p-2 rounded-full hover:bg-primary/20 text-primary">
          {/* Dark mode toggle button content */}
        </button>
        <button
          className="md:hidden p-2 rounded-full text-primary hover:bg-primary/20 focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimesCircle /> : <FaBars />}
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur shadow-glass absolute top-16 left-0 w-full border-b border-primary animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-body text-lg hover:text-primary transition-colors font-medium focus:outline-none focus:text-secondary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            
              
          </ul>
        </div>
      )}
    </nav>
  );
}
