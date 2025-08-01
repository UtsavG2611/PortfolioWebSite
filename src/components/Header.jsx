import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const isMoreAboutMePage = location.pathname === '/more-about-me';

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#experience">Experience</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      {!isMoreAboutMePage && (
        <Link to="/more-about-me" className="more-about-btn">More About Me!</Link>
      )}
    </header>
  );
};

export default Header;