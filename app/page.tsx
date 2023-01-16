'use client'
import React, { memo } from 'react'
import '../styles/banner.css'

const Banner = () => {
  console.log('banner')

  return (
    <div className="pfBanner pfBannerImg ">
      <div className=" container mx-auto text-center text-gray-300 font-bold w-3/4 ">
        <h1 className="mb-5 text-lg md:text-2xl">
          Hi! I’m Dhruvik, I design products that delight and inspire people.
        </h1>
        <p className="mb-5 ">
          A product designer in react language . I create user-friendly
          interfaces for fast-growing startups.
        </p>
      </div>
    </div>
  )
}

export default memo(Banner)
