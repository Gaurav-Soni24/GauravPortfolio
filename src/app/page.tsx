'use client'

import React from 'react';
import Gaurav from '../components/Gaurav'
import About from '../components/About'
import Skill from '../components/Skill'
import Qualification from '../components/Qualification'
import Contact from '../components/Contact'
import Projects from '@/components/Projects';

export default function Home() {

  return (
    <>
      <section id="home"><Gaurav /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="qualification"><Qualification /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

    </>
  );
}
