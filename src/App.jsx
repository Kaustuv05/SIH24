import React, { useEffect, useState } from "react";

import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// Import Hero component
// Import Play component

const App = () => {
  const heroData = [
    { text1: "Constitution ", text2: " of India" },
    { text1: "Constitution ", text2: " of India" },
    { text1: "Constitution ", text2: "of India" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % 3);
    }, 3000); // Set the interval duration as needed
  
    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []); // Add dependencies if needed
  
  return (
   
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      
  );
};

export default App;