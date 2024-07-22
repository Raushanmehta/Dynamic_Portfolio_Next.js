/** @format */
"use client";
import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {

    const [IoMenu, setMenu] = useState(false);

    const navbarlinks = [
        {
            label: "HOME",
            link: "/"
        },
        {
            label: "PROJECT",
            link: "/project"
        },
        {
            label: "ABOUT",
            link: "/about"
        },
        {
            label: "BLOG",
            link: "/blog"
        },
        {
            label: "CONTACT",
            link: "/contact"
        },
    ];

    const toggleMenu = () => {
        setMenu(!IoMenu);
    }


    return (
        <div className=' sticky top-0 bg-black z-50' >
            <nav className="flex  justify-between items-center  px-8 py-5 lg:px-20 ">
                <div className='flex justify-between items-center gap-8'>
                    {/* menu */}
                    <section className='flex items-center gap-6'>
                        <FiMenu
                            onClick={toggleMenu}
                            className='cursor-pointer text-3xl lg:hidden text-white' />

                        <Image src={"/assets/Logo.png"} alt='logo' width={150}
                            height={150} />
                    </section>
                    {/* nevegation */}
                    {navbarlinks.map((d, i) => (
                        <a key={i} href={d.link}
                            className="hidden lg:block text-gray-200 
                            hover:text-purple-900  transition-all mt-1 px-2 items-center">
                            {d.label}
                        </a>
                    ))}
                </div>

                {/* Sidebar mobile menu */}
                <div
                    className={clsx('fixed h-full w-screen backdrop-blur-sm lg:hidden top-0 right-0  transition-all',
                        IoMenu ? 'translate-x-0' : '-translate-x-full')}>
                    <section
                        className='text-black bg-white flex-cl absolute 
                        left-0 top-0 h-screen p-8 gap-8 w-[260px]
                         z-50 flex-row'>
                        <IoCloseOutline
                            onClick={toggleMenu}
                            className='mt-0  mb-10  text-3xl cursor-pointer' />
                        {navbarlinks.map((d, i) => (
                            <a key={i} href={d.link} className="font-bold px-2 py-4 items-center flex ">
                                {d.label}
                            </a>
                        ))}
                    </section>
                </div>

                {/* join us */}
                <section
                    className='items-center gap-4 cursor-pointer '>
                    {<button
                        className='flex h-12 items-center justify-center cursor-pointer text-white'>
                        <Link className='text-3xl hover:text-purple-900' href={"/sign-up"} ><CiUser /></Link>
                    </button>}
                </section>
            </nav>
        </div>
    )
}
export default Navbar;