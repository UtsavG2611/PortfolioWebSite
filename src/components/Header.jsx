import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const isMoreAboutMePage = location.pathname === '/more-about-me';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><a href="/#about" onClick={closeMenu}>About</a></li>
              <li><a href="/#skills" onClick={closeMenu}>Skills</a></li>
              <li><a href="/#projects" onClick={closeMenu}>Projects</a></li>
              <li><a href="/#experience" onClick={closeMenu}>Experience</a></li>
              <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </div>
          
          {!isMoreAboutMePage && (
            <Link to="/more-about-me" className="more-about-btn" onClick={closeMenu}>
              More About Me!
            </Link>
          )}
          
          <div className="hamburger" onClick={toggleMenu}>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;