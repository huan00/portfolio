import React from 'react'
import ProjectCard from '../components/ProjectCard'
import center from '../components/assets/images/Center.png'
import fridaylaundry from '../components/assets/images/fridaylaundry.png'

const index = () => {
  const name = 'HUAN ZENG'
  const title = 'FULL STACK SOFTWARE ENGINEER'
  const projects = [
    { name: 'Center', image: center },
    { name: 'Friday Laundry', image: fridaylaundry }
  ]

  return (
    <div>
      <section className="header">
        <div>{name}</div>
        <p>{title}</p>
      </section>
      <div className="main-content">
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C++</li>
            <li>React</li>
            <li>Django</li>
            <li>Express</li>
            <li>Vue</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <h1>Projects</h1>
        {projects.map((project, idx) => (
          <ProjectCard name={project.name} img={project.image} />
        ))}
      </div>
    </div>
  )
}

export default index
