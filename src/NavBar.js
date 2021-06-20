import React, { useState, useEffect } from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [navBackgroundColor, showNavBackgroundColor] = useState(false);
  const handleNabarColor = () => {
    if (window.scrollY > 100) {
      showNavBackgroundColor(true);
    } else {
      showNavBackgroundColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNabarColor);

    return () => {
      window.addEventListener('scroll', handleNabarColor);
    }
  }, []);
  return (
    <div className={`nav ${navBackgroundColor && "nav_black "}`}>
      <div className="wrapper nav_content">
        <div className="movies_logo">
          <p>Movies Mach </p>
        </div>
        <div className="profile_logo">
          <img src="https://cdna.artstation.com/p/assets/images/images/023/576/078/original/ying-chen-me-optimize.gif?1579652163" alt="User profile logo" />
        </div>
      </div>
    </div>
  )
}

export default NavBar
