import { useEffect, useRef, useState } from 'react';
import larry from '../assets/liopleurodon.png';
import ftcautonomousdesigner from '../assets/ftcautonomousdesigner.png';
import scoutingapp from '../assets/scoutingapp.png';
import elasticlogo from '../assets/elastic.png';
import tba from '../assets/tba.webp';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBackRounded } from '@mui/icons-material';

interface Project {
  title: string;
  description: string | JSX.Element;
  image: string;
  github?: string;
  tags: string[];
  additionalLink?: {
    title: string;
    link: string;
  };
  category: string;
  subcategory?: string;
}

const projects: Project[] = [
  {
    title: 'Synapse',
    description: (
      <p>
        A custom dynamic vision processing system <br /> on an FRC Coprocessor
      </p>
    ),
    image: larry,
    github: 'https://github.com/DanPeled/Synapse',
    additionalLink: {
      title: 'CD Post',
      link: 'https://www.chiefdelphi.com/t/synapse-dynamic-vision-processing/505182',
    },
    tags: ['Vision', 'Python', 'OpenCV', 'FRC'],
    category: 'Robotics',
    subcategory: 'Self-Made',
  },
  {
    title: 'Generic Scouting App',
    description: 'Webapp in order to create, collect and manage scouting data',
    image: scoutingapp,
    github: 'https://github.com/DanPeled/Scouting-Tool',
    tags: ['WebApp', 'Flutter', 'Scouting', 'Dart'],
    category: 'Robotics',
    subcategory: 'Self-Made',
  },
  {
    title: 'FTC Autonomous Designer',
    description: 'A Tool to help design autonomous programs in FTC',
    image: ftcautonomousdesigner,
    github: 'https://github.com/DanPeled/FTCAutonomousDesigner',
    tags: ['WebApp', 'JS', 'FTC', 'Autonomous'],
    category: 'Robotics',
    subcategory: 'Self-Made',
  },
  {
    title: 'TBA Discord Bot',
    description: (
      <p>
        Discord Bot to send real-time
        <br /> updates on the israeli teams in worlds
      </p>
    ),
    image: tba,
    github: 'https://github.com/DanPeled/TBA-Discord-Bot',
    tags: ['Discord Bot', 'TS', 'FRC'],
    category: 'Robotics',
    subcategory: 'Self-Made',
  },
  {
    title: 'FTC-Scouting',
    description: <p>Basic scouting form for the PowerPlay 2022-2023 season</p>,
    image: 'unknown',
    github: 'https://github.com/DanPeled/FTC-Scouting',
    tags: ['FTC', 'Scouting', 'Firebase'],
    category: 'Robotics',
    subcategory: 'Self-Made',
  },
  {
    title: 'Python Units Library',
    description: 'A python library for type safe unit specific code',
    image: 'no image',
    github: 'https://github.com/DanPeled/unitslib',
    tags: ['Python'],
    category: 'Robotics',
    subcategory: 'Self-Made',
  },
  {
    title: 'Elastic Dashboard',
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
    github: 'https://github.com/Gold872/elastic-dashboard',
    tags: ['Desktop App', 'FRC', 'Flutter', 'Dart'],
    category: 'Robotics',
    subcategory: 'Contributed To',
  },
  {
    title: 'AutoPilot',
    description: (
      <p>
        A simple but powerful solution for autonomous navigation <br /> with a
        holonomic drivetrain. <br />
        Made a C++ rewrite of it
      </p>
    ),
    image: 'no image',
    github: 'https://github.com/DanPeled/AutopilotCPP',
    tags: ['Java', 'C++', 'FRC', 'Autonomous'],
    category: 'Robotics',
    subcategory: 'Contributed To',
  },
  {
    title: 'YALL',
    description: (
      <p>
        an improved version of the LimelightHelpers
        <br /> script released by LimelightVision. <br />
        Made Python variation
      </p>
    ),
    image: 'no image',
    github: 'https://github.com/Yet-Another-Software-Suite/YALL',
    tags: ['Python', 'FRC', 'Vision', 'YASS'],
    category: 'Robotics',
    subcategory: 'Contributed To',
  },
  {
    title: 'WoopWoop 2.0',
    description: <p>Basic Game Engine in C++ with editor and an ECS</p>,
    image: 'no image',
    github: 'https://github.com/DanPeled/WoopWoop2.0-CPP',
    tags: ['C++', 'ImGui', 'SFML'],
    category: 'Game Dev',
    subcategory: 'Self-Made',
  },
  {
    title: 'TEG Engine',
    description: <p>TUI Based Game Engine</p>,
    image: 'no image',
    github: 'https://github.com/DanPeled/TEG-Engine',
    tags: ['C++', 'Terminal'],
    category: 'Game Dev',
    subcategory: 'Self-Made',
  },
  {
    title: 'Hexmone',
    description: 'A Pokemon fangame',
    image:
      'https://github.com/DanPeled/Hexmone/blob/master/Assets/Art/Creatures/Front/Pum.png?raw=true',
    github: 'https://github.com/DanPeled/Hexmone',
    tags: ['Unity', 'C#', 'Unfinished', 'Pokemon'],
    category: 'Game Dev',
    subcategory: 'Self-Made',
    additionalLink: {
      title: 'Itch.io Page',
      link: 'https://jeffrygames.itch.io/hexmone',
    },
  },
  {
    title: 'Brickolli',
    description: 'A rage-bait platformer',
    image: 'https://img.itch.zone/aW1nLzg5MTQ5NjAuZ2lm/original/mUyq50.gif',
    tags: ['Construct 2', 'Platformer', 'Visual Scripting'],
    category: 'Game Dev',
    subcategory: 'Self-Made',
    additionalLink: {
      title: 'Itch.io Page',
      link: 'https://jeffrygames.itch.io/brickolli',
    },
  },
  {
    title: 'Steak-O-Run',
    description: (
      <p>
        Steak-Based endless platformer
        <br />
        For the GameDev.js 2022 Game Jam "<strong>Raw</strong>" <br />
        Rewarded 13th place in the Theme Category
      </p>
    ),
    image: 'https://img.itch.zone/aW1nLzg3MjczODEucG5n/original/GwK4ag.png',
    tags: ['Construct 2', 'Platformer', 'Visual Scripting'],
    category: 'Game Dev',
    subcategory: 'Game Jams',
    additionalLink: {
      title: 'Itch.io Page',
      link: 'https://jeffrygames.itch.io/steak-o-run',
    },
  },
  {
    title: 'Duckenaitor',
    description: (
      <p>
        Duck destruction
        <br />
        For the My First Game Jam: Summer 2022 Game Jam
      </p>
    ),
    image: 'https://img.itch.zone/aW1nLzk0MzIxNTQucG5n/347x500/CXgJ2M.png',
    tags: ['Unity', 'C#'],
    category: 'Game Dev',
    subcategory: 'Game Jams',
    additionalLink: {
      title: 'Itch.io Page',
      link: 'https://jeffrygames.itch.io/duckenaitor',
    },
  },
  {
    title: 'Time-TD',
    description: (
      <p>
        Time-Related Tower Defense
        <br />
        For the GameDev.js 2023 Game Jam
      </p>
    ),
    image:
      'https://img.itch.zone/aW1hZ2UvMjAzNTIwMC8xMTk3MDQ1NC5wbmc=/347x500/WQi0P4.png',
    tags: ['Unity', 'C#', 'Tower Defense'],
    github: 'https://github.com/DanPeled/GameDevJS2023Jam/',
    category: 'Game Dev',
    subcategory: 'Game Jams',
    additionalLink: {
      title: 'Itch.io Page',
      link: 'https://jeffrygames.itch.io/time-td',
    },
  },
  {
    title: 'Absurd Unit Converter',
    description: 'Unit converter between random units of weight and scale',
    image: 'unknown',
    github: 'https://github.com/DanPeled/Absurd-Unit-Converter',
    category: 'Web-Dev',
    tags: ['HTML', 'Pure JS'],
    additionalLink: {
      title: 'Github Pages',
      link: 'https://danpeled.github.io/Absurd-Unit-Converter/',
    },
  },
  {
    title: 'MemeWebsite',
    description: 'Gives out random memes',
    image:
      'https://danpeled.github.io/MemeWebsite/memes/Screenshot%202023-07-22%20183859.png',
    github: 'https://github.com/DanPeled/MemeWebsite',
    category: 'Web-Dev',
    tags: ['HTML', 'Pure JS'],
    additionalLink: {
      title: 'Github Pages',
      link: 'https://danpeled.github.io/MemeWebsite/',
    },
  },
  {
    title: 'Firebase Storage API',
    description: 'Usage of firebase as a storage space',
    image: 'unknown',
    github: 'https://github.com/DanPeled/Firebase-storage-API',
    category: 'Web-Dev',
    tags: ['HTML', 'Pure JS', 'Firebase'],
  },
  {
    title: 'Chess Engine',
    description: 'Full Chess Engine written in C++ with TUI',
    image: 'unknown',
    category: 'Other',
    github: 'https://github.com/DanPeled/ChessEngineCPP',
    tags: ['C++', 'Chess', 'Terminal'],
  },
  {
    title: 'Dumbness--',
    description: 'Basic programming language written in Python',
    image: 'unknown',
    category: 'Other',
    github: 'https://github.com/DanPeled/Dumbness--',
    tags: ['Python', 'Languages'],
  },
];

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const categoryRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    // Observe cards for fade-in animation
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.getAttribute('data-title');
            if (title) {
              setVisibleCards((prev) => new Set(prev).add(title));
              cardObserver.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => cardObserver.observe(el));

    // Observe categories for menu highlight
    const categoryObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setCurrentCategory(visible[0].target.id);
        }
      },
      { threshold: 0.4 }
    );

    categoryRefs.current.forEach((el) => categoryObserver.observe(el));

    return () => {
      cardObserver.disconnect();
      categoryObserver.disconnect();
    };
  }, []);

  // Example: your groupedProjects definition here
  const groupedProjects = projects.reduce(
    (acc: Record<string, Record<string, Project[]>>, project) => {
      const cat = project.category;
      const sub = project.subcategory || '';
      if (!acc[cat]) acc[cat] = {};
      if (!acc[cat][sub]) acc[cat][sub] = [];
      acc[cat][sub].push(project);
      return acc;
    },
    {}
  );

  const categories = Object.keys(groupedProjects);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sticky menu */}
      <aside className="w-56 pt-12 p-4 sticky top-0 h-screen bg-gray-800 border-r border-gray-700">
        <nav className="space-y-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${cat}`}
              className={`block px-3 py-2 rounded transition ${
                currentCategory === cat
                  ? 'bg-green-600 text-white font-bold'
                  : 'hover:bg-gray-700'
              }`}
            >
              {cat}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-8 py-16">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl transition-colors ease-out duration-150 hover:text-green-500"
        >
          <ArrowBackRounded /> Back
        </Link>

        {Object.entries(groupedProjects).map(([category, subcategories]) => (
          <div
            id={category}
            key={category}
            ref={(el) => {
              if (el) categoryRefs.current.set(category, el);
            }}
            className="mb-16 scroll-mt-20"
          >
            <h1 className="text-5xl font-extrabold mb-8 text-center md:text-left">
              {category}
            </h1>

            {Object.entries(subcategories).map(([sub, subProjects]) => (
              <div key={sub} className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-green-400">
                  {sub}
                </h2>
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
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-12'
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
                              className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium"
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
                          {project.additionalLink && (
                            <a
                              href={project.additionalLink.link}
                              target="_blank"
                              className="inline-block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded font-semibold transition-colors cursor-pointer"
                            >
                              {project.additionalLink.title}
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
      </main>
    </div>
  );
}
