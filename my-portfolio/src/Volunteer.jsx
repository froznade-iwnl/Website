const VOLUNTEER = [
  {
    year: 2025,
    name: "HEARTWARE — River Hongbao 2025 (General Volunteer)",
  },
  {
    year: 2025,
    name: "Swift Design-athon 2025 — Mentor for Secondary School Participants",
  },
  {
    year: 2025,
    name: "Swift Accelerator Programme 2024 — Student Mentor",
  },
  {
    year: 2024,
    name: "Swift Accelerator Programme 2024 — Student Mentor",
  },
  {
    year: 2024,
    name: "Tung Ling Community Service — Engagement with Seniors",
  },
]

function Volunteer() {
  return (
    <section className="volunteer" id="volunteer">
      <div className="container">
        <div className="section-head">
          <h1 className="section-kicker">My Volunteering</h1>
          <p className="eyebrow">Events where I’ve helped out</p>
        </div>

        <table className="volunteer-table">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Volunteer Work</th>
            </tr>
          </thead>
          <tbody>
            {VOLUNTEER.map((item, index) => {
              const yearCount = VOLUNTEER.filter((entry) => entry.year === item.year).length
              const startIndex = VOLUNTEER.findIndex((entry) => entry.year === item.year)
              const middleIndex = startIndex + Math.floor((yearCount - 1) / 2)
              const isGroupStart = index === startIndex && startIndex > 0

              return (
                <tr
                  key={`${item.year}-${index}`}
                  className={isGroupStart ? 'volunteer-group-start' : ''}
                >
                  <td className={`volunteer-year ${index === middleIndex ? '' : 'volunteer-year--empty'}`}>
                    {index === middleIndex ? item.year : ''}
                  </td>
                  <td className="volunteer-name">{item.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Volunteer
