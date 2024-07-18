import React from 'react';

const Page: React.FC = () => {
  const images = [
    "/assets/image/image-2.jpg",
    "/assets/image/image-1.jpg",
    "/assets/image/image-3.jpg",
    "/assets/image/image-3.jpg",
    "/assets/image/image-5.png",
    "/assets/image/image-4.jpg",
    "/assets/image/image-6.png",
  ];

  return (
    <div className='bg-black'>
       <h1 className='text-center text-4xl font-bold text-white'>Our Blog</h1>
       <div className="max-w-[72rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {images.map((src, index) => (
          <div key={index} className="group">
            <img 
              className="w-full h-auto object-cover cursor-pointer group-hover:opacity-50 transition-opacity duration-200" 
              src={src} 
              alt={`Image ${index + 1}`} 
            />
            <div className="inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Page;
