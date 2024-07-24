"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const BlogFeature = ({
  title,
  description,
  image,
  userImage,
  userName,
}: {
  image: string;
  title: string;
  description: string;
  userImage: string;
  userName: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.x);
      offsetY.set(e.clientY - borderRect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]); // Include motionValue dependencies if necessary

  return (
    <div className="border border-white/30 rounded-xl relative overflow-hidden">
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        } }
        ref={border}
      ></motion.div>
      <div className="w-full h-60 md:h-50 lg:h-50 relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl p-[1.5px]"
        />
      </div>
      <div className="py-5 px-4">
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-2 text-neutral-400 text-lg">{description}</p>
        <div className="mt-5 flex items-center gap-3">
          <Image
            src={userImage}
            alt={userName}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-sm text-gray-500">{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogFeature;
