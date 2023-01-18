'use client'
import React, { memo, useEffect, useState } from 'react'
import '../../styles/projects.css'
import ProjectItems from '../../components/projectItems'

const Projects = () => {
  return (
    <div id="projects" className="pfProjects">
      <div className="pfProjectsWrapper p-10 ">
        <h3 className="text-4xl mb-5 sm:mb-10 font-semibold">PROJECTS</h3>
        <div
          id="sliderArea"
          className=" sliderArea overflow-auto snap-x scroll scroll-smooth whitespace-nowrap mt-5 mb-10 "
        >
          <ProjectItems />
        </div>
        <div className=" flex gap-10  ">
          <button className="flex-1 p-1  bg-[#32BEC3] text-black font-bold tracking-widest transition duration-700 hover:scale-105 rounded-l-3xl ">
            PREVIOUS
          </button>
          <button className="flex-1 p-1 bg-[#32BEC3] text-black font-bold tracking-widest transition duration-700 hover:scale-105 rounded-r-3xl ">
            NEXT
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Projects)
