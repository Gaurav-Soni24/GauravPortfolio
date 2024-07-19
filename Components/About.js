import React from 'react';
import './Style//About.css';
import Gaurav from "../public/gaurav.jpg";
import Image from 'next/image';
import Link from 'next/link';


const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="profile-picture">
        <Image src={Gaurav} alt="Profile Picture" />
      </div>
      <div className="about-me-content">
      <h1>About Me</h1>
        <p>Hi, My name is Gaurav Soni!</p>
        <p>
          I am currently pursuing a B.Tech degree in Computer Science and Engineering from Government Engineering College Bilaspur. I have a deep interest in web development, particularly in front-end development and web technologies.
        </p>
        <p>
          My passion lies in creating interactive, responsive, and visually appealing web applications. I enjoy working with modern web technologies and frameworks to bring ideas to life.
        </p>
        <ul>
          <li>1. Front-end Web Development</li>
          <li>2. Web Technologies</li>
          <li>3. Interactive UI Design</li>
          <li>4. Responsive Design</li>
        </ul>
        <Link href="mailto:sonigaurav2021@gmail.com"><button>Contact Me</button></Link>
      </div>
    </div>
  );
};

export default AboutMe;
