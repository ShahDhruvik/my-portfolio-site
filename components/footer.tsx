'use client'
import React, { memo } from 'react'
import Whatsapp from '../assets/whatsapp.svg'
import Instagram from '../assets/instagram.svg'
import Github from '../assets/github.svg'
import Linkedin from '../assets/linkedin.svg'

const Footer = () => {
  console.log('footer')

  return (
    <footer
      id="footer"
      className="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-[#070636]"
    >
      <div className=" container mx-auto sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-300">
            ShahDhruvik
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex justify-center sm:justify-between items-center px-5 sm:px-12 flex-wrap-reverse">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex gap-3 mb-5">
          <a
            href="https://github.com/ShahDhruvik"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="hover:scale-90" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=9664765802"
            target="_blank"
            rel="noreferrer"
          >
            <Whatsapp className="hover:scale-90" />
          </a>
          <a
            href="https://www.instagram.com/dhruvik.sh"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="hover:scale-90" />
          </a>
          <a
            href="https://www.linkedin.com/in/ShahDhruvik"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="hover:scale-90" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
