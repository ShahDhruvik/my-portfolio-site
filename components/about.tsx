import Image from 'next/image'
import React, { memo } from 'react'
import '../styles/about.css'
import MyPic from '../public/myPic2.avif'

const About = () => {
  console.log('About')
  return (
    <div id="about" className="pfAbout pfAboutImg ">
      <div className="pfAboutContainer ">
        <div className="pfAboutImg rotate-in-2-cw">
          <Image src="/myPic2.avif" width={240} alt="ME" height={240} />
        </div>
        <div className="pfAboutSum  ">
          <h2 className="textGradient">ABOUT ME</h2>
          <h3>I AM FULL-STACK DEVELOPER</h3>
          <p>
            My work is to make webApps which are Eye-pleasing. For interactive
            webApps contact me
          </p>
          <a href="#contact">
            <button type="button">CONTACT ME</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default memo(About)
