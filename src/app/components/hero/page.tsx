import React from 'react'
import Link from 'next/link'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { TypewriterEffect } from '../ui/typewriter-effect'
import { Spotlight } from '../ui/Spotlight'

const Hero = () => {

    const words = [
        {
            text: "Welcome",
        },
        {
            text: "To",
        },
        {
            text: "The",
        },
        {
            text: "Code",
        },
        {
            text: "Learning",
            className: "text-blue-800  dark:text-blue-800",
        },
    ];

    return (
        <div className='bg-black/[0.96]'>
            <div className='h-auto md:h-[40rem]  flex flex-col item-center 
      justify-center overflow-hidden mx-auto md:py-0  ' >

                <Spotlight
                    className="top-50 left-50 h-[80vh] w-[50vw]"
                    fill="purple" />
                <Spotlight
                    className="top-28 left-20 lg:left-80 h-[80vh] w-[50vw] "
                    fill="blue" />

                    <h6 className='text-white justify-center items-center  text-center'>DYNAMIC WEB MAGIC WITH NEXTJ.S</h6>
                <div className='p-4 w-full text-center '>
                    <TypewriterEffect words={words} className='text-4xl md:text-5xl lg:text-6xl' />
                    <p className='text-white justify-center items-center mt-6 text-center'>Hi! I'm Raushan mehta, a Next.js Developer based in India. </p>
                    <p className='mt-4  text-balance md:text-bg-netural-300 max-w-lg mx-auto text-1xl
         text-gray-500 font-medium '>Learning to
                        codesyntax, concepts, and principles of a programming language. Here's a brief
                        in a typical code learning journey</p>

                    <div className="mt-8 flex justify-center items-center ">
                        <div className='rounded-full border-2 py-4 px-6 text-xl cursor-pointer hover:border-purple-800'>
                            <Link
                                className='justfiy-center items-center px-8 py-4 text-white  font-medium 
                                    hover:text-purple-500  ' href={"/sign-up"}>Join Us
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero;