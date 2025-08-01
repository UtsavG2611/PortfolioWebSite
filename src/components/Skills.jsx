import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Responsive Design', level: 85 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'RESTful APIs', level: 75 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'npm/yarn', level: 85 },
        { name: 'Webpack', level: 70 },
        { name: 'Figma', level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;