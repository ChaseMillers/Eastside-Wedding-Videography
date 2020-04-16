import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HamburgerSqueeze } from 'react-animated-burgers'
import './Menu.css';
import useOutsideClick from "./menuHelper"

const Menu = () => {

  const [active, setActive] = useState(false);
  const toggleButton = () => setActive(!active);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setActive(false)
  });
  return (
    <div className="header" id="menu-container" onBlur="toggleButton" ref={ref}>
        <input className="menu-btn" type="checkbox" id="menu-btn" checked={active}/>
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon">
           <HamburgerSqueeze isActive={active} toggleButton={toggleButton} />
           </span>
        </label>

        <ul className="nav">
          <li className="nav-item">
            <Link 
            className="nav-link"  
            to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/ourwork"
            >
              Our Work
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
            className="nav-link"
            to="/packages">
              Packages
            </Link>
          </li>

          <li className="nav-item">
          <Link 
            className="nav-link"
            to="/">
              Contact
            </Link>
          </li>
          
        </ul>
      </div>
  );
};

export default Menu;
