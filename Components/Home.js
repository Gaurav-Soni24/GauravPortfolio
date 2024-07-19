import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Gaurav from "../public/gaurav.jpg";
import './Style//Home.css'

const HomeSection = () => {
  return (
    <section className="home">
      <div className="profilePicture">
        <span>
          <Image className="profilePicture" src={Gaurav} alt="Gaurav Soni" width={500} height={500} />
        </span>
      </div>
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Gaurav Soni</h1>
        <h3>And I'm Aiming To be a <span className="text">Front End Developer</span></h3>
        <p>Looking for my first experience...</p>
        <div className="home-sci">
          <Link href="https://github.com/Gaurav-Soni24"><GitHubIcon fontSize='large'></GitHubIcon></Link>
          <Link href="https://www.linkedin.com/in/gaurav-soni-67aa9625b/"><LinkedInIcon fontSize='large'></LinkedInIcon></Link>
          <Link href="https://www.facebook.com/profile.php?id=100034358839593"><FacebookIcon fontSize='large'></FacebookIcon></Link>
          <Link href="https://www.instagram.com/_gaurav.soni_/"><InstagramIcon fontSize='large'></InstagramIcon></Link>
        </div>
        <Link href="/About" className="btn-box">More about me</Link>
      </div>
    </section>
  );
};

export default HomeSection;
