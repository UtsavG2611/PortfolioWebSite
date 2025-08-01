import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: 'App Modernization Internship',
      company: 'Celebal Technologies',
      duration: 'May 2024 – Jul 2024',
      description: [
        'Successfully completed the App Modernization Internship 2024 at Celebal Technologies.',
        'Gained hands-on experience in Technologies used in the organization.',
        'Awarded a 2-month internship completion certificate.'
      ],
      technologies: ['Cloud', 'MongoDB', 'Material UI', 'Git']
    },
    {
      id: 2,
      position: 'ServiceNow Training',
      company: 'JECRC College',
      duration: 'Jan 2025 – Jan 2025',
      description: [
        'Completed a 20-day hands-on training on the ServiceNow platform to develop foundational knowledge and practical skills.'
      ],
      technologies: ['ServiceNow Instance']
    },
    {
      id: 3,
      position: 'Freelance Web Developer',
      company: 'City-Cycling',
      duration: 'May 2024 - Oct 2024',
      description: [
        'Developed WebPages for City-Cycling',
        'Implemented Responsive Features like Store Location and Contact Us Page'
      ],
      technologies: ['PHP', 'Laravel']
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <span className="company">{exp.company}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
                <ul className="responsibilities">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="technologies-used">
                  {exp.technologies.map((tech, index) => (
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

export default Experience;