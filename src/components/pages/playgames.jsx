import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Keep Link for internal routing
import './PlayGames.css'; // Import the CSS file

const PlayGames = () => {
  useEffect(() => {
    // Adding the Spline script tag dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.23/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const games = [
    { id: 1, name: "Memory Game", link: "memory.html", isExternal: true },
    { id: 2, name: "Quiz", link: "/game-2" },
    { id: 3, name: "Snake and ladders", link: "/game-3" },
    { id: 4, name: "Spin the wheel", link: "/game-4" },
    { id: 5, name: "Card Game", link: "/game-5" },
    { id: 6, name: "Monopoly", link: "/game-6" }
  ];

  return (
    <div className="play-games-page">
      <h1>Play Games Page</h1>
      
      {/* Spline 3D Component */}
      <div className="spline-container">
        <spline-viewer url="https://prod.spline.design/Efx8-dsUnl6vpO9C/scene.splinecode"></spline-viewer>
      </div>
      
      <div className="container">  
        {games.map((game) => (
          <div key={game.id} className="card">
            <h3>{game.name}</h3>
            
            {game.isExternal ? (
              // Use a relative path to link to an external HTML file in the public folder
              <a href={game.link} className="link" target="_self" rel="noopener noreferrer">
                Go to page
              </a>
            ) : (
              // Internal routing for other games
              <Link to={game.link} className="link">Go to page </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayGames;