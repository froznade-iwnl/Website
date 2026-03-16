import * as React from 'react'

const PROJECTS = [
  {
    id: 'apps',
    title: 'HalalSG',
    tag: 'iOS App',
    description: 'An app to help people find nearby halal establishments in Singapore.',
    link: 'View Application'
  },
  {
    id: 'apps',
    title: 'FLOW',
    tag: 'App Playground',
    description: 'Helping youths to track their mood and information regarding mental-health',
  },
  {
    id: 'apps',
    title: 'Dear Diary',
    tag: 'App Playground',
    description: 'AI-powered diary that detects users emotion and a chatbot to respond to it',
  },
  {
    id: 'apps',
    title: 'Aksara Temple',
    tag: 'App Playground',
    description: 'Game to help students learn Java Script (No, not JS, Aksara Jawa).',
  },
]

const ALL_FILTER = 'all'

function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = React.useState(ALL_FILTER)
  const filteredProjects =
    activeFilter === ALL_FILTER
      ? PROJECTS
      : PROJECTS.filter((project) => project.id === activeFilter)

  const filterOptions = [ALL_FILTER, ...PROJECTS.map((project) => project.id)]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head">
          <h1 className="section-kicker">My Projects</h1>
          <p className="eyebrow">Fun projects that I did</p>
          {/* <h2 className="section-title">Fun projects that I did!</h2> */}
        </div>

        {/* <div className="projects-filter">
          <span className="filter-label">Filter by id</span>
          <div className="filter-chips">
            {filterOptions.map((id) => (
              <button
                key={id}
                className={`filter-chip ${activeFilter === id ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter(id)}
              >
                {id}
              </button>
            ))}
          </div>
        </div> */}

        <div className="projects-grid">
          {filteredProjects.map((item) => (
            <article key={item.id} 
            className={`project-card ${item.size === "wide" ? "project-wide" : ""}`}>
              <div className="project-card__header">
                <span className="project-tag">{item.tag}</span>
                <span className="project-id">{item.id.toUpperCase()}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="link" href>View Project</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
