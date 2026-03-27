'use client'

import React from 'react';
import Gaurav from '../components/Gaurav'
import About from '../components/About'
import Skill from '../components/Skill'
import Qualification from '../components/Qualification'
import Experience from '../components/Experience'
import Projects from '../components/Projects';
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <section id="home"><Gaurav /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="qualification"><Qualification /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}
