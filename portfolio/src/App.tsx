import React from 'react';
import './App.css';
import LandingPage from './landingpage/landingpage';
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
