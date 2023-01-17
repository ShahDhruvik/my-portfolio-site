'use client'
import React, { memo, useEffect, useState } from 'react'
import '../styles/banner.css'

const Banner = () => {
  const [scrollValue, setScrollValue] = useState(false)
  console.log('banner')
  const listenScrollEvent = () => {
    setScrollValue(window.scrollY > 100)
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])
  return (
    <>
      {!scrollValue && (
        <div className="pfBanner pfBannerImg">
          (
          <div className=" container mx-auto text-center text-gray-300 font-bold w-3/4 ">
            <h1 className="mb-5 text-lg md:text-2xl">
              Hi! I’m Dhruvik, I design products that delight and inspire
              people.
            </h1>
            <p className="mb-5 ">
              A product designer in react language . I create user-friendly
              interfaces for fast-growing startups.
            </p>
          </div>
          )
        </div>
      )}
      {scrollValue && (
        <div className="bg-gray-200  h-screen flex flex-col items-center justify-end px-5 py-16 sm:pb-48">
          <p className="text-center text-[#070636] font-extrabold  text-4xl">
            The Navigation Will Help You Explore{' '}
          </p>
          <p style={{ fontSize: '100px' }}>&#128071;</p>
        </div>
      )}
    </>
  )
}

export default memo(Banner)
