"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from '../components/tabbutton/page';

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Java</li>
        <li>Html</li>
        <li>Tailwind.Css</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Delhi Modal Public School</li>
        <li>Oriental Collage</li>
        <li>Silver Oak University</li>
      </ul>
    )
  },
  {
    title: "Achivement",
    id: "achivement",
    content: (
      <ul>
        <li>Machine Learning</li>
        <li>Jaipur Hackathon 2nd rank</li>
        <li>Google Cloud Developer</li>
      </ul>
    )
  }
];

const About: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className='bg-black/[0.96] h-screen '>
          <h1 className='text-center text-4xl p-6  font-bold text-white'>About Me</h1>
      <div className='grid md:grid-cols-2 md:mx-24  gap-5 py-8 px-4 overflow-hidden'>
        <div className='justify-center items-center '>
          <Image src="/assets/about-image.png" alt='authort' width={500} height={500} className='rounded-md w-full' />
        </div>
        <div className='justify-center items-center md:pl-10 '>
          <h3 className='text-whit my-2 text-white'>MY INTRO</h3>
          <p className='text-slate-400 text-1xl font-medium'>
            B.Tech in Computer Engineering. Ability to work with C, C++, Java, & Fullstack web
            development Next.js. Can work well under pressure & make the best of any situation.
            Passionate individual with great interpersonal and communication skills.
          </p>
          <div className='text-white flex flex-row mt-6 justify-start'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("achivement")} active={tab === "achivement"}>Achivement</TabButton>
          </div>
          <div className='mt-8 text-white'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
