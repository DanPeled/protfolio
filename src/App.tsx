import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './pages/about';
import { Home } from './pages/home';
import { Projects } from './pages/projects';

export default function App() {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex-1 flex items-center justify-center bg-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}
