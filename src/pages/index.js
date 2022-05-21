import React from 'react'
import ProjectCard from '../components/ProjectCard'
import center from '../components/assets/images/Center.png'
import fridaylaundry from '../components/assets/images/fridaylaundry.png'
import amusement from '../components/assets/images/amusement.png'

const index = () => {
  const name = 'HUAN ZENG'
  const title = 'FULL STACK SOFTWARE ENGINEER'
  const projects = [
    { name: 'Center', image: center },
    { name: 'Friday Laundry', image: fridaylaundry },
    { name: 'Amusement', image: amusement }
  ]
  const languages = ['HTML', 'CSS', 'JavaScript', 'C++', 'Java', 'Python']
  const frameworks = ['React', 'Vue', 'Django']
  const backends = ['Express', 'Node.js']
  const databases = ['MongoDB', 'PostgreSQL']

  return (
    <div>
      <section className="intro">
        <div>{name}</div>
        <p>{title}</p>
      </section>
      <div className="main-content">
        <div className="skills">
          <div className="skill-title">
            <h3>Skills</h3>
          </div>
          <div className="language">
            <h3>Languages</h3>
            <ul>
              {languages.map((langage) => (
                <li>{langage}</li>
              ))}
            </ul>
          </div>
          <div className="framework">
            <h3>framework</h3>
            <ul>
              {frameworks.map((framework) => (
                <li>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="backend">
            <h3>backend</h3>
            <ul>
              {backends.map((backend) => (
                <li>{backend}</li>
              ))}
            </ul>
          </div>
          <div className="database">
            <h3>database</h3>
            <ul>
              {databases.map((database) => (
                <li>{database}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-container">
          <h1>Projects</h1>
          {projects.map((project, idx) => (
            <ProjectCard name={project.name} img={project.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default index
