import React from 'react';
import './App.css';
import LandingPage from './landingpage/landingpage';
import { useRef } from 'react';
function App() {
  const ref = useRef<HTMLDivElement | null>(null)
  return (
    <section  className="border" style={{backgroundImage: 'url("./background.svg")'}}>
      <LandingPage/>
    </section>
  );
}

export default App;
