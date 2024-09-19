// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and routing components
import App from './App.jsx';
import PlayGames from './components/pages/playgames.jsx'; 
import Articles from './components/pages/articles.jsx'; // Import your page components
import './index.css';

// Define a Main component that wraps the App with Router
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/playgames" element={<PlayGames />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
};

// Render the Main component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
