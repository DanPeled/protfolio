import { useEffect, useState } from 'react';
import { FaGithub, FaItchIo } from 'react-icons/fa';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

interface AnimatedLetterProps {
  target: string;
  delay: number;
  onAnimationComplete?: () => void;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({
  target,
  delay,
  onAnimationComplete,
}) => {
  const [char, setChar] = useState<string>(
    letters[Math.floor(Math.random() * letters.length)]
  );

  useEffect(() => {
    const startIndex = letters.indexOf(char);
    const targetIndex = letters.indexOf(target);
    if (targetIndex === -1) return;

    const duration = 50 + delay; // total animation time in ms
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1); // 0 → 1
      const lerpIndex = Math.floor(startIndex + (targetIndex - startIndex) * t);
      setChar(letters[lerpIndex % letters.length]);

      if (t < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        onAnimationComplete?.(); // notify when this letter finished
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [char, target, delay, onAnimationComplete]);

  return (
    <span className="inline-block transition-transform duration-150 transform">
      {char}
    </span>
  );
};

export function Home() {
  const name = 'Dan Peled';
  const [lettersDone, setLettersDone] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // when all letters finish
  useEffect(() => {
    if (lettersDone >= name.replace(' ', '').length) {
      // small delay before dropping the content
      const timer = setTimeout(() => setShowContent(true), 50);
      return () => clearTimeout(timer);
    }
  }, [lettersDone, name]);

  return (
    <div className="h-full flex flex-col items-center justify-center p-10 gap-5">
      <h1 className="text-7xl font-extrabold tracking-widest font-mono text-white">
        {name.split('').map((letter, idx) => {
          if (letter === ' ') return <span key={idx}>&nbsp;</span>;
          return (
            <AnimatedLetter
              key={idx}
              target={letter}
              delay={idx * 0.15}
              onAnimationComplete={() => setLettersDone((prev) => prev + 1)}
            />
          );
        })}
      </h1>

      <div
        className={`flex flex-col items-center gap-16 transition-all duration-700 transform ${
          showContent
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-10'
        }`}
      >
        <h2 className="text-lg text-gray-400 text-center">
          I make games, robots, apps and more
        </h2>
        <div className="flex flex-row gap-10">
          <a
            className="transform hover:scale-120 duration-150 transition-transform text-center"
            href="https://github.com/DanPeled"
          >
            <FaGithub
              size={30}
              className="transform hover:scale-125 duration-150 transition-transform"
            />
          </a>
          <a
            className="transform hover:scale-120 duration-150 transition-transform text-center"
            href="https://jeffrygames.itch.io/"
          >
            <FaItchIo
              size={30}
              className="transform hover:scale-125 duration-150 transition-transform"
            />
          </a>
        </div>
        <div className="flex flex-row gap-10">
          <Link to="/about">
            <Button variant="contained" color="secondary">
              About Me
            </Button>
          </Link>
          <Link to="/projects">
            <Button variant="contained" color="secondary">
              Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
