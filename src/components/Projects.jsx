import React from 'react';
import '../styles/Projects.css';
import project1 from '../assets/ccss.png';
import project2 from '../assets/cmss.png';
import project3 from '../assets/portss.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ChitChat (Chat WebApp)',
      description: 'ChitChat is a real-time chat web app built with a clean full-stack architecture, offering secure authentication, 1-to-1 messaging, media sharing, and a responsive UI — all powered by Socket.io, Redux, and MongoDB.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
      image: project1,
      liveLink: '#',
      codeLink: 'https://github.com/UtsavG2611/ChitChat-Chat_WebApp',
    },
    {
      id: 2,
      title: 'Cold Email Generator',
      description: 'This Cold Email Generator is an AI-powered web app that crafts personalized outreach emails using resume and company info, built with Streamlit, Python, and a vector database for smart matching.',
      technologies: ['Python', 'Streamlit', 'GrokAI', 'LLMs'],
      image: project2,
      liveLink: '#',
      codeLink: 'https://github.com/UtsavG2611/Cold-Email-Generator',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'My portfolio website is a fast, lightweight, and responsive single-page site built with React.js, Vite, and vanilla JavaScript — showcasing my projects, skills, and journey in a clean, modern layout.',
      technologies: ['React.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3'],
      image: project3,
      liveLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                  </a>
                  <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>View Code</span>
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;