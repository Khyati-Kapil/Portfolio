import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-background text-body flex flex-col items-center"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8 text-center">Contact</h2>
        <div className="bg-background/80 shadow-glass border border-secondary rounded-glass p-8 mb-6">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off" noValidate>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-background/60 border border-primary rounded-lg px-4 py-3 text-body focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-background/60 border border-primary rounded-lg px-4 py-3 text-body focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              className="bg-background/60 border border-primary rounded-lg px-4 py-3 text-body min-h-[120px] focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold shadow-lg hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={submitted}
            >
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-primary text-primary hover:bg-primary hover:text-white transition-colors shadow-glass focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors shadow-glass focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
