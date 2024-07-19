// ProjectCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ image, title, description, link, liveLink }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <Image src={image} alt={title} width={300} height={200} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className='btn-container'>
      <a href={link} className="btn">View On GitHub</a>
      <Link href={liveLink} className="btn btn-live">View Project Live</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
