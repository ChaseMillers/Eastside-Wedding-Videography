import React, { useState, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { HamburgerSqueeze } from 'react-animated-burgers'
import './Menu.css';
import useOutsideClick from "./menuHelper"

const Menu = ({ history }) => {

  const [active, setActive] = useState(false);
  const toggleButton = () => setActive(!active);
  const ref = useRef();

  useOutsideClick(ref, () => {
    setActive(false)
  });
  const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#000000' };
    } else {
        return { color: '#a5a5a5' };
    }
  };
  return (
    <div className="header" id="menu-container" ref={ref}>
        <input onChange={e => {}} className="menu-btn" type="checkbox" id="menu-btn" checked={active}/>
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon">
           <HamburgerSqueeze isActive={active} toggleButton={toggleButton} />
           </span>
        </label>

        <ul className="nav">
          <li className="nav-item">
            <Link 
            className="nav-link"  
            style={isActive(history, '/')} 
            to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, '/ourwork')} 
              to="/ourwork"
            >
              Our Work
            </Link>
          </li>
          
          <li className="nav-item">
            <Link 
            className="nav-link"
            style={isActive(history, '/packages')} 
            to="/packages">
              Packages
            </Link>
          </li>

          <li className="nav-item">
          <Link 
            className="nav-link"
            style={isActive(history, '/contact')} 
            to="/contact">
              Contact
          </Link>
          </li>
          
        </ul>
      </div>
  );
};

export default withRouter(Menu);
