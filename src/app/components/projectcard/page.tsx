import React from 'react';
import Link from 'next/link';
import { HiCodeBracket } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <div
        className='h-52 md:h-72 group  flex justify-center items-center'
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='overlay  top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-30 bg-black opacity-0 
          group-hover:opacity-80 transition-all duration-200'>
          <Link
            className='h-14 w-14 m-2 flex justify-center items-center border-3 rounded-full border-[#ADB7BE] hover:border-white'
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiCodeBracket className='h-10 w-10 text-[#ADB7BE] hover:text-white transition-colors duration-200' />
          </Link>
          <Link
            className='h-14 w-14 m-2 flex justify-center items-center border-3 rounded-full border-[#ADB7BE] hover:border-white'
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoEyeOutline className='h-10 w-10 text-[#ADB7BE] hover:text-white transition-colors duration-200' />
          </Link>
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-purple-800 py-6 px-4'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
