import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="software-engineer">
          <Link to="/">Fullstack Software Engineer</Link>
        </div>
        <div className="navbar-list">
          <ul>
            <li className="navbar-list-items">
              <a href="http://www.linkedin.com/in/huan-zeng">Linkedin</a>
            </li>
            <li className="navbar-list-items">
              <a href="https://github.com/huan00">Github</a>
            </li>
            <li className="navbar-list-items">
              <Link to="resume">Resume</Link>
            </li>
          </ul>
        </div>

        {/* <ul className="navbar-list">
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
        </ul> */}
      </div>
    </div>
  )
}

export default NavBar
