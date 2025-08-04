import React, { useState, useEffect } from 'react';
import '../styles/MoreAboutMe.css';

// Import photo assets
import photo1 from '../assets/1.jpeg';
import photo2 from '../assets/2.jpeg';
import photo3 from '../assets/3.jpg';
import photo4 from '../assets/4.jpeg';
import photo5 from '../assets/5.jpeg';
import photo6 from '../assets/6.jpeg';
import photo7 from '../assets/7.jpeg';
import photo8 from '../assets/8.JPG';
import photo9 from '../assets/9.jpeg';
import photo10 from '../assets/10.jpeg';
import photo11 from '../assets/11.JPG';
import photo12 from '../assets/12.JPG';

// Import event assets
import event1 from '../assets/1e.jpeg';
import event2 from '../assets/2e.jpeg';
import event3 from '../assets/3e.jpeg';
import filmcontest from '../assets/sf.jpeg';

// Import icons
import { FaTimes } from 'react-icons/fa';

const MoreAboutMe = () => {
  // State for photography section
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // State for expandable content in club events section
  const [expandedEvent, setExpandedEvent] = useState(null);
  
  const photos = [
    { id: 1, src: photo1, alt: 'Photography Sample 1' },
    { id: 2, src: photo2, alt: 'Photography Sample 2' },
    { id: 3, src: photo3, alt: 'Photography Sample 3' },
    { id: 4, src: photo4, alt: 'Photography Sample 4' },
    { id: 5, src: photo5, alt: 'Photography Sample 5' },
    { id: 6, src: photo6, alt: 'Photography Sample 6' },
    { id: 7, src: photo7, alt: 'Photography Sample 7' },
    { id: 8, src: photo8, alt: 'Photography Sample 8' },
    { id: 9, src: photo9, alt: 'Photography Sample 9' },
    { id: 10, src: photo10, alt: 'Photography Sample 10' },
    { id: 11, src: photo11, alt: 'Photography Sample 11' },
    { id: 12, src: photo12, alt: 'Photography Sample 12' },
  ];
  
  // Current photo index for the photo shuffle feature
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Sample club events (replace with actual events later)
  const clubEvents = [
    {
      id: 1,
      title: 'Orientation 2024',
      description: 'As the Media Head of Renegade, Me and my team handled the media side of our orientation event for the new batch. We made sure they felt welcomed and understood the purpose and spirit of our community.',
      image: event1,
    },
    {
      id: 2,
      title: 'Cultural Fest Core Team 2025',
      description: 'As part of the Cultural Fest Core Team 2025, our team organized an open event through our community, welcoming everyone to take part and showcase their talents. It was a great experience bringing people together and managing an event that encouraged creativity and participation.',
      image: event2,
    },
    {
      id: 3,
      title: 'Cultural Fest Core Team 2024',
      description: 'As part of the Cultural Fest Core Team 2024, our team organized an open event through our community, welcoming everyone to take part and showcase their talents. It was a great experience bringing people together and managing an event that encouraged creativity and participation.',
      image: event3,
    },
  ];

  // Film contest details
  const filmContest = {
    title: '1st Prize in Short Film Making Contest',
    description: 'In September 2024, our team won 1st Prize in the Short Film Making Contest hosted by Cohort-Jade, recognized for our storytelling and teamwork. It was a proud moment that reflected our dedication to creative expression and collaboration.',
    image: filmcontest,
  };

  // Function to shuffle to the next photo with transition effect
  const nextPhoto = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 20);
    }, 150);
  };

  // Function to shuffle to the previous photo with transition effect
  const prevPhoto = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 20);
    }, 150);
  };
  
  // Toggle expanded event
  const toggleEventExpand = (eventId) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };
  
  // Auto-change photos every 2 seconds
  useEffect(() => {
    const autoChangeInterval = setInterval(() => {
      nextPhoto();
    }, 2000);
    
    // Clear interval on component unmount
    return () => clearInterval(autoChangeInterval);
  }, []);

  return (
    <div className="more-about-me-page">
      <h1 className="page-title">["More About Me"]</h1>
      
      {/* Photography Section */}
      <section className="photography-section">
        <h2 className="section-title">Photography</h2>
        <div className="photography-content">
          <div className="photo-showcase">
            <div className="photo-backdrop"></div>
            <div className="photo-display">
              <img 
                src={photos[currentPhotoIndex].src} 
                alt={photos[currentPhotoIndex].alt} 
                className={`current-photo ${isTransitioning ? 'transitioning' : ''}`} 
              />
              <div className="photo-counter">
                {currentPhotoIndex + 1} / {photos.length}
              </div>
            </div>
            <button className="photo-nav prev" onClick={prevPhoto}>❮</button>
            <button className="photo-nav next" onClick={nextPhoto}>❯</button>
          </div>
          <div className="photography-text">
            <h3>My Photography</h3>
            <p>
              In my free time, I like taking photos of things that catch my eye — places, people, and everyday moments.
It’s a simple way for me to slow down and observe what’s around me.
            </p>
            <p>
              Some of the moments I’ve captured are shared below, each holding a small story of its own.
Photography, for me, is just something I enjoy doing when I get the chance.
            </p>
          </div>
        </div>
        <div className="photo-thumbnails">
          {photos.map((photo, index) => (
            <img 
              key={photo.id}
              src={photo.src}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${index === currentPhotoIndex ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentPhotoIndex(index);
                  setTimeout(() => setIsTransitioning(false), 50);
                }, 300);
              }}
            />
          ))}
        </div>
      </section>
      
      {/* Club Activities Section */}
      <section className="club-section">
        <h2 className="section-title">Renegade's Media Head</h2>
        <p className="section-intro">
          Renegade is a student-led community that brings together creative minds passionate about music, art, and self-expression.
As the Media Head, I help share our work, events, and stories with others, making sure our efforts reach and inspire more students.
Through events, collaborations, and content, we aim to build a space where every voice and talent feels seen and valued.
        </p>
        <div className="events-container">
          {clubEvents.map(event => (
            <div key={event.id} className="event-card">
              <div 
                className="event-card-header" 
                onClick={() => toggleEventExpand(event.id)}
              >
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p className="event-brief">{event.description.substring(0, 80)}...</p>
                </div>
              </div>
              
              {expandedEvent === event.id && (
                <div 
                  className="event-expanded"
                  onClick={() => setExpandedEvent(null)}
                >
                  <div 
                    className="event-expanded-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="expanded-image-container">
                      <img src={event.image} alt={event.title} className="expanded-image" />
                    </div>
                    <div className="expanded-details">
                      <h3>{event.title}</h3>
                      <p>{event.description}</p>
                      <p className="event-role"><strong>My Role:</strong> {event.role || 'Media Head'}</p>
                      <p className="event-date"><strong>Date:</strong> {event.date || 'Nov 2024'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Film Contest Section */}
      <section className="film-section">
        <h2 className="section-title">Short-Film Making Contest</h2>
        <div className="film-content">
          <img src={filmContest.image} alt="Film Contest" className="film-image" />
          <div className="film-details">
            <h3>{filmContest.title}</h3>
            <p>{filmContest.description}</p>
            <div className="achievement-highlight">
              <span className="achievement-badge">1st Place</span>
              <p>JADE Cohort | 1st Prize – Short Film Creator Contest (Delhi).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreAboutMe;