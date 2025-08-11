import { useEffect } from 'react';

// src/App.jsx
import { Home } from './Pages/Home';
import { AboutUs } from './Components/AboutUs/AboutUs';
import { MissionVisionValues } from './Components/MissionVisionValues/MissionVisionValues';

import './App.css';

export default function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <MissionVisionValues />
    </>
  )
}