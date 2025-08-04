import React, { useState, useEffect, useRef } from 'react';
import '../styles/About.css';
import profileImage from '../assets/ProfilePic.jpeg';

const About = () => {
  const titles = ["Software Developer.", "Gen AI Learner.", "Data Analyst.", "Full Stack Developer."];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isStarted, setIsStarted] = useState(false);
  
  // ID Card animation reference
  const idCardRef = useRef(null);
  
  // Handle mouse movement for ID card interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!idCardRef.current) return;
      
      const cardRect = idCardRef.current.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      // Calculate distance from mouse to card center
      const distanceX = e.clientX - cardCenterX;
      const distanceY = e.clientY - cardCenterY;
      
      // Calculate distance ratio for more natural movement
      const mouseDistanceX = Math.min(Math.max(distanceX / (window.innerWidth / 2), -1), 1);
      const mouseDistanceY = Math.min(Math.max(distanceY / (window.innerHeight / 2), -1), 1);
      
      // Calculate rotation based on mouse position with damping
      const maxRotation = 15; // Maximum rotation in degrees
      const rotationY = mouseDistanceX * maxRotation;
      const rotationX = -mouseDistanceY * maxRotation / 2; // Less rotation on X axis
      
      // Apply rotation with smooth transition
      if (idCardRef.current) {
        // Apply 3D transform with slight movement for parallax effect
        idCardRef.current.style.transform = `
          rotateY(${rotationY}deg) 
          rotateX(${rotationX}deg) 
          translateZ(10px)
        `;
        
        // Add subtle shadow changes based on rotation
        const shadowBlur = 25 + Math.abs(rotationY) * 0.5;
        const shadowX = rotationY * 0.5;
        const shadowY = rotationX * 0.5 + 10;
        idCardRef.current.style.boxShadow = `
          ${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.2),
          0 5px 10px rgba(0, 0, 0, 0.1)
        `;
      }
    };
    
    // Add mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Initial delay before starting the animation
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, 1000);
    
    return () => clearTimeout(startTimeout);
  }, []);
  
  useEffect(() => {
    if (!isStarted) return;
    
    const currentTitle = titles[currentTitleIndex];
    
    const timeout = setTimeout(() => {
      // Typing effect
      if (!isDeleting && displayText.length < currentTitle.length) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100); // Normal typing speed
      } 
      // Pause at the end of typing before starting to delete
      else if (!isDeleting && displayText.length === currentTitle.length) {
        setIsDeleting(true);
        setTypingSpeed(1500); // Longer pause before deleting
      }
      // Deleting effect
      else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } 
      // Move to next title after deleting
      else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setTypingSpeed(500); // Longer pause before typing next word
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles, typingSpeed, isStarted]);
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* <h2 className="section-title">About Me</h2> */}
        <div className="about-content">
          <div className="about-text">
            <div className="personal-info">
              <h1 className="name">Utsav Gupta</h1>
              <p className="title">[<span className="typing-text">{displayText}</span><span className="cursor">|</span>]</p>
              <div className="header-buttons">
                <div className="main-buttons">
                  <a href="#contact" className="btn primary-btn">Contact Me</a>
                  <a href="https://drive.google.com/file/d/1qAr-RqDhD6Pe-g4MCAxq9AcBc3xO7pPS/view?usp=sharing" className="btn secondary-btn">Download CV</a>
                </div>
                <div className="social-buttons">
                  <a href="https://www.linkedin.com/in/utsavgupta26/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/UtsavG2611" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <p>
              Hi, I’m Utsav Gupta — a developer who enjoys building clean, thoughtful digital experiences. I like solving real problems and turning ideas into something useful and easy to use.
            </p>
            <p>
              I’ve spent the last few years learning how things work on the web — from how they look to how they function. I enjoy picking up new tools and figuring out better ways to do things.
            </p>
            <p>
              Apart from tech, I’ve been part of creative and leadership roles that helped me grow as a communicator, a team player, and someone who enjoys taking initiative.
            </p>
          </div>
          <div className="id-card-container">
            <div className="id-card-string"></div>
            <div 
              className="profile-image-container id-card" 
              ref={idCardRef}
              // Initial style will be overridden by the mousemove effect
              style={{}}
            >
              <div className="id-card-header">
                <div className="id-card-logo">ID CARD</div>
                <div className="id-card-hole"></div>
              </div>
              <img src={profileImage} alt="Profile" className="profile-image" />
              <div className="id-card-details">
                <h3>Utsav Gupta</h3>
                {/* <p>Software Developer</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;