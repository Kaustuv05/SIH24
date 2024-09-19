import React from "react";
import Navbar from "../../components/Navbar/Navbar"; // Assuming this is the shared Navbar component
import { MenuList } from "./articlelist";
import MultiplePizzas from '../../assets/image1.png'; 
import MenuItem from "./article.jsx";
import "./book.css";

function Ab() {
  return (
    <div
      className="aboutTop"
      style={{ backgroundImage: `url(${MultiplePizzas})` }}
    >
      <div className="about">
        {/* Add a specific class to differentiate from the home page */}
        <Navbar className="articles-navbar" />

        <div className="aboutBottom">
          <h1>ARTICLES</h1>
          <div className="menu">
            <div className="menuList">
              {MenuList.map((menuItem, key) => (
                <MenuItem
                  key={key}
                  image={menuItem.image}
                  name={menuItem.name}
                  author={menuItem.author}
                  link={menuItem.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ab;