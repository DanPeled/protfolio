import { useEffect, useRef, useState } from "react";
import larry from "../assets/liopleurodon.png";
import ftcautonomousdesigner from "../assets/ftcautonomousdesigner.png";
import scoutingapp from "../assets/scoutingapp.png";
import elasticlogo from "../assets/elastic.png";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import { ArrowBackRounded } from "@mui/icons-material";

interface Project {
  title: string;
  description: string | JSX.Element;
  image: string;
  github?: string;
  tags: string[];
  post?: string;
  category: string;
  subcategory?: string;
}

const projects: Project[] = [
  {
    title: "Synapse",
    description: (
      <p>
        A custom dynamic vision processing system <br /> on an FRC Coprocessor
      </p>
    ),
    image: larry,
    github: "https://github.com/DanPeled/Synapse",
    post: "https://www.chiefdelphi.com/t/synapse-dynamic-vision-processing/505182",
    tags: ["Vision", "Python", "OpenCV", "FRC"],
    category: "Robotics",
    subcategory: "Self-Made",
  },
  {
    title: "Generic Scouting App",
    description: "Webapp in order to create, collect and manage scouting data",
    image: scoutingapp,
    github: "https://github.com/DanPeled/Scouting-Tool",
    tags: ["WebApp", "Flutter", "Scouting", "Dart"],
    category: "Robotics",
    subcategory: "Self-Made",
  },
  {
    title: "FTC Autonomous Designer",
    description: "A Tool to help design autonomous programs in FTC",
    image: ftcautonomousdesigner,
    github: "https://github.com/DanPeled/FTCAutonomousDesigner",
    tags: ["WebApp", "JS", "FTC", "Autonomous"],
    category: "Robotics",
    subcategory: "Self-Made",
  },
  {
    title: "Elastic Dashboard",
    description: (
      <p>
        Driver Dashboard for FRC, added multiple features such as:
        <ul className="list-disc pl-4">
          <li>copy pasting widgets</li>
          <li>style costumization</li>
          <li>developer options</li>
          <li>settings overhaul, widget registration factory</li>
          <li>Robot code communication library</li>
        </ul>
      </p>
    ),
    image: elasticlogo,
    github: "https://github.com/Gold872/elastic-dashboard",
    tags: ["Desktop App", "FRC", "Flutter", "Dart"],
    category: "Robotics",
    subcategory: "Contributed To",
  },
  {
    title: "AutoPilot",
    description: (
      <p>
        A simple but powerful solution for autonomous navigation <br /> with a
        holonomic drivetrain. <br />
        Made a C++ rewrite of it
      </p>
    ),
    image: "no image",
    github: "https://github.com/DanPeled/AutopilotCPP",
    tags: ["Java", "C++", "FRC", "Autonomous"],
    category: "Robotics",
    subcategory: "Contributed To",
  },
];

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute("data-title");
            if (title) {
              setVisibleCards((prev) => new Set(prev).add(title));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const groupedProjects = projects.reduce(
    (acc: Record<string, Record<string, Project[]>>, project) => {
      const cat = project.category;
      const sub = project.subcategory || "Other";
      if (!acc[cat]) acc[cat] = {};
      if (!acc[cat][sub]) acc[cat][sub] = [];
      acc[cat][sub].push(project);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen px-8 py-16 bg-gray-900 text-white">
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl transition-colors ease-out duration-150 hover:text-green-500"
      >
        <ArrowBackRounded /> Back
      </Link>
      {Object.entries(groupedProjects).map(([category, subcategories]) => (
        <div key={category} className="mb-16">
          <h1 className="text-5xl font-extrabold mb-8 text-center md:text-left">
            {category}
          </h1>

          {Object.entries(subcategories).map(([sub, subProjects]) => (
            <div key={sub} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-green-400">{sub}</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {subProjects.map((project) => (
                  <div
                    key={project.title}
                    data-title={project.title}
                    ref={(el) => {
                      if (el) cardRefs.current.set(project.title, el);
                    }}
                    className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-400 ease-out transform ${
                      visibleCards.has(project.title)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    } hover:scale-105`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="gap-2 flex-row flex justify-center pt-2 pb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-green-500 text-black px-2 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="gap-2 flex-row flex justify-center">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold transition-colors"
                          >
                            GitHub
                          </a>
                        )}
                        {project.post && (
                          <a
                            href={project.post}
                            target="_blank"
                            className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold transition-colors cursor-pointer"
                          >
                            Post
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
