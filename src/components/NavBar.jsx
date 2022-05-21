import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/">Huan Zeng</Link>
        </li>
        <li className="navbar-list-item">
          <a href="http://www.linkedin.com/in/huan-zeng">Linkedin</a>
        </li>
        <li className="navbar-list-item">
          <a href="https://github.com/huan00">Github</a>
        </li>
        <Link to="resume">
          <li>Resume</li>
        </Link>
      </ul>
    </div>
  )
}

export default NavBar
