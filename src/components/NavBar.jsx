import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <section className="navbar-title">
          <li>
            <Link to="/">Fullstack Software Engineer</Link>
          </li>
        </section>
        <section
          className="navbar-list-item nav-links
        "
        >
          <li className="navbar-list-items">
            <a href="http://www.linkedin.com/in/huan-zeng">Linkedin</a>
          </li>
          <li className="navbar-list-items">
            <a href="https://github.com/huan00">Github</a>
          </li>
          <li className="navbar-list-items">
            <Link to="resume">Resume</Link>
          </li>
        </section>
      </ul>
    </div>
  )
}

export default NavBar
