import ProjectCard from '../components/ProjectCard'
import center from '../components/assets/images/Center.png'
import fridaylaundry from '../components/assets/images/fridaylaundry.png'
import amusement from '../components/assets/images/amusement.png'
import RAWG from '../components/assets/images/RAWG.png'
import weather from '../components/assets/images/weather.png'
import task from '../components/assets/images/task_manager.png'

const index = () => {
  const name = 'HUAN ZENG'
  const brandStatement =
    "Problem solver with experience in telecommication (Verizon, AT&T, Samsung, T-Mobile) where I leveraged tools to troubleshoot and solve user problems. Now I'm building simple and useful applications that would directly address problems with technology."
  const projects = [
    {
      name: 'Center - Mood tracking',
      image: center,
      about:
        'Tracking user emotions, provide history of their emotions. User can start forum chat to get advise from other users',
      language: ['React', 'CSS', 'Express', 'PostgreSQL'],
      link: 'https://center-mood-tracker.herokuapp.com/'
    },
    {
      name: 'Ecommerce',
      image: fridaylaundry,
      about:
        'E-commerce website, able to add item to cart and create user login',
      language: ['React', 'CSS', 'Express', 'PostgreSQL'],
      link: 'https://hzecommerce.netlify.app'
    },
    {
      name: 'Amusement Park',
      image: amusement,
      about: 'App use to track amusement parks, user can add parks and rides',
      language: ['React', 'CSS', 'Express', 'MongoDB'],
      link: 'https://huan-amusement-park.herokuapp.com/'
    },
    {
      name: 'RAWG Game',
      image: RAWG,
      about:
        'Use RAWG API to make an application, that can search game by genra or title',
      language: ['Vue', 'CSS', 'API'],
      link: 'https://main.d2knnk6nijo7tf.amplifyapp.com/'
    },
    {
      name: 'Weather App',
      image: weather,
      about:
        'Using react and WeatherAPI to build an weather app, on load the app display user location weather. user can search weather by zipcode.',
      language: ['ReactJs', 'CSS', 'API'],
      link: 'https://main.dec8narsebvtj.amplifyapp.com/'
    },
    {
      name: 'Task Manager',
      image: task,
      about:
        'Task manager app build with react and MUI. add, delete, update task, set task urgency',
      language: ['ReactJs', 'CSS'],
      link: 'https://taskmanager00.netlify.app/'
    }
  ]
  const languages = [
    'HTML',
    'CSS',
    'JavaScript',
    'C++',
    'Java',
    'Python',
    'Express',
    'Node.js'
  ]
  const frameworks = ['React', 'React Native', 'Vue', 'Django']

  const databases = ['MongoDB', 'PostgreSQL']

  return (
    <div className="app-container">
      <div className="info-container">
        <section className="intro">
          <div className="name">
            <p>{name}</p>
          </div>
          <p className="brandStatement">{brandStatement}</p>
        </section>
        <div className="main-content">
          <div className="skills">
            <div className="skills-titles">
              <h3 className="skills-title">Language</h3>
              <h3 className="skills-title">Framework</h3>
              <h3 className="skills-title">Database</h3>
            </div>
            <div className="skills-list">
              <div className="language skill-list-container">
                <ul>
                  {languages.map((langage, idx) => (
                    <li key={idx}>{langage}</li>
                  ))}
                </ul>
              </div>
              <div className="framework skill-list-container">
                <ul>
                  {frameworks.map((framework, idx) => (
                    <li key={idx}>{framework}</li>
                  ))}
                </ul>
              </div>
              <div className="database skill-list-container">
                <ul>
                  {databases.map((database, idx) => (
                    <li key={idx}>{database}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-container">
        {/* <h1>Projects</h1> */}
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            img={project.image}
            about={project.about}
            language={project.language}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default index
