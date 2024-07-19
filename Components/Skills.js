"use client";
import React, { useEffect } from 'react';
import './Style/SkillBar.css';

const SkillBar = ({ skill, percentage }) => {
  useEffect(() => {
    const progress = document.querySelector(`.progress-${skill}`);
    if (progress) {
      progress.style.setProperty('--progress-width', `${percentage}%`);
    }
  }, [skill, percentage]);

  return (
    <div className="skill-bar">
      <div className="skill-title">
        <h4>{skill}</h4>
      </div>
      <div className="progress-bar">
        <div className={`progress progress-${skill}`}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className='container'>
    <div className="skills">
      <h3>MY SKILLS</h3>
      <div className="skills-grid">
        <SkillBar skill="HTML" percentage={90} />
        <SkillBar skill="CSS" percentage={75} />
        <SkillBar skill="PHP" percentage={60} />
        <SkillBar skill="JavaScript" percentage={80} />
        <SkillBar skill="ReactJS" percentage={70} />
        <SkillBar skill="NextJS" percentage={65} />
      </div>
    </div>
    </div>
  );
};

export default Skills;
