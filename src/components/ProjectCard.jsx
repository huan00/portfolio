import React from 'react'

const ProjectCard = ({ name, img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export default ProjectCard
