import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-6 bg-background text-body text-center border-t border-primary relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
        <span className="text-sm">&copy; {new Date().getFullYear()} Khyati Kapil. All rights reserved.</span>
        <a
          href="#hero"
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </motion.footer>
  );
}
