import React from "react";
import { FaGithub } from "react-icons/fa";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

const projects = [
  {
    title: "Reward Based Donation portal",
    description:
      "A web based Donation portal for old clothes , books etc in exchange of rewards.",
    image: "/1.png",
    tech: ["React", "Javascript", "CSS" , "HTML"],
    github: "https://github.com/Khyati-Kapil/Givehub",
  },
  {
    title: "Pomodoro Timer Webapp",
    description:
      "A Web-based Pomodoro timer to enhance productivity and manage time wisely.",
    image: "/2.png",
    tech: ["React", "CSS", "Javascript"],
    github: "https://github.com/Khyati-Kapil/Pomodoro_timer",
  },
  {
    title: "FoodEaze",
    description:
      "A simple cooking recipes website.",
    image: "/3.png",
    tech: ["HTML", "CSS"],
    github: "https://github.com/vini4721/cookease",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-background text-body flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8 text-center">
          My Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative bg-background/80 rounded-glass shadow-card3d border border-primary hover:scale-105 hover:shadow-2xl transition-transform duration-300 group overflow-hidden"
              style={{ perspective: "800px" }}
            >
              <CardContainer className="inter-var py-10">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[24rem] h-[24rem] rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <img
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      <FaGithub className="inline mr-1" />
                      View on GitHub
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
