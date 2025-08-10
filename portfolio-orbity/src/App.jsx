import { useEffect } from 'react';

// src/App.jsx
import { Home } from './Pages/Home';
import { AboutUs } from './Components/AboutUs/AboutUs';

import './App.css';

export default function App() {
    useEffect(() => {
      const aboutSection = document.getElementById("about");

      const handleWheel = (e) => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          if (!aboutSection) return;

          // Scroll para baixo
          if (e.deltaY > 0 && scrollY < windowHeight / 2) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
          }

          // Scroll para cima
          if (e.deltaY < 0 && scrollY >= windowHeight / 2) {
              window.scrollTo({ top: 0, behavior: "smooth" });
          }
      };

      window.addEventListener("wheel", handleWheel, { passive: true });

      return () => {
          window.removeEventListener("wheel", handleWheel);
      };
  }, []);

  return (
    <>
      <Home />
      <AboutUs />
    </>
  )
}