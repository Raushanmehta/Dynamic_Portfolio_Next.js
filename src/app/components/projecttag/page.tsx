import React from 'react';

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-purple-800"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button 
      className={`${buttonStyle} rounded-full border-2 py-2 px-6 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

export default ProjectTag;
