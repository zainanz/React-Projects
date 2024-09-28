import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './landingpage/landingpage';
import AboutMe from "./aboutme/aboutme"
import { useRef } from 'react';
function App() {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <section className="border h-full">
      <LandingPage element={ref} />
    </section>
  );
}

export default App;
