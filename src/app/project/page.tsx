"use client";
import React, { useState } from 'react';
import ProjectCard from '../components/projectcard/page';
import ProjectTag from '../components/projecttag/page';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const ProjectData: Project[] = [
  {
    id: 1,
    title: "SignApp",
    description: "project 1 description",
    image: "/assets/about-boy.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "React project",
    description: "project 1 description",
    image: "/assets/about-boy.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "React project",
    description: "project 1 description",
    image: "/assets/about-boy.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "React project",
    description: "project 1 description",
    image: "/assets/about-boy.jpg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "React project",
    description: "project 1 description",
    image: "/assets/about-boy.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "React project",
    description: "project 1 description",
    image: "/assets/about-boy.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
];

const Project: React.FC = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  

  const filteredProjects = ProjectData.filter((project) => 
    project.tag.includes(tag));

  

  return (
    <div className='bg-black/[0.96] '>
      <h1 className='text-center text-4xl font-bold text-white '>My Project</h1>
      <div className='text-white flex flex-row justify-center items-center  gap-2 py-6'>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12 py-6 px-4 md:mx-24'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
