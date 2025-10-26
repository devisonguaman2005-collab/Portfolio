import React, { useState } from 'react';
import './LogoSlider.css';

const LogoSlider = ({ speed = 30 }) => {
  const [isPaused, setIsPaused] = useState(false);

  const technologies = [
    { name: 'Python', image: 'https://cdn.simpleicons.org/python/3776AB', color: '#3776AB' },
    { name: 'Django', image: 'https://cdn.simpleicons.org/django/092E20', color: '#092E20' },
    { name: 'Flask', image: 'https://cdn.simpleicons.org/flask/000000', color: '#000000' },
    { name: 'JavaScript', image: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: '#F7DF1E' },
    { name: 'React', image: 'https://cdn.simpleicons.org/react/61DAFB', color: '#61DAFB' },
    { name: 'Ionic', image: 'https://cdn.simpleicons.org/ionic/3880FF', color: '#3880FF' },
    { name: 'Express.js', image: 'https://cdn.simpleicons.org/express/000000', color: '#000000' },
    { name: 'Node.js', image: 'https://cdn.simpleicons.org/nodedotjs/339933', color: '#339933' },
    { name: 'Vite', image: 'https://cdn.simpleicons.org/vite/646CFF', color: '#646CFF' },
    { name: 'TypeScript', image: 'https://cdn.simpleicons.org/typescript/3178C6', color: '#3178C6' },
    { name: 'Prisma', image: 'https://cdn.simpleicons.org/prisma/2D3748', color: '#2D3748' },
    { name: 'HTML5', image: 'https://cdn.simpleicons.org/html5/E34F26', color: '#E34F26' },
    { name: 'CSS', image: 'https://cdn.simpleicons.org/css/663399', color: '#663399' },
    { name: 'PostgreSQL', image: 'https://cdn.simpleicons.org/postgresql/4169E1', color: '#4169E1' },
    { name: 'MySQL', image: 'https://cdn.simpleicons.org/mysql/4479A1', color: '#4479A1' },
    { name: 'SQLite', image: 'https://cdn.simpleicons.org/sqlite/003B57', color: '#003B57' },
    { name: 'MongoDB', image: 'https://cdn.simpleicons.org/mongodb/47A248', color: '#47A248' },
    { name: 'Docker', image: 'https://cdn.simpleicons.org/docker/2496ED', color: '#2496ED' },
    { name: 'Git', image: 'https://cdn.simpleicons.org/git/F05032', color: '#F05032' },
    { name: 'GitHub', image: 'https://cdn.simpleicons.org/github/181717', color: '#181717' },
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <div className="slider-wrapper">
      <div 
        className={`slider-container ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-track" style={{ animationDuration: `${speed}s` }}>
          {duplicatedTechs.map((tech, index) => (
            <div key={index} className="slider-item">
              <div className="tech-card" style={{ borderColor: tech.color }}>
                <img src={tech.image} alt={tech.name} className="tech-icon" />
                <span className="tech-name" style={{ color: tech.color }}>
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;