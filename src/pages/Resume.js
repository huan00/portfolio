import React from 'react'

const Resume = () => {
  return (
    <div className="resume">
      <a href="https://docs.google.com/document/d/1r2ujXidLWadwb6ss9i_KokR6HWcyzf6vJCm43nKe5t0/export?format=pdf">
        resume
      </a>
      <iframe
        title="resume"
        className="resume-container"
        src="https://docs.google.com/document/d/e/2PACX-1vQ3x96xobcMD2EMFKUXY134445aR1aTwN9yOmGh3G_MnI0Ekj7OBGZVttEDKOpKToy-2qQeZw0S5eo1/pub?embedded=true"
      ></iframe>
    </div>
  )
}

export default Resume
