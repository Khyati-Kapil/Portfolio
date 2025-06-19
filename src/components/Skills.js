import React from 'react';
import { FaJs, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const skills = [
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 90 },
  { name: 'Python', icon: <FaPython className="text-blue-400" />, level: 80 },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 85 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-400" />, level: 95 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 80 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-background text-body flex flex-col items-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-3 bg-background/80 rounded-glass shadow-glass p-4 border border-secondary transition-shadow duration-300 hover:shadow-[0_0_25px_10px_rgba(59,130,246,0.7)]"
            >
              <div className="text-4xl mb-1">{skill.icon}</div>
              <span className="font-semibold text-heading">{skill.name}</span>
              {/* <div className="w-full bg-secondary/10 rounded-full h-2 mt-2"> */}
                {/* <div
                  className="bg-secondary h-2 rounded-full shadow-sm"
                  
                ></div> */}
              {/* </div> */}
              {/* <span className="text-xs text-secondary mt-1">{skill.level}%</span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
