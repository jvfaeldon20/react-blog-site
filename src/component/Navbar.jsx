import React from 'react'
import '../assets/css/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <div className="navbar-brand">
          <a className="navbar-logo" href="/"><span className='text-primary'>REACT</span>BLOG</a>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/blogs">Blogs</a>
          </li>
          <li className="navbar-item">
            <a href="/contact-me">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar