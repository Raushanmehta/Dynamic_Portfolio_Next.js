import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";

type Props = {}
export default function Footer({ }: Props) {

  return (

    <footer className="text-white body-font w-full " >
      <div className="footer_section py-4 bg-black px-4 md:px-24">
        <div className="container mx-auto">
          <div className="footer_section_2">
            <div className="flex flex-wrap md:mx-6">
              <div className="w-full lg:w-1/4 sm:w-1/2 mt-6">
                <h2 className="text-xl font-bold text-blue-800">ABOUT</h2>
                <p className="mt-4 text-neutral-400">Gujrat, @Ahmedhabad</p>
                <p className="text-neutral-400">India</p>
                <div className="text-neutral-400 hover:text-purple-900"><a href="9304137746">(+91) 9304137746</a></div>
                <div className="text-neutral-400 hover:text-purple-900"><a href="try.raushanmehta2184@gmail.com">try.raushanmehta@gmail.com</a></div>
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2 lg-p-4 mt-6">
                <h2 className="text-xl font-bold  text-blue-800">OUR SERVICE</h2>
                <div className="footer_menu mt-4">
                  <ul className="list-none mt-2 text-neutral-400">
                    <Link className='mt-1 hover:text-purple-900' href={""}>Web Devlop</Link> <br />
                    <Link className='mt-1 hover:text-purple-900' href={""}>Anorid Devlop</Link> <br />
                    <Link className='mt-1 hover:text-purple-900' href={""}>SEO Develop</Link> <br />
                    <Link className='mt-1 hover:text-purple-900' href={""}>Digtal Marketing</Link>

                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2  lg-p-4 mt-6">
                <h2 className="text-xl font-bold  text-blue-800">USEFUL LINK</h2>
                <div className="footer_menu mt-4">
                  <ul className="list-none mt-2 text-neutral-400">
                    <Link className='mt-1 hover:text-purple-900' href={"/about"}>About</Link><br/>
                    <Link className='mt-1 hover:text-purple-900' href={"/blog"}>Blog</Link><br/>
                    <Link className='mt-1 hover:text-purple-900' href={"/project"}>Project</Link><br/>
                    <Link className='mt-1 hover:text-purple-900' href={"/contact"}>Contact</Link>

                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/4 sm:w-1/2  lg-p-4 mt-6">
                <h2 className="text-xl font-bold  text-blue-800">NEWSLETTER SIGNUP</h2>
                <div className="form-group mt-4">
                  <textarea className="w-full h-10 border rounded text-black "
                    placeholder="Enter Your Email" rows={5} id="comment" name="Enter Your Email">
                  </textarea>
                  <div className=""><a href="#" className="inline-block px-4 py-2
                   bg-blue-800 hover:bg-purple-900 duration-75 text-white rounded">Subscribe</a></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="md:p-3 p-5  md:mx-24  flex items-center sm:flex-row flex-col">
          <a className="flex title-font  font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={"/assets/Logo.png"} alt='logo' width={150}
              height={150} />
          </a>
          <p className="text-sm text-gray-500 sm:ml-justify-center items-center text-center sm:mt-2 p-2">Copyright © Code Learning
            <a href="https://github/Raushanmehta" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
              @Raushan mehta</a>
          </p>
          <div className='flex flex-row md:ml-auto'>
            <ul className="flex space-x-4 text-2xl">
              <li><a href="https://www.instagram.com/iam_raushanmehtaa/" className='hover:text-pink-600' target='_blank' ><i aria-hidden="true"><FaInstagram /></i></a></li>
              <li><a href="https://www.linkedin.com/in/raushan-mehta-b63b8a257/" className='hover:text-blue-800' target='_blank' ><i aria-hidden="true"><CiLinkedin /></i></a></li>
              <li><a href="https://github.com/Raushanmehta" className='hover:text-gray-900' target='_blank' ><i aria-hidden="true"><FaGithub /></i></a></li>
              <li><a href="https://leetcode.com/u/raushanmehta/" className='hover:text-orange-500' target='_blank' ><i aria-hidden="true"><SiLeetcode /></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}