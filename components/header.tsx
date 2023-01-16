'use client'
import React, { memo, useState } from 'react'
import '../styles/header.css'
import Close from '../assets/close.svg'
import Menu from '../assets/menu.svg'

const Header = () => {
  console.log('header')

  const list = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SERVICE', link: '#service' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'SKILLS', link: '#skills' },
    { name: 'CONTACT', link: '#contact' },
  ]
  const [openBtn, setopenBtn] = useState(false)
  const openNav = () => {
    setopenBtn(!openBtn)
  }
  return (
    <header className="pfHeader">
      <div className="pfHeaderWrapper">
        <h1>
          <span>Shah</span>Dhruvik
        </h1>

        <nav className={`${openBtn ? 'animatedNav' : 'hidden'} `}>
          {openBtn == true && (
            <button className="closeBtn" onClick={openNav}>
              <Close />
            </button>
          )}
          <ul>
            {list.map((item) => {
              return (
                <li key={item.name}>
                  <a onClick={openNav} href={item.link}>
                    {item.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <nav className={`${openBtn ? 'hidden' : 'flexedNav'} `}>
          {openBtn == true && (
            <button className="closeBtn" onClick={openNav}>
              <Close />
            </button>
          )}
          <ul>
            {list.map((item) => {
              return (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              )
            })}
          </ul>
        </nav>

        {openBtn == false && (
          <button onClick={openNav}>
            <Menu />
          </button>
        )}
      </div>
    </header>
  )
}

export default memo(Header)
