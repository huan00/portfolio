import React from 'react'

const ProjectCard = ({ name, img }) => {
  return (
    <div className="project">
      <img className="project-img" src={img} alt="" />
      <h3 className="project-name">{name}</h3>
    </div>
  )
}

export default ProjectCard
