import React from 'react'

const ProjectCard = ({ name, img, about, language, link }) => {
  return (
    <div className="project">
      <a href={link}>
        <img className="project-img" src={img} alt="" />
      </a>
      <div className="project-details">
        <p className="project-name">{name}</p>
        <p className="project-about">{about}</p>
        <div className="project-language">
          {language.map((lan, idx) =>
            idx !== language.length - 1 ? (
              <p key={idx}>{lan}/</p>
            ) : (
              <p key={idx}>{lan}</p>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
