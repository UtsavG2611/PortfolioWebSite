import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { 
      name: 'Java', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' 
    },
    { 
      name: 'Python', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' 
    },
    { 
      name: 'C++', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' 
    },
    { 
      name: 'MySQL', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' 
    },
    { 
      name: 'HTML', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' 
    },
    { 
      name: 'CSS', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' 
    },
    { 
      name: 'React', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' 
    },
    { 
      name: 'Pandas', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg' 
    },
    { 
      name: 'NumPy', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg' 
    },
    { 
      name: 'Matplotlib', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg' 
    },
    { 
      name: 'Git', 
      icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' 
    },
    { 
      name: 'GitHub', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' 
    },
    { 
      name: 'VS Code', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' 
    },
    { 
      name: 'PyCharm', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg' 
    },
    { 
      name: 'Eclipse', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/eclipse/eclipse-original.svg' 
    },
    { 
      name: 'Jupyter', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original-wordmark.svg' 
    },
    { 
      name: 'MongoDB', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' 
    },
    { 
      name: 'Postman', 
      icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' 
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;