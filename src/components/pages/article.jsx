import React from "react";

function MenuItem({ image, name, author, link }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})`, height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h1>{name}</h1>
      <h3>{author}</h3>
      <div className="button-container">
        <a href={link} className="button-link" target="_blank" rel="noopener noreferrer">
          Go to Page
        </a>
      </div>
    </div>
  );
}

export default MenuItem;
