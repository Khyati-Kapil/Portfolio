import React, { useState, useEffect } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import CardSpotlight from "./ui/CardSpotlight";

const skills = ["JavaScript", "Python", "React", "CSS"];

export default function About() {
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillIdx, setSkillIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (charIdx < skills[skillIdx].length) {
      const timeout = setTimeout(() => {
        setCurrentSkill((prev) => prev + skills[skillIdx][charIdx]);
        setCharIdx(charIdx + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentSkill("");
        setCharIdx(0);
        setSkillIdx((prev) => (prev + 1) % skills.length);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, skillIdx]);

  return (
    <>
      <section
        id="about"
        className="py-20 px-4 bg-background text-body flex flex-col items-center"
      >
        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 max-w-xl flex flex-col gap-6 pb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4 text-center md:text-left pt-10">
              Hi! I am Khyati Kapil
            </h2>
            <h3 className="text-2xl md:text-xl font-bold text-heading mb-4 text-center md:text-left text-primary">
              A Btech CSE student and Aspiring Developer.
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold text-heading mb-4 text-center md:text-left">
              About Me
            </h2>

            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Curious problem solver with a passion for technology</li>
              <li>Collaborative team player and effective communicator</li>
              <li>Dedicated to accessible, user-centered development</li>
              <li>Fast learner, always exploring new tools and frameworks</li>
            </ul>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CardSpotlight className="rounded-glass p-4 bg-background/70 shadow-glass border border-primary">
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p>
                  B.Tech in Computer Science
                  <br />
                  Newton School of Technology, 2024-present
                </p>
              </CardSpotlight>
            </div>
          </div>
          {/* Right column: Profile photo */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="https://via.placeholder.com/250"
              alt="Profile"
              className="rounded-full shadow-lg max-w-full h-auto border-4 border-primary"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center gap-1 text-secondary text-lg md:text-xl font-mono h-8">
        <span className="sr-only">Skills:</span>
        <span aria-live="polite">{currentSkill}</span>
        <span className="animate-blink">|</span>
      </div>
      <div className="flex justify-center w-full mt-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-secondary transition-shadow duration-300 hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.7)]"
        >
          <FaCloudDownloadAlt /> Download Resume
        </a>
      </div>
    </>
  );
}
