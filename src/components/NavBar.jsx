import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>Huan Zeng</li>
        <li>
          <Link to="/www.linkedin.com/in/huan-zeng">Linkedin</Link>
        </li>
        <li>
          <Link to="https://github.com/huan00">Github</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
